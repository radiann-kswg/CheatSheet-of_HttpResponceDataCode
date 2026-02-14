# 504 Gateway Timeout

> 引用: "The HTTP `504 Gateway Timeout` server error response status code indicates that the server, while acting as a gateway or proxy, did not get a response in time from the upstream server in order to complete the request." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/504

## 概要

- **分類**: 5xx（Server Error）
- **意味**: ゲートウェイ/プロキシが上流から時間内に応答を受け取れなかったことを示します。
- **主な用途**: オリジンが遅い、上流障害、ネットワーク遅延、タイムアウト設定不整合。

## 代表的な原因

- 上流処理が遅すぎる（DB遅延、デッドロック、重い集計）
- プロキシ/ロードバランサのタイムアウトが短すぎる
- 上流が応答不能（落ちている/ネットワーク断）

## 例

```http
HTTP/1.1 504 Gateway Timeout
Content-Type: application/json

{"error":"GatewayTimeout","message":"Upstream did not respond in time."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/504
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
