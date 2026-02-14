# 422 Unprocessable Content

> 引用: "The HTTP `422 Unprocessable Content` client error response status code indicates that the server understood the content type of the request content, and the syntax of the request content was correct, but it was unable to process the contained instructions." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/422

## 概要

- **分類**: 4xx（Client Error）
- **意味**: `Content-Type` も構文も正しいが、**意味的に処理できない**ため要求を完了できないことを示します（バリデーションエラー等）。
- **主な用途**: 入力検証、ドメインルール違反、整合性チェック失敗。

## 代表的なユースケース

- JSON の構文は OK だが、必須フィールド欠落/範囲外/参照不整合
- 形式は正しいが、サーバーの期待する制約（例: 厳格 Base64）に合わない

## 典型的な原因（よくある勘違い含む）

- 400 と混同する（400 は構文や一般的な不正、422 は内容の意味的問題を表すことが多い）
- 422 の詳細を返さず、クライアントが修正できない

## レスポンス設計のヒント

- クライアントが修正できるよう、**どの項目がなぜ失敗したか**を本文に含めるのが実用的です。
- MDN の記述どおり、変更なしに同じリクエストを繰り返しても失敗しやすいため、エラー内容は明確に。

## 例

```http
HTTP/1.1 422 Unprocessable Content
Content-Type: application/json

{"error":"ValidationError","message":"email is invalid"}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/422
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
