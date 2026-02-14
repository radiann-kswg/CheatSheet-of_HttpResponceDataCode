# 425 Too Early

> 引用: "The HTTP `425 Too Early` client error response status code indicates that the server was unwilling to risk processing a request that might be replayed to avoid potential replay attacks." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/425

## 概要

- **分類**: 4xx（Client Error）
- **意味**: 0-RTT（TLS early data）等で送られた可能性のあるリクエストについて、**リプレイ攻撃リスクを避けるため**サーバーが処理を拒否したことを示します。
- **主な用途**: TLS 1.3 の early data（0-RTT）を使う環境で、安全にリトライさせるため。

## 代表的なユースケース

- ゲートウェイ/オリジンが「この要求は early data で処理すべきでない」と判断
- `Early-Data` ヘッダーが付いた要求をオリジンが拒否

## 対応のヒント

- 425 を受け取ったクライアントは、**early data を使わずに再送**する設計が一般的です（RFC 8470）。

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Early-Data`
- 関連ステータス: `503 Service Unavailable`（負荷等による一時拒否とは意味が異なる）

## 例

```http
HTTP/1.1 425 Too Early
Content-Type: application/json

{"error":"TooEarly","message":"Retry without early data."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/425
- RFC 8470 (Using Early Data in HTTP): https://www.rfc-editor.org/rfc/rfc8470.html
