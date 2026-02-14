# 401 Unauthorized

> 引用: "The HTTP `401 Unauthorized` client error response status code indicates that a request was not successful because it lacks valid authentication credentials for the requested resource." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/401

## 概要

- **分類**: 4xx（Client Error）
- **意味**: 認証情報が無い／無効であるため要求が成功しなかったことを示します。通常 `WWW-Authenticate` で必要な認証方式を通知します。
- **主な用途**: 認証が必要なリソースへの未認証アクセス、期限切れトークン、無効な署名など。

## 代表的なユースケース

- `Authorization: Bearer ...` が無い／不正
- セッションが切れている、API キーが無効

## 典型的な原因（よくある勘違い含む）

- 401 と 403 を混同する（401 は「認証不足」、403 は「認証済みだが権限不足」になりがち）
- `WWW-Authenticate` を付けずに返して、クライアントが次の手を判断できない

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `WWW-Authenticate`, `Authorization`
- 関連ステータス: `403 Forbidden`, `407 Proxy Authentication Required`

## 例

```http
HTTP/1.1 401 Unauthorized
WWW-Authenticate: Bearer
Content-Length: 0
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/401
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
