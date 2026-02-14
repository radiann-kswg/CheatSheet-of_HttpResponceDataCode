# 431 Request Header Fields Too Large

> 引用: "The HTTP `431 Request Header Fields Too Large` client error response status code indicates that the server refuses to process the request because the request's HTTP headers are too long." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/431

## 概要

- **分類**: 4xx（Client Error）
- **意味**: リクエストヘッダーが大きすぎて、サーバーが処理を拒否したことを示します。
- **主な用途**: Cookie 肥大化、長すぎる `Referer`、ヘッダー数/サイズ制限超過。

## 代表的なユースケース

- `Cookie` が大きすぎる（セッション情報の詰め込み、不要 Cookie の蓄積）
- 認証トークンを複数ヘッダーで重複送信している

## 対応のヒント

- クライアント側: Cookie の削除、不要ヘッダーの削減
- サーバー側: 上限値の調整（ただし無制限化は DoS リスク）

## 例

```http
HTTP/1.1 431 Request Header Fields Too Large
Content-Type: application/json

{"error":"HeadersTooLarge","message":"Request headers are too large. Reduce Cookie size."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/431
- RFC 6585: https://www.rfc-editor.org/rfc/rfc6585.html
