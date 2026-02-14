# 415 Unsupported Media Type

> 引用: "The HTTP `415 Unsupported Media Type` client error response status code indicates that the server refused to accept the request because the message content format is not supported." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/415

## 概要

- **分類**: 4xx（Client Error）
- **意味**: リクエストのボディ形式（`Content-Type` や `Content-Encoding`）がサーバーの想定と合わず、受け付けを拒否したことを示します。
- **主な用途**: API が `application/json` を期待しているのに別形式で送った、charset 指定が不正など。

## 代表的なユースケース

- `Content-Type` が無い／誤っている
- `Content-Encoding`（gzip 等）をサーバーがサポートしない

## 典型的な原因（よくある勘違い含む）

- ボディが JSON なのに `application/x-www-form-urlencoded` を送っている
- `UTF8` など不正な charset 指定によりメディアタイプとして拒否される

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Content-Type`, `Content-Encoding`
- 関連ステータス: `400 Bad Request`, `406 Not Acceptable`

## 例

```http
HTTP/1.1 415 Unsupported Media Type
Content-Length: 0
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/415
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
