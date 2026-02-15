# 530 (Cloudflare) Origin DNS Error

> Cloudflare 独自: Cloudflare がオリジンのホスト名解決に失敗し、オリジンへ接続できない状況です。

## 概要

- **分類**: 非標準（Cloudflare 独自 / 5xx 系）
- **意味**: Cloudflare がオリジンホスト名を解決できない
- **主な用途**: オリジン向け DNS 解決（1XXX エラー）に起因する問題の入り口

## 代表的なユースケース

- Origin Rules 等で結果的に参照するオリジンホスト名が解決できない

## 典型的な原因（よくある勘違い含む）

- 530 のレスポンス本文に **1XXX 系のエラーコード**が含まれる場合がある（詳細は 1XXX を参照）

## 関連ヘッダー / 関連ステータス

- 経路/到達性問題: [523 (Cloudflare) Origin Is Unreachable](523-origin-is-unreachable.md)

## 例

```http
HTTP/1.1 530
Content-Type: text/html
```

## 参考

- Cloudflare Docs: Error 530
  - https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-530/
