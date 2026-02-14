# 403 Forbidden

> 引用: "The HTTP `403 Forbidden` client error response status code indicates that the server understood the request but refused to process it." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/403

## 概要

- **分類**: 4xx（Client Error）
- **意味**: サーバーは要求を理解したが、処理を拒否したことを示します（多くは権限不足など、アプリケーションロジック起因）。
- **主な用途**: 認証はできているが権限が足りない、操作が禁止されている、IP 制限など。

## 代表的なユースケース

- ロール/権限不足（管理者のみ許可など）
- WAF や ACL によりアクセス禁止

## 典型的な原因（よくある勘違い含む）

- [401 Unauthorized](401-unauthorized.md) と混同する（403 は「認証しても解決しない」ケースが多い）
- リソースの存在を隠したいのに 403 を返してしまう（状況により [404 Not Found](404-not-found.md) を返す設計もある）

## 関連ヘッダー / 関連ステータス

- 関連ステータス: [401 Unauthorized](401-unauthorized.md), [404 Not Found](404-not-found.md)

## 例

```http
HTTP/1.1 403 Forbidden
Content-Type: application/json

{"error":"Forbidden","message":"You do not have permission to perform this action."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/403
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
