# 429 Too Many Requests

> 引用: "The HTTP `429 Too Many Requests` client error response status code indicates the client has sent too many requests in a given amount of time." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429

## 概要

- **分類**: 4xx（Client Error）
- **意味**: 一定時間内に送信したリクエストが多すぎる（レート制限に抵触）ことを示します。
- **主な用途**: サーバー/アプリの保護（DoS 緩和、リソース保護、API 利用制御）。

## 代表的なユースケース

- 認証失敗やバグにより、クライアントが短時間にリトライを繰り返す
- 共有 IP（NAT）配下で全体が制限に当たる

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Retry-After`
- 関連ステータス: `503 Service Unavailable`（過負荷・メンテ等での一時不可）

## 例

```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json
Retry-After: 60

{"error":"TooManyRequests","message":"Rate limit exceeded. Retry later."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429
- RFC 6585: https://www.rfc-editor.org/rfc/rfc6585.html
