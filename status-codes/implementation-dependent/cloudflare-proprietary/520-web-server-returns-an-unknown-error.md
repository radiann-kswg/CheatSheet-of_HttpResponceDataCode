# 520 (Cloudflare) Web Server Returns an Unknown Error

> Cloudflare 独自: オリジンが空・未知・想定外の応答を返したときに発生し得るエラーです。

## 概要

- **分類**: 非標準（Cloudflare 独自 / 5xx 系）
- **意味**: オリジンが Cloudflare に対し「空・未知・想定外」の応答を返した
- **主な用途**: エッジ（Cloudflare）とオリジン間の異常を切り分けるためのシグナル

## 代表的なユースケース

- アプリケーションがクラッシュして応答が壊れた/欠落した
- オリジン側の WAF/プラグインが Cloudflare の接続を遮断している

## 典型的な原因（よくある勘違い含む）

- オリジンサーバーのクラッシュ/設定不備
- オリジンで Cloudflare IP をブロック
- ヘッダーが大きすぎる（例: Cookie の肥大化）
- HTTP ステータスコードが無い/不正な応答、必要ヘッダーの欠落
- オリジン側の HTTP/2 設定不整合

## 関連ヘッダー / 関連ステータス

- タイムアウト系: [522 (Cloudflare) Connection Timed Out](522-connection-timed-out.md), [524 (Cloudflare) A Timeout Occurred](524-a-timeout-occurred.md)
- オリジン接続拒否: [521 (Cloudflare) Web Server Is Down](521-web-server-is-down.md)

## 例

```http
HTTP/1.1 520
Content-Type: text/html

<!-- Cloudflare のエラーページが返ることが多い -->
```

## 参考

- Cloudflare Docs: Error 520
  - https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-520/
