# 598 (Alibaba Cloud ER) ER is throttled / blocked

> Alibaba Cloud（DCDN / EdgeRoutine, ER）で定義される例外ステータスのひとつで、ER が限流（スロットリング）等によりリクエストを処理できない状況を示します。

## 概要

- **分類**: 非標準（ベンダー定義: Alibaba Cloud / ER）
- **意味**: ER がスロットリング、または例外により処理を許可されない
- **主な用途**: エッジ実行環境（ER）側の過負荷/異常に起因する失敗の通知

## 代表的なユースケース

- 同時リクエスト数が上限を超え、ER が処理できない
- ノードの処理能力不足により ER が処理できない

## 典型的な原因（よくある勘違い含む）

- ER 実行環境のリソース逼迫（同時実行/CPU/メモリ）
- ER の異常動作により実行が禁止される（例: OOM が短時間に複数回発生する等）

## 関連ヘッダー / 関連ステータス

- ER のコンテキスト取得/初期化での未知エラー: [599 (Alibaba Cloud ER) Unknown error requesting/initializing context](599-er-context-unknown-error.md)
- 標準のレート制限の文脈（参考）: [`429 Too Many Requests`](../../4xx-client-error/429-too-many-requests.md)

## 例

```http
HTTP/1.1 598
Content-Type: text/plain

ER is throttled
```

## 参考

- Alibaba Cloud Docs: HTTP status codes（ER の異常 HTTP ステータスとして 598/599 を定義）
  - https://www.alibabacloud.com/help/en/dcdn/user-guide/http-status-codes
- 阿里云 Docs（中国語）: HTTP 状态码（同内容）
  - https://help.aliyun.com/zh/edge-security-acceleration/dcdn/user-guide/http-status-codes
