# 500 Internal Server Error

> 引用: "The HTTP `500 Internal Server Error` server error response status code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/500

## 概要

- **分類**: 5xx（Server Error）
- **意味**: サーバー側で予期しないエラーが発生し、要求を完了できなかったことを示す「包括的」なエラーです。
- **主な用途**: より適切な 5xx を返せない場合のフォールバック。

## 代表的な原因

- 未処理例外、設定ミス、権限/ファイルアクセスエラー
- リソース枯渇（メモリ不足等）
- 依存サービス障害（ただしゲートウェイ由来なら [502 Bad Gateway](502-bad-gateway.md)/[504 Gateway Timeout](504-gateway-timeout.md) の方が適切なことも）

## 運用のヒント

- クライアントに詳細な内部情報を出しすぎない（情報漏えい防止）
- サーバー側ログにリクエストID等を残し、レスポンス本文にも問い合わせ用IDを付けると調査が楽になります

## 例

```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{"error":"InternalServerError","requestId":"ABC-123","message":"Please try again later."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/500
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
