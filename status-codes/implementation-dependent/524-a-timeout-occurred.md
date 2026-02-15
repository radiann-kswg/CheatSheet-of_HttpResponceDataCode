# 524 (Cloudflare) A Timeout Occurred

> Cloudflare 独自: Cloudflare はオリジンへ接続できたが、所定の時間内に HTTP 応答が返らなかった状況です。

## 概要

- **分類**: 非標準（Cloudflare 独自 / 5xx 系）
- **意味**: 接続は成功したが、オリジン応答がタイムアウト
- **主な用途**: 「到達できるが遅い」問題の切り分け

## 代表的なユースケース

- 重いクエリ/集計/エクスポート処理で、オリジンの応答が遅延する
- オリジンがリソース不足で応答を返せない

## 典型的な原因（よくある勘違い含む）

- オリジン側の長時間処理（アプリ/DB）
- オリジン過負荷
- Cloudflare の Proxy Read Timeout（既定 120 秒）を超えた

## 関連ヘッダー / 関連ステータス

- 502/504 の文脈と混同しやすい: [`504 Gateway Timeout`](../5xx-server-error/504-gateway-timeout.md)

## 例

```http
HTTP/1.1 524
Content-Type: text/html
```

## 参考

- Cloudflare Docs: Error 524
  - https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-524/
