# 501 Not Implemented

> 引用: "The HTTP `501 Not Implemented` server error response status code means that the server does not support the functionality required to fulfill the request." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/501

## 概要

- **分類**: 5xx（Server Error）
- **意味**: サーバーが要求を満たすのに必要な機能をサポートしていないことを示します。
- **主な用途**: 未サポートのHTTPメソッド／拡張機構など。

## 典型的な原因（よくある勘違い含む）

- 未知/拡張メソッドを受け取った（ただし GET/HEAD は必須なので通常 501 にしない）
- 「サポートしているが意図的に拒否」なのに 501 を返している（その場合は [405 Method Not Allowed](../4xx-client-error/405-method-not-allowed.md) が適切なことが多い）

## 関連ヘッダー / 関連ステータス

- 関連ステータス: [405 Method Not Allowed](../4xx-client-error/405-method-not-allowed.md), [510 Not Extended](510-not-extended.md)

## 例

```http
HTTP/1.1 501 Not Implemented
Content-Type: application/json

{"error":"NotImplemented","message":"This server does not support the requested method."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/501
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
