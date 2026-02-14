# 408 Request Timeout

> 引用: "The HTTP `408 Request Timeout` client error response status code indicates that the server would like to shut down this unused connection." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/408

## 概要

- **分類**: 4xx（Client Error）
- **意味**: サーバーがアイドル状態の接続をこれ以上待たずに終了したいことを示します。状況によっては、クライアントが何も送っていなくても返り得ます。
- **主な用途**: 受信待ちタイムアウト、低速・途切れたアップロード、長時間アイドルのコネクション整理。

## 代表的なユースケース

- フォーム送信/アップロードが途中で止まり、サーバー側が待ち切れない
- 接続が確立したままリクエストが来ず、サーバーが切断する

## 典型的な原因（よくある勘違い含む）

- 408 を「必ずクライアントの送信不備」と断定する（ネットワーク遅延やサーバー設定も影響）
- リトライ時に同じ接続を使い回してさらに失敗する（新規接続で再試行が必要なことが多い）

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Connection: close`
- 関連ステータス: `504 Gateway Timeout`

## 例

```http
HTTP/1.1 408 Request Timeout
Connection: close
Content-Type: application/json

{"error":"RequestTimeout","message":"Request was not received in time."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/408
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
