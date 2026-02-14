# 405 Method Not Allowed

> 引用: "The HTTP `405 Method Not Allowed` client error response status code indicates that the server knows the request method, but the target resource doesn't support this method." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/405

## 概要

- **分類**: 4xx（Client Error）
- **意味**: リクエストメソッド自体は理解できるが、対象リソースがそのメソッドを受け付けないことを示します。一般に `Allow` ヘッダーで許可メソッドを示します。
- **主な用途**: ルーティングやメソッド制約（GET のみ、POST のみ等）に違反した場合。

## 代表的なユースケース

- `GET /resource` は可能だが `DELETE /resource` は不可
- セキュリティ上 `TRACE` を無効化

## 典型的な原因（よくある勘違い含む）

- メソッド不正を [400 Bad Request](400-bad-request.md) で返してしまう（クライアントが判断しづらい）
- `Allow` を返さず、クライアントが許可メソッドを知れない

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Allow`
- 関連ステータス: [404 Not Found](404-not-found.md), [501 Not Implemented](../5xx-server-error/501-not-implemented.md)

## 例

```http
HTTP/1.1 405 Method Not Allowed
Allow: GET, POST, HEAD
Content-Length: 0
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/405
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
