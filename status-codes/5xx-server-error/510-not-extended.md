# 510 Not Extended

> 引用: "The HTTP `510 Not Extended` server error response status code is sent when the client request declares an HTTP Extension (RFC 2774) that should be used to process the request, but the extension is not supported." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/510

## 概要

- **分類**: 5xx（Server Error）
- **意味**: クライアントが必須のHTTP拡張（HTTP Extension Framework）を宣言したが、サーバーがその拡張をサポートしていないことを示します。
- **主な用途**: 拡張フレームワークを前提にした実験的/特殊用途。

## 代表的な原因

- 中間機器が hop-by-hop ヘッダーを落としてしまい、オリジンが拡張情報を受け取れない
- サーバーが当該拡張を実装していない

## 例

```http
HTTP/1.1 510 Not Extended
Content-Length: 0
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/510
- RFC 2774: https://www.rfc-editor.org/rfc/rfc2774.html
