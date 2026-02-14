# 508 Loop Detected

> 引用: "The HTTP `508 Loop Detected` server error response status code indicates that the entire operation failed because it encountered an infinite loop while processing a request with `Depth: infinity`." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/508

## 概要

- **分類**: 5xx（Server Error）
- **意味**: `Depth: infinity` のような深い探索処理中に循環参照（無限ループ）が検出され、操作全体が失敗したことを示します。
- **主な用途**: WebDAV 系の操作（PROPFIND 等）。

## 代表的な原因

- リソースの参照関係が循環している（リンク/コレクション構造のループ）
- サーバー側の探索実装の不具合

## 例

```http
HTTP/1.1 508 Loop Detected
Content-Type: application/json

{"error":"LoopDetected","message":"Cyclic reference detected."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/508
- RFC 5842: https://www.rfc-editor.org/rfc/rfc5842.html
