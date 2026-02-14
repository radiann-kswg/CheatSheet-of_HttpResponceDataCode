# 101 Switching Protocols

> 引用: "The first digit of the status code defines the class of response." — https://www.rfc-editor.org/rfc/rfc9110.html

## 概要

- **分類**: 1xx（Informational）
- **意味**: クライアントの `Upgrade` 要求を受け入れ、プロトコルを切り替えることを示します。
- **主な用途**: WebSocket など、HTTP から別プロトコルへアップグレードするハンドシェイク。

## 代表的なユースケース

- `Upgrade: websocket` の交渉で、サーバーが切替を承諾し `101` を返す
- 特定の拡張プロトコルへ移行するための合意を示す

## 典型的な原因（よくある勘違い含む）

- `101` を返したのに、その後のデータを HTTP として解釈してしまう（切替後はプロトコルが変わります）
- `Upgrade` / `Connection` のヘッダー条件が一致せず、切替が成立しない

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Upgrade`, `Connection`
- 関連ステータス: `426 Upgrade Required`（アップグレードが必要）

## 例

```http
HTTP/1.1 101 Switching Protocols
Connection: Upgrade
Upgrade: websocket

```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
- IANA Registry: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
