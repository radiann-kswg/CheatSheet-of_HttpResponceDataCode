# 100 Continue

> 引用: "The first digit of the status code defines the class of response." — https://www.rfc-editor.org/rfc/rfc9110.html

## 概要

- **分類**: 1xx（Informational）
- **意味**: サーバーがこれまでに受信したリクエスト行とヘッダーが受理可能であり、クライアントはリクエスト本文の送信を継続してよいことを示します。
- **主な用途**: 大きなリクエストボディ（アップロード等）を送る前に、サーバーが受理可能かを確認したいとき。

## 代表的なユースケース

- `Expect: 100-continue` を付けて POST/PUT を送信し、サーバーが本文送信を許可したら続ける
- 認証/認可やヘッダー条件を満たさない場合、本文送信前に 4xx を返して無駄な送信を避ける

## 典型的な原因（よくある勘違い含む）

- **勘違い**: `100` が最終結果だと思い処理を終える（`100` は中間応答で、最終応答は別に返ります）
- 途中でプロキシが中間応答を処理しない/変換する構成により、期待どおりに動かない

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Expect`（特に `100-continue`）
- 関連ステータス: [417 Expectation Failed](../4xx-client-error/417-expectation-failed.md)（期待が満たせない）

## 例

```http
HTTP/1.1 100 Continue

```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
- IANA Registry: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
