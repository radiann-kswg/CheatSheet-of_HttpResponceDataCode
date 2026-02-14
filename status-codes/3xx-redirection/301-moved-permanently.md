# 301 Moved Permanently

> 引用: "The HTTP `301 Moved Permanently` redirection response status code indicates that the requested resource has been permanently moved to the URL in the Location header." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/301

## 概要

- **分類**: 3xx（Redirection）
- **意味**: リソースの恒久的な移動を示し、移動先は `Location` ヘッダーで通知します。
- **主な用途**: URL の恒久変更（ドメイン変更、パス変更、末尾スラッシュ統一など）の正規化。

## 代表的なユースケース

- `http://` → `https://` への恒久移行
- `/old-path` → `/new-path` への恒久移動
- 正規 URL へ統一（`www` の有無など）

## 典型的な原因（よくある勘違い含む）

- 恒久移動なのに `302` を使ってしまい、キャッシュや SEO の意図とズレる
- 非 GET 系（例: `POST`）での挙動を「必ずメソッドが維持される」と思い込む（必要なら `308` を検討）

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Location`, `Cache-Control`
- 関連ステータス: [308 Permanent Redirect](308-permanent-redirect.md)（恒久＋メソッド維持）, [302 Found](302-found.md), [307 Temporary Redirect](307-temporary-redirect.md)

## 例

```http
HTTP/1.1 301 Moved Permanently
Location: https://example.com/new-path
Content-Length: 0
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/301
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
