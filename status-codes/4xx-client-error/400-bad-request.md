# 400 Bad Request

> 引用: "The HTTP `400 Bad Request` client error response status code indicates that the server would not process the request due to something the server considered to be a client error." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400

## 概要

- **分類**: 4xx（Client Error）
- **意味**: クライアント起因の不正なリクエストとして、サーバーが処理を拒否したことを示します（構文不正、フレーミング不正、ルーティング不正など）。
- **主な用途**: バリデーションエラー、JSON の構文エラー、必須パラメータ不足などの「リクエストの作り直し」が必要なケース。

## 代表的なユースケース

- JSON が壊れている／型が不正／必須フィールドが欠けている
- クエリパラメータやヘッダーの値が許容範囲外
- API ゲートウェイが「不正な要求」と判断して遮断

## 典型的な原因（よくある勘違い含む）

- 401/403 などの認証・認可系と混同して 400 を返してしまう
- 仕様上のエラー（例: メソッド不正）なのに 400 で雑に返してしまう（`405` などを検討）
- クライアントが同じリクエストをリトライし続けてしまう（修正なしの再送は失敗しやすい）

## 関連ヘッダー / 関連ステータス

- 関連ステータス: [422 Unprocessable Content](422-unprocessable-content.md)（構文は正しいが意味的に不正）, [415 Unsupported Media Type](415-unsupported-media-type.md), [413 Content Too Large](413-content-too-large.md)

## 例

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json

{"error":"BadRequest","message":"Request body is invalid JSON."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
