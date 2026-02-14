# 428 Precondition Required

> 引用: "The HTTP `428 Precondition Required` client error response status code indicates that the server requires the request to be conditional." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/428

## 概要

- **分類**: 4xx（Client Error）
- **意味**: サーバーが「条件付きリクエスト（conditional request）」を要求していることを示します。典型的には `If-Match` のような前提条件ヘッダーが必須です。
- **主な用途**: 上書き競合（mid-air collision）を防ぐため、更新系リクエストに ETag 条件を強制する。

## 代表的なユースケース

- `PUT`/`PATCH`/`DELETE` に `If-Match` が必須というポリシー

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `If-Match`, `If-Unmodified-Since`, `ETag`
- 関連ステータス: `412 Precondition Failed`（条件はあるが一致しない）

## 例

```http
HTTP/1.1 428 Precondition Required
Content-Type: application/json

{"error":"MissingPrecondition","message":"Updating documents requires a precondition header."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/428
- RFC 6585: https://www.rfc-editor.org/rfc/rfc6585.html
- MDN（条件付きリクエスト）: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Conditional_requests
