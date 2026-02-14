# 304 Not Modified

> 引用: "The HTTP `304 Not Modified` redirection response status code indicates that there is no need to retransmit the requested resources." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/304

## 概要

- **分類**: 3xx（Redirection）
- **意味**: 条件付きリクエスト（主に `GET` / `HEAD`）に対して、サーバー側の表現が変更されていないため再送不要であることを示します。
- **主な用途**: キャッシュの再検証（再ダウンロードを避け、帯域と待ち時間を削減）。

## 代表的なユースケース

- `If-None-Match`（ETag）や `If-Modified-Since`（Last-Modified）による再検証
- SPA の静的アセット（JS/CSS/画像）でのキャッシュ最適化

## 典型的な原因（よくある勘違い含む）

- 304 を「コンテンツが無いエラー」と誤解する（成功であり、キャッシュを使う合図）
- 304 応答にボディを付けてしまう（原則ボディは送らない）

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `If-None-Match`, `If-Modified-Since`, `ETag`, `Last-Modified`, `Cache-Control`, `Vary`
- 関連ステータス: `200 OK`, `412 Precondition Failed`

## 例

```http
GET /app.js HTTP/1.1
Host: example.com
If-None-Match: "abc123"

HTTP/1.1 304 Not Modified
ETag: "abc123"
Cache-Control: public, max-age=3600
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/304
- MDN（条件付きリクエスト）: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Conditional_requests
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
