# 414 URI Too Long

> 引用: "The HTTP `414 URI Too Long` client error response status code indicates that a URI requested by the client was longer than the server is willing to interpret." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/414

## 概要

- **分類**: 4xx（Client Error）
- **意味**: リクエストターゲット（URI）がサーバーの解釈可能な長さを超えたことを示します。
- **主な用途**: GET に巨大なクエリを付けて送ってしまった、リダイレクトループで URI が肥大化した、攻撃的な長大 URI など。

## 代表的なユースケース

- フォーム送信を誤って GET で送っている
- クエリパラメータに大量データ（トークンや JSON）を入れている

## 典型的な原因（よくある勘違い含む）

- 「URI 長はブラウザが勝手に落とすだけ」と思い込み、サーバー側制限を見落とす
- 301/302 の設定ミスでリダイレクトループになり、URI が増殖

## 関連ヘッダー / 関連ステータス

- 関連ステータス: `400 Bad Request`

## 例

```http
HTTP/1.1 414 URI Too Long
Content-Type: application/json

{"error":"UriTooLong","message":"The requested URI is too long."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/414
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
