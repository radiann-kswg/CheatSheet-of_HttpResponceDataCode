const docListEl = document.getElementById("doc-list");
const searchEl = document.getElementById("search");
const docViewEl = document.getElementById("doc-view");
const sampleListEl = document.getElementById("sample-list");

let documents = [];
let currentPath = "";

const markdownRenderer = new marked.Marked({
  gfm: true,
  breaks: false,
});

function parseDocumentsFromIndex(markdown) {
  const linkRegex = /\[([^\]]+)\]\((status-codes\/[^)]+\.md)\)/g;
  const map = new Map();
  let match;

  while ((match = linkRegex.exec(markdown)) !== null) {
    const title = match[1].replace(/`/g, "").trim();
    const path = match[2].trim();
    if (!map.has(path)) {
      map.set(path, { title, path });
    }
  }

  return [...map.values()].sort((a, b) => a.title.localeCompare(b.title, "ja"));
}

function renderDocumentList(items) {
  docListEl.innerHTML = "";

  if (items.length === 0) {
    const li = document.createElement("li");
    li.textContent = "一致するページがありません。";
    docListEl.appendChild(li);
    return;
  }

  for (const doc of items) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = doc.title;
    btn.className = doc.path === currentPath ? "active" : "";
    btn.addEventListener("click", () => loadDocument(doc.path));
    li.appendChild(btn);
    docListEl.appendChild(li);
  }
}

function extractHttpBlocks(markdown) {
  const blocks = [];
  const regex = /```http\s*([\s\S]*?)```/g;
  let match;
  while ((match = regex.exec(markdown)) !== null) {
    blocks.push(match[1].trim());
  }
  return blocks;
}

function renderSamples(blocks) {
  sampleListEl.innerHTML = "";

  if (blocks.length === 0) {
    sampleListEl.innerHTML = "<p>このページには HTTP サンプルがありません。</p>";
    return;
  }

  blocks.forEach((block, index) => {
    const wrapper = document.createElement("section");
    wrapper.className = "sample-item";

    const head = document.createElement("header");
    const title = document.createElement("strong");
    title.textContent = `サンプル ${index + 1}`;

    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.textContent = "コピー";
    copyBtn.addEventListener("click", async () => {
      await navigator.clipboard.writeText(block);
      copyBtn.textContent = "コピー済み";
      setTimeout(() => {
        copyBtn.textContent = "コピー";
      }, 1000);
    });

    head.appendChild(title);
    head.appendChild(copyBtn);

    const pre = document.createElement("pre");
    pre.textContent = block;

    wrapper.appendChild(head);
    wrapper.appendChild(pre);
    sampleListEl.appendChild(wrapper);
  });
}

function normalizeDocPath(href, basePath) {
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("#")) {
    return null;
  }

  if (!href.endsWith(".md")) {
    return null;
  }

  if (href.startsWith("status-codes/")) {
    return href;
  }

  const baseDir = basePath.includes("/")
    ? basePath.slice(0, basePath.lastIndexOf("/") + 1)
    : "";
  const resolved = new URL(href, `https://local/${baseDir}`).pathname;
  return resolved.replace(/^\//, "");
}

async function loadDocument(path) {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to load: ${path}`);
  }

  currentPath = path;

  const markdown = await response.text();
  const html = markdownRenderer.parse(markdown);
  docViewEl.innerHTML = DOMPurify.sanitize(html);
  renderSamples(extractHttpBlocks(markdown));
  renderDocumentList(filterDocuments(searchEl.value));

  history.replaceState({}, "", `#${encodeURIComponent(path)}`);

  docViewEl.querySelectorAll("a").forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href) {
      return;
    }

    const targetDoc = normalizeDocPath(href, path);
    if (!targetDoc) {
      return;
    }

    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      loadDocument(targetDoc).catch(showError);
    });
  });
}

function filterDocuments(query) {
  const keyword = query.trim().toLowerCase();
  if (!keyword) {
    return documents;
  }

  return documents.filter((item) => {
    return (
      item.title.toLowerCase().includes(keyword) ||
      item.path.toLowerCase().includes(keyword)
    );
  });
}

function showError(error) {
  docViewEl.innerHTML = `<p>表示に失敗しました: ${error.message}</p>`;
}

async function bootstrap() {
  const rootResponse = await fetch("index.md");
  if (!rootResponse.ok) {
    throw new Error("index.md の読み込みに失敗しました。");
  }

  const rootMarkdown = await rootResponse.text();
  documents = parseDocumentsFromIndex(rootMarkdown);
  renderDocumentList(documents);

  searchEl.addEventListener("input", () => {
    renderDocumentList(filterDocuments(searchEl.value));
  });

  const hashPath = decodeURIComponent(location.hash.replace(/^#/, ""));
  const initial = documents.find((doc) => doc.path === hashPath) ?? documents[0];
  if (initial) {
    await loadDocument(initial.path);
  }
}

bootstrap().catch(showError);
