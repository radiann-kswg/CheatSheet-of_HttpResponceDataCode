# 426 Upgrade Required

> 引用: "The HTTP `426 Upgrade Required` client error response status code indicates that the server refused to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/426

## 概要

- **分類**: 4xx（Client Error）
- **意味**: 現在のプロトコルでは拒否するが、別プロトコルにアップグレードすれば処理できる可能性があることを示します。
- **主な用途**: `Upgrade` ヘッダーによるプロトコル移行の要求。

## 代表的なユースケース

- サーバーが HTTP/1.1 では受け付けず、HTTP/2 や HTTP/3 を要求

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Upgrade`, `Connection: Upgrade`
- 関連ステータス: `101 Switching Protocols`

## 例

```http
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/3.0
Connection: Upgrade
Content-Type: text/plain

This service requires use of the HTTP/3.0 protocol.
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/426
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
