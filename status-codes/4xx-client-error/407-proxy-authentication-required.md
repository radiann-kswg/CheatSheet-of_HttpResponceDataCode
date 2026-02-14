# 407 Proxy Authentication Required

> 引用: "The HTTP `407 Proxy Authentication Required` client error response status code indicates that the request did not succeed because it lacks valid authentication credentials for the proxy server that sits between the client and the server with access to the requested resource." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/407

## 概要

- **分類**: 4xx（Client Error）
- **意味**: オリジンではなく「プロキシ」への認証が不足しているため、要求が成功しなかったことを示します。通常 `Proxy-Authenticate` で認証方式を通知します。
- **主な用途**: 企業ネットワーク等で、前段プロキシが認証を要求するケース。

## 代表的なユースケース

- イントラネットのプロキシが Basic/Digest/Bearer 等の認証を要求
- クライアントが `Proxy-Authorization` を付けていない／無効

## 典型的な原因（よくある勘違い含む）

- [401 Unauthorized](401-unauthorized.md) と混同する（[401 Unauthorized](401-unauthorized.md) はオリジンの認証、407 はプロキシの認証）
- ブラウザ/クライアントがプロキシ設定を誤っており、意図せず 407 が発生

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Proxy-Authenticate`, `Proxy-Authorization`
- 関連ステータス: [401 Unauthorized](401-unauthorized.md), [403 Forbidden](403-forbidden.md)

## 例

```http
HTTP/1.1 407 Proxy Authentication Required
Proxy-Authenticate: Basic realm="Proxy"
Content-Length: 0
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/407
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
