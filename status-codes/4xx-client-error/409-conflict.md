# 409 Conflict

> 引用: "The HTTP `409 Conflict` client error response status code indicates a request conflict with the current state of the target resource." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/409

## 概要

- **分類**: 4xx（Client Error）
- **意味**: 対象リソースの現在状態とリクエストが衝突していることを示します。
- **主な用途**: 排他・同時更新の衝突、前提状態の不一致、WebDAV の階層衝突など。

## 代表的なユースケース

- 楽観ロック/バージョン競合（古い内容で上書きしようとした）
- 既に進行中のジョブがあり、新規開始が衝突する

## 典型的な原因（よくある勘違い含む）

- 409 を「重複」専用だと誤解する（重複は 409 で表現されることもあるが、意味はより広い）
- 衝突解消のための手がかり（現在の状態、解消方法）をエラー本文に含めない

## 関連ヘッダー / 関連ステータス

- 関連ステータス: [412 Precondition Failed](412-precondition-failed.md)（条件付きで拒否）, [428 Precondition Required](428-precondition-required.md)

## 例

```http
HTTP/1.1 409 Conflict
Content-Type: application/json

{"error":"Conflict","message":"Resource state has changed. Fetch latest and retry."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/409
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
