# 204 No Content

> 引用: "The HTTP `204 No Content` successful response status code indicates that a request has succeeded, but the client doesn't need to navigate away from its current page." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/204

## 概要

- **分類**: 2xx（Success）
- **意味**: リクエストは成功したが、返すべきレスポンスボディがないことを示します。
- **主な用途**: DELETE の成功、保存して編集継続（UI を遷移させない）など。

## 代表的なユースケース

- DELETE の成功（ボディなし）
- PUT/PATCH の成功（ボディを返さず、必要に応じて ETag を返す）

## 典型的な原因（よくある勘違い含む）

- 204 なのにボディを返してしまう（クライアント/ブラウザが拒否する可能性がある）

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `ETag`
- 関連ステータス: `200 OK`, `201 Created`

## 例

```http
HTTP/1.1 204 No Content

```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/204
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
