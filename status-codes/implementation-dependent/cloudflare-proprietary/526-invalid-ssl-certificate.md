# 526 (Cloudflare) Invalid SSL Certificate

> Cloudflare 独自: Cloudflare がオリジンの証明書を検証できず、セキュア接続を確立できない状況です。

## 概要

- **分類**: 非標準（Cloudflare 独自 / 5xx 系）
- **意味**: オリジン証明書が検証できない（Full (Strict) の前提）
- **主な用途**: オリジン証明書の不備（期限/署名/ホスト名不一致等）の切り分け

## 代表的なユースケース

- Full (Strict) で運用しているが、オリジン証明書が自己署名・期限切れ・ホスト名不一致など

## 典型的な原因（よくある勘違い含む）

- 証明書が期限切れ/失効
- 信頼された CA による署名ではない（自己署名等）
- CN/SAN とアクセス先ホスト名が一致しない

## 関連ヘッダー / 関連ステータス

- ハンドシェイク段階で失敗: [525 (Cloudflare) SSL Handshake Failed](525-ssl-handshake-failed.md)

## 例

```http
HTTP/1.1 526
Content-Type: text/html
```

## 参考

- Cloudflare Docs: Error 526
  - https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-526/
