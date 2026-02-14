# 402 Payment Required

> 引用: "The HTTP `402 Payment Required` client error response status code is a nonstandard response status code reserved for future use." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/402

## 概要

- **分類**: 4xx（Client Error）
- **意味**: 将来の（マイクロ）ペイメント等の用途のために予約されているコードで、標準的な運用慣行は定義されていません。
- **主な用途**: 仕様上は未定義に近く、実装・サービスにより独自に使われることがあります（決済失敗の包括コードなど）。

## 代表的なユースケース

- 課金が必要なコンテンツへのアクセス（独自設計）
- 決済 API が「支払いに関する失敗」を 402 でまとめて返す（独自設計）

## 典型的な原因（よくある勘違い含む）

- 402 を一般的な「支払い失敗」コードとして期待してしまう（標準化された意味は薄い）
- クライアント実装（ブラウザ等）が特別扱いしてくれると思い込む

## 関連ヘッダー / 関連ステータス

- 関連ステータス: [400 Bad Request](400-bad-request.md), [403 Forbidden](403-forbidden.md), [429 Too Many Requests](429-too-many-requests.md)

## 例

```http
HTTP/1.1 402 Payment Required
Content-Type: application/json

{"error":"PaymentRequired","message":"Payment is required to access this resource."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/402
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
