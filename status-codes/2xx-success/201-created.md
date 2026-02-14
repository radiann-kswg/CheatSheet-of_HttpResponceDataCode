# 201 Created

> 引用: "The HTTP `201 Created` successful response status code indicates that the HTTP request has led to the creation of a resource." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/201

## 概要

- **分類**: 2xx（Success）
- **意味**: リクエストの結果として新しいリソースが作成されたことを示します。
- **主な用途**: POST での作成 API。

## 代表的なユースケース

- ユーザー/注文などのリソース作成が成功し、作成された URI を `Location` で返す

## 典型的な原因（よくある勘違い含む）

- 作成したのに `Location` を返さず、後続の取得方法が曖昧になる
- 実際は非同期作成なのに 201 を返してしまう（その場合は 202 を検討）

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Location`
- 関連ステータス: [200 OK](200-ok.md), [202 Accepted](202-accepted.md)

## 例

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: https://example.com/users/123

{"id":123}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/201
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
