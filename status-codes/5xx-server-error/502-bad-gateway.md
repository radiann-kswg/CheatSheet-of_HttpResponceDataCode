# 502 Bad Gateway

> 引用: "The HTTP `502 Bad Gateway` server error response status code indicates that a server was acting as a gateway or proxy and that it received an invalid response from the upstream server." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/502

## 概要

- **分類**: 5xx（Server Error）
- **意味**: ゲートウェイ/プロキシが上流（upstream）から無効なレスポンスを受け取ったことを示します。
- **主な用途**: リバースプロキシ、ロードバランサ、CDN 等がオリジンの異常応答を検知した場合。

## 代表的な原因

- 上流が不正なHTTPを返した／接続が途中で切れた
- 上流がクラッシュ・再起動中
- プロキシ設定ミス（上流宛先、TLS設定、HTTP/2設定等）

## 切り分けのヒント

- 502 は「HTTP応答は来たが無効」寄り、上流から**HTTP応答自体が来ない**なら 504 になることがあります（実装依存）。

## 例

```http
HTTP/1.1 502 Bad Gateway
Content-Type: application/json

{"error":"BadGateway","message":"Upstream returned an invalid response."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/502
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
