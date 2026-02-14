# 411 Length Required

> 引用: "The HTTP `411 Length Required` client error response status code indicates that the server refused to accept the request without a defined Content-Length header." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/411

## 概要

- **分類**: 4xx（Client Error）
- **意味**: `Content-Length` が必要だが付いていない（または定義されていない）ため、サーバーがリクエストを受け付けなかったことを示します。
- **主な用途**: サーバー/中継が chunked 転送（`Transfer-Encoding: chunked`）を受け付けず、長さ指定を要求する場合。

## 代表的なユースケース

- クライアントが `Transfer-Encoding: chunked` を使って送っている
- ゲートウェイ/プロキシが `Content-Length` 必須ポリシー

## 典型的な原因（よくある勘違い含む）

- クライアント側ライブラリが自動的に chunked になっていることに気づかない
- `Content-Length` を手動で付けるべきか、送信方法を変えるべきかの切り分けができていない

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Content-Length`, `Transfer-Encoding`

## 例

```http
HTTP/1.1 411 Length Required
Content-Type: application/json

{"error":"LengthRequired","message":"Content-Length header is required."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/411
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
