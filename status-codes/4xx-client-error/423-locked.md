# 423 Locked

> 引用: "The HTTP `423 Locked` client error response status code indicates that a resource is locked, meaning it can't be accessed." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/423

## 概要

- **分類**: 4xx（Client Error）
- **意味**: リソースがロックされておりアクセスできないことを示します。
- **主な用途**: 主に WebDAV でのロック機構（ブラウザの通常アクセスではまず見ません）。

## 代表的なユースケース

- WebDAV でロックされたリソースに対し、適切なロックトークン等なしで操作した

## 典型的な原因

- 別クライアントがロックを保持している
- ロックの解放忘れ、タイムアウト/更新失敗

## 例

```http
HTTP/1.1 423 Locked
Content-Type: application/xml; charset="utf-8"

<?xml version="1.0" encoding="utf-8"?>
<D:error xmlns:D="DAV:">
	<D:lock-token-submitted>
		<D:href>/workspace/web-dav/</D:href>
	</D:lock-token-submitted>
</D:error>
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/423
- RFC 4918 (WebDAV): https://www.rfc-editor.org/rfc/rfc4918.html
