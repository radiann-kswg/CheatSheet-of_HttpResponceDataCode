# 507 Insufficient Storage

> 引用: "The HTTP `507 Insufficient Storage` server error response status code indicates that an action could not be performed because the server does not have enough available storage to successfully complete the request." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/507

## 概要

- **分類**: 5xx（Server Error）
- **意味**: サーバー側のストレージ（広義のリソース）が不足していて処理を完了できないことを示します。
- **主な用途**: WebDAV 由来だが、ディスク枯渇/容量制限/一時領域不足など一般的な枯渇にも使われます。

## 代表的な原因

- ディスク容量不足（ログ肥大化など）
- 一時ファイル領域不足
- アプリ内部の保存上限（キュー、バケット、メモリ制限）

## 関連ステータス

- [413 Content Too Large](../4xx-client-error/413-content-too-large.md)（リクエストが大きすぎる）とは性質が異なる：507 はサーバー資源の一時的枯渇を示すことが多い

## 例

```http
HTTP/1.1 507 Insufficient Storage
Content-Type: application/json

{"error":"InsufficientStorage","message":"Not enough storage available."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/507
- RFC 4918 (WebDAV): https://www.rfc-editor.org/rfc/rfc4918.html
