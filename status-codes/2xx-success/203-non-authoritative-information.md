# 203 Non-Authoritative Information

> 引用: "The HTTP `203 Non-Authoritative Information` successful response status code indicates that the request was successful, but a transforming proxy has modified the headers or enclosed content from the origin server's 200 (OK) response." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/203

## 概要

- **分類**: 2xx（Success）
- **意味**: 成功応答だが、変換プロキシによりヘッダーや内容がオリジンの `200 OK` から変更されていることを示します。
- **主な用途**: 変換・フィルタリング（マルウェア除去、トランスコード等）が行われたことの通知。

## 代表的なユースケース

- プロキシが添付 URL を差し替える、表現形式を変換するなどの加工を行った

## 典型的な原因（よくある勘違い含む）

- アプリ側が返していないのに 203 が出る（途中のプロキシ/セキュリティ製品を疑う）

## 関連ヘッダー / 関連ステータス

- 関連ステータス: [200 OK](200-ok.md)

## 例

```http
HTTP/1.1 203 Non-Authoritative Information
Content-Type: application/json

{"message":"Transformed by proxy"}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/203
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
