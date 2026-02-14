# 406 Not Acceptable

> 引用: "The HTTP `406 Not Acceptable` client error response status code indicates that the server could not produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers and that the server was unwilling to supply a default representation." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/406

## 概要

- **分類**: 4xx（Client Error）
- **意味**: `Accept` 等のコンテンツネゴシエーション条件に合う表現をサーバーが生成できず、かつデフォルト表現を返す意思もないことを示します。
- **主な用途**: 受理できるメディアタイプ/言語/圧縮形式の条件が厳しすぎる場合に、対応できないことを明示する。

## 代表的なユースケース

- `Accept: application/rtf` のようにサーバーが対応しない形式のみを要求している
- `Accept-Language` により要求された言語表現が提供されない

## 典型的な原因（よくある勘違い含む）

- クライアントが `Accept` を固定で送っており、実際の提供形式とミスマッチ
- サーバーが「デフォルト表現（例: JSON）」を返す方が適切な場面でも 406 を返して UX を悪化させる

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Accept`, `Accept-Language`, `Accept-Encoding`, `Vary`
- 関連ステータス: `415 Unsupported Media Type`, `300 Multiple Choices`

## 例

```http
HTTP/1.1 406 Not Acceptable
Content-Type: application/json

{"error":"NotAcceptable","message":"Only 'text/html' or 'application/json' is supported."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/406
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
