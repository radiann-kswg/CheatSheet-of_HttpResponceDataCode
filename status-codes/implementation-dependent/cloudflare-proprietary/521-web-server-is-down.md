# 521 (Cloudflare) Web Server Is Down

> Cloudflare 独自: Cloudflare からの接続をオリジンが拒否する（または応答しない）状況で発生し得ます。

## 概要

- **分類**: 非標準（Cloudflare 独自 / 5xx 系）
- **意味**: オリジンが Cloudflare からの接続を拒否している
- **主な用途**: オリジン停止・遮断の切り分け

## 代表的なユースケース

- オリジンプロセス停止、メンテ、クラッシュ
- オリジンのファイアウォールが Cloudflare IP をブロック

## 典型的な原因（よくある勘違い含む）

- オリジンがオフライン/過負荷で接続を受け付けられない
- Cloudflare IP がブロック/レート制限されている
- SSL/TLS モード（Full / Full (Strict)）前提とオリジン HTTPS 対応の不整合

## 関連ヘッダー / 関連ステータス

- 接続タイムアウト: [522 (Cloudflare) Connection Timed Out](522-connection-timed-out.md)
- オリジン到達不能: [523 (Cloudflare) Origin Is Unreachable](523-origin-is-unreachable.md)

## 例

```http
HTTP/1.1 521
Content-Type: text/html
```

## 参考

- Cloudflare Docs: Error 521
  - https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-521/
