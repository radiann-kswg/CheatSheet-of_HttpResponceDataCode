# 522 (Cloudflare) Connection Timed Out

> Cloudflare 独自: Cloudflare がオリジンへの接続またはリクエスト応答の ACK を一定時間待ってタイムアウトした状況です。

## 概要

- **分類**: 非標準（Cloudflare 独自 / 5xx 系）
- **意味**: Cloudflare がオリジンへの接続/応答待ちでタイムアウト
- **主な用途**: ネットワーク到達性・オリジン過負荷の切り分け

## 代表的なユースケース

- オリジンが SYN+ACK を返せない（接続確立できない）
- 接続は確立したが、オリジンがリクエストを一定時間 ACK しない

## 典型的な原因（よくある勘違い含む）

- Cloudflare IP がブロック/レート制限されている
- オリジン過負荷/ダウンでパケットが落ちる
- DNS 設定（Cloudflare 側の A/AAAA）が実際のオリジンと不一致

## 関連ヘッダー / 関連ステータス

- オリジンが遅い（応答が 120 秒以内に返らない）: [524 (Cloudflare) A Timeout Occurred](524-a-timeout-occurred.md)

## 例

```http
HTTP/1.1 522
Content-Type: text/html
```

## 参考

- Cloudflare Docs: Error 522
  - https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-522/
