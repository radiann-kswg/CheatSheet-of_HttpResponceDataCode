# 404 Not Found

> 引用: "The HTTP `404 Not Found` client error response status code indicates that the server cannot find the requested resource." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404

## 概要

- **分類**: 4xx（Client Error）
- **意味**: サーバーが指定されたリソースを見つけられないことを示します。恒久削除か一時的かまでは示しません。
- **主な用途**: 存在しないパス、誤った URL、移動・削除されたページへのアクセス。

## 代表的なユースケース

- ルーティングに存在しないパス
- 記事や商品が削除されたがリダイレクトが無い
- 外部リンクの劣化（リンク切れ）

## 典型的な原因（よくある勘違い含む）

- 404 を「サーバー障害」と誤認する（多くはクライアント側の URL/ルーティング問題）
- 恒久削除なのに 404 のまま（意図があるなら `410 Gone` を検討）

## 関連ヘッダー / 関連ステータス

- 関連ステータス: [410 Gone](410-gone.md), [301 Moved Permanently](../3xx-redirection/301-moved-permanently.md), [308 Permanent Redirect](../3xx-redirection/308-permanent-redirect.md)

## 例

```http
HTTP/1.1 404 Not Found
Content-Type: application/json

{"error":"NotFound","message":"Resource not found."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
