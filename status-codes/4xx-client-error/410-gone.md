# 410 Gone

> 引用: "The HTTP `410 Gone` client error response status code indicates that the target resource is no longer available at the origin server and that this condition is likely to be permanent." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/410

## 概要

- **分類**: 4xx（Client Error）
- **意味**: リソースがオリジンから恒久的に消失した可能性が高いことを示します。デフォルトでキャッシュ可能です。
- **主な用途**: 明確に「もう戻らない」削除（期限切れキャンペーン、廃止 API など）。

## 代表的なユースケース

- 廃止済みページやプロモーションページ
- 恒久削除されたリソース ID

## 典型的な原因（よくある勘違い含む）

- 404 と使い分けない（恒久削除なら 410 を検討）
- 410 を返しているのにリンクやクライアントがそのまま（リンクの除去/更新が必要）

## 関連ヘッダー / 関連ステータス

- 関連ステータス: [404 Not Found](404-not-found.md)

## 例

```http
HTTP/1.1 410 Gone
Content-Type: application/json

{"error":"Gone","message":"This resource has been permanently removed."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/410
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
