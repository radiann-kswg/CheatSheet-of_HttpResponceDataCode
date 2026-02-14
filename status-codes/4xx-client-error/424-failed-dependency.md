# 424 Failed Dependency

> 引用: "The HTTP `424 Failed Dependency` client error response status code indicates that the method could not be performed on the resource because the requested action depended on another action, and that action failed." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/424

## 概要

- **分類**: 4xx（Client Error）
- **意味**: 実行しようとした操作が「別の操作に依存」しており、その依存先が失敗したため処理できないことを示します。
- **主な用途**: WebDAV のように、1つの要求内で複数操作をまとめて行うプロトコル。

## 代表的なユースケース

- WebDAV の `PROPPATCH` で複数のプロパティ更新を行い、一部が失敗したため残りも失敗扱い

## 典型的な原因

- 依存先操作の権限不足/不正な値/競合など

## 例

```http
HTTP/1.1 424 Failed Dependency
Content-Type: application/json

{"error":"FailedDependency","message":"A dependent operation failed."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/424
- RFC 4918 (WebDAV): https://www.rfc-editor.org/rfc/rfc4918.html
