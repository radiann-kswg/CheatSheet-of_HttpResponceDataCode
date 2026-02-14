# 503 Service Unavailable

> 引用: "The HTTP `503 Service Unavailable` server error response status code indicates that the server is not ready to handle the request." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/503

## 概要

- **分類**: 5xx（Server Error）
- **意味**: サーバーが一時的に要求を処理できないことを示します（過負荷、メンテナンス等）。
- **主な用途**: メンテナンス中の遮断、リソース枯渇時のバックプレッシャ。

## 代表的なユースケース

- メンテナンス中
- CPU/メモリ/コネクションプール枯渇などで、これ以上処理すると全体が落ちる

## 関連ヘッダー / 注意点

- `Retry-After` を付けて復旧見込みを示すとクライアント実装がしやすい
- 一時的障害を示すため、キャッシュ関連ヘッダーの扱いは注意（誤キャッシュで復旧後もエラーページが出続ける事故）
- クライアントのレート制限が理由なら [429 Too Many Requests](../4xx-client-error/429-too-many-requests.md) が適切なことがあります

## 例

```http
HTTP/1.1 503 Service Unavailable
Content-Type: application/json
Retry-After: 120

{"error":"ServiceUnavailable","message":"Maintenance in progress. Retry later."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/503
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
