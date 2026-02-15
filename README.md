# CheatSheet of HTTP Response Data Code

HTTP ステータスコード（HTTP レスポンスステータスコード）のチートシート資料集です。

- 入口（カテゴリ別目次）: [index.md](index.md)
- 個別ページ: `status-codes/` 配下（基本は **1 コード = 1 ファイル**）

## 方針（MIT 公開に耐えるための注意）

- RFC / MDN / IANA 等の本文を長文で転載しません（**要約＋参照リンク中心**）。
- 引用する場合は短くし、出典 URL を必ず添えます。
- 各ページは「意味」「よくある原因」「典型例」「レスポンス例（HTTPメッセージ）」「参考リンク」を揃えることを推奨します。

## ディレクトリ構成

```
./
├── index.md                         # ステータスコード目次（カテゴリ別）
├── status-codes/                    # 各ステータスコードの個別ページ
│   ├── 1xx-information/
│   ├── 2xx-success/
│   ├── 3xx-redirection/
│   ├── 4xx-client-error/
│   └── 5xx-server-error/
│   └── implementation-dependent/     # 実装依存 / 非標準（製品固有・慣習）
│       ├── index.md
│       ├── nginx-proprietary/
│       ├── cloudflare-proprietary/
│       └── proxy-conventions/
├── _templates/                      # 執筆テンプレート
│   └── status-code.md
├── _wip/                            # 作業途中メモ（公開してよい内容のみ）
└── LICENSE                          # MIT License
```

## 使い方

1. [index.md](index.md) から目的のコードを探す
2. 各コードの個別ページで、意味・原因・例・関連コードを参照する

標準外（製品固有 / 慣習）のコードは、[status-codes/implementation-dependent/index.md](status-codes/implementation-dependent/index.md) から辿れます。

## 執筆・更新ルール（概要）

- 命名: `status-codes/<category>/<code>-<slug>.md`
  - 例: `404 Not Found` → `status-codes/4xx-client-error/404-not-found.md`
- 実装依存（製品固有・慣習）の場合は、サブカテゴリを挟みます。
  - 例: `444 (nginx)` → `status-codes/implementation-dependent/nginx-proprietary/444-connection-closed-without-response.md`
  - 例: `524 (Cloudflare)` → `status-codes/implementation-dependent/cloudflare-proprietary/524-a-timeout-occurred.md`
- ステータスコード間の参照は、参照先ページが存在する場合は **相対リンク化**します。
  - 例: `502/504` のような言及、または本文中の単体コード言及（例: `302`）
  - ただし、コードブロック／インラインコード／見出し／引用（blockquote）／URL 行／既にリンク化済みの箇所は対象外（サンプルや外部リンクを壊さないため）

詳細は [.github/copilot-instructions.md](.github/copilot-instructions.md) を参照してください。

## ライセンス

本リポジトリは MIT License です。詳細は [LICENSE](LICENSE) を参照してください。
