# 102 Processing

> 引用: "The first digit of the status code defines the class of response." — https://www.rfc-editor.org/rfc/rfc9110.html

## 概要

- **分類**: 1xx（Informational）
- **意味**: サーバーがリクエストを受理して処理中であり、最終応答は後で返すことを示します（主に WebDAV 文脈）。
- **主な用途**: 長時間処理で、クライアントがタイムアウトと誤認するのを避ける中間応答。

## 代表的なユースケース

- WebDAV 操作（集合リソースの処理等）で、処理継続中であることを通知
- バックエンド処理が長いときに接続維持のヒントとして返す

## 典型的な原因（よくある勘違い含む）

- **勘違い**: `102` を受け取ったら成功だとみなす（`102` は中間応答です）
- 中間応答を許容しないクライアント/プロキシ構成で無視される

## 関連ヘッダー / 関連ステータス

- 関連ステータス: `202 Accepted`（受理したが未完了）, `103 Early Hints`（事前ヒント）

## 例

```http
HTTP/1.1 102 Processing

```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102
- RFC 2518: https://www.rfc-editor.org/rfc/rfc2518
- IANA Registry: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
