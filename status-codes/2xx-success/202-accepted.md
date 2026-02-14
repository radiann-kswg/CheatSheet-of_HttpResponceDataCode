# 202 Accepted

> 引用: "The HTTP `202 Accepted` successful response status code indicates that a request has been accepted for processing, but processing has not been completed or may not have started." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/202

## 概要

- **分類**: 2xx（Success）
- **意味**: 処理の受け付けは成功したが、処理完了はまだである（または開始していない）ことを示します。
- **主な用途**: 非同期ジョブ/バッチ受付。

## 代表的なユースケース

- レポート生成、メール配信、エクスポートなど時間がかかる処理の受付
- `monitorUrl` のような追跡 URI をボディや `Location` 相当で返し、ポーリングさせる

## 典型的な原因（よくある勘違い含む）

- 202 を返した時点で処理が確定したと誤解する（受理はしても失敗し得る）
- 完了確認の手段が無く、クライアントが結果を追えない

## 関連ヘッダー / 関連ステータス

- 関連ステータス: `200 OK`, `201 Created`

## 例

```http
HTTP/1.1 202 Accepted
Content-Type: application/json

{"taskId":"123","monitorUrl":"https://example.com/tasks/123/status"}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/202
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
