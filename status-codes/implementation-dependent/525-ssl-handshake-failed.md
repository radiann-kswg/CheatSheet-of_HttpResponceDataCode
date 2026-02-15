# 525 (Cloudflare) SSL Handshake Failed

> Cloudflare 独自: Cloudflare とオリジン間の TLS ハンドシェイクが失敗した状況です。

## 概要

- **分類**: 非標準（Cloudflare 独自 / 5xx 系）
- **意味**: Cloudflare↔オリジン間の TLS ハンドシェイク失敗
- **主な用途**: オリジンの TLS 設定/証明書/ポートの切り分け

## 代表的なユースケース

- Cloudflare の SSL/TLS モードが Full / Full (Strict) のときに、オリジンの 443 が正しく応答しない

## 典型的な原因（よくある勘違い含む）

- オリジンに有効な証明書が無い
- 443（またはカスタムの secure port）が閉じている
- SNI 非対応
- 暗号スイートの非互換

## 関連ヘッダー / 関連ステータス

- 証明書が無効（Strict で検証失敗）: [526 (Cloudflare) Invalid SSL Certificate](526-invalid-ssl-certificate.md)

## 例

```http
HTTP/1.1 525
Content-Type: text/html
```

## 参考

- Cloudflare Docs: Error 525
  - https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-525/
