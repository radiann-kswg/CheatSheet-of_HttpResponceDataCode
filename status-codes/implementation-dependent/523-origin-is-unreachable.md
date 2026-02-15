# 523 (Cloudflare) Origin Is Unreachable

> Cloudflare 独自: Cloudflare がオリジンに到達できない状況（経路が無い等）で発生し得ます。

## 概要

- **分類**: 非標準（Cloudflare 独自 / 5xx 系）
- **意味**: Cloudflare がオリジンに接触できない
- **主な用途**: ルーティング/経路問題、オリジン IP の誤設定の切り分け

## 代表的なユースケース

- Cloudflare とオリジン間のネットワーク機器が、オリジン IP へのルートを持たない
- Cloudflare 側 DNS の A/AAAA が誤っている

## 典型的な原因（よくある勘違い含む）

- DNS のオリジン IP が古い/誤り
- オリジン側（またはその手前）で経路障害が起きている

## 関連ヘッダー / 関連ステータス

- 接続拒否: [521 (Cloudflare) Web Server Is Down](521-web-server-is-down.md)
- タイムアウト: [522 (Cloudflare) Connection Timed Out](522-connection-timed-out.md)

## 例

```http
HTTP/1.1 523
Content-Type: text/html
```

## 参考

- Cloudflare Docs: Error 523
  - https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-523/
