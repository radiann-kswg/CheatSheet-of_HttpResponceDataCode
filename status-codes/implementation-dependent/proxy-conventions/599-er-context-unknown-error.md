# 599 (Alibaba Cloud ER) Unknown error requesting/initializing context

> Alibaba Cloud（DCDN / EdgeRoutine, ER）で定義される例外ステータスのひとつで、ER のコンテキスト取得/初期化時に未知（未捕捉）エラーが発生し、処理を継続できない状況を示します。

## 概要

- **分類**: 非標準（ベンダー定義: Alibaba Cloud / ER）
- **意味**: ER がコンテキスト取得/初期化の段階で未知（未捕捉）エラーとなり、リクエスト処理できない
- **主な用途**: エッジ実行環境（ER）側の内部エラーの通知

## 代表的なユースケース

- ER がコンテキストを要求する際に未知エラーが発生
- ER がコンテキストを初期化する際に未知エラーが発生

## 典型的な原因（よくある勘違い含む）

- ER のランタイム/実行環境側の未捕捉例外
- デプロイ/設定/依存関係の不整合が内部例外として露出する

## 関連ヘッダー / 関連ステータス

- ER のスロットリング/実行禁止: [598 (Alibaba Cloud ER) ER is throttled / blocked](598-er-throttled-or-blocked.md)
- 一般的な 5xx の文脈（参考）: [`500 Internal Server Error`](../../5xx-server-error/500-internal-server-error.md)

## 例

```http
HTTP/1.1 599
Content-Type: text/plain

ER context error
```

## 参考

- Alibaba Cloud Docs: HTTP status codes（ER の異常 HTTP ステータスとして 598/599 を定義）
  - https://www.alibabacloud.com/help/en/dcdn/user-guide/http-status-codes
- 阿里云 Docs（中国語）: HTTP 状态码（同内容）
  - https://help.aliyun.com/zh/edge-security-acceleration/dcdn/user-guide/http-status-codes
