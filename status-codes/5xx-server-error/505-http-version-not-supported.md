# 505 HTTP Version Not Supported

> 引用: "The HTTP `505 HTTP Version Not Supported` server error response status code indicates that the HTTP version used in the request is not supported by the server." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/505

## 概要

- **分類**: 5xx（Server Error）
- **意味**: リクエストで指定されたHTTPバージョンをサーバーがサポートしていないことを示します。
- **主な用途**: 互換性のないHTTPバージョン、またはリクエストラインの破損/誤転送が原因でバージョン部が解釈不能になった場合。

## 代表的な原因

- 古い/特殊なクライアントが非対応バージョンを送る
- ロードバランサ等がリクエストラインを壊して転送している（改行コード、パーセントエンコード処理の不備など）

## 例

```http
HTTP/1.1 505 HTTP Version Not Supported
Content-Type: text/plain

HTTP version not supported.
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/505
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
