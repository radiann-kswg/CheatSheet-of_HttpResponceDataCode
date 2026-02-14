# 308 Permanent Redirect

> 引用: "The HTTP `308 Permanent Redirect` redirection response status code indicates that the requested resource has been permanently moved to the URL given by the Location header." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/308

## 概要

- **分類**: 3xx（Redirection）
- **意味**: 恒久的な移動を示します。`301` と似ていますが、一般にリダイレクト後も元リクエストのメソッド/ボディを維持することが期待されます。
- **主な用途**: API の恒久移設など、非 GET でもメソッド変更を避けたい恒久リダイレクト。

## 代表的なユースケース

- `/api/v1/...` → `/api/v2/...` への恒久移行（POST/PUT を維持したい）
- 恒久的な URL 正規化で、メソッド維持が重要なケース

## 典型的な原因（よくある勘違い含む）

- `301` なら常にメソッドが維持されると思い込む（クライアント実装差が残り得る）
- 恒久移動なのに `307` を返し続け、キャッシュや意図が伝わりにくい

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Location`, `Cache-Control`
- 関連ステータス: [301 Moved Permanently](301-moved-permanently.md), [307 Temporary Redirect](307-temporary-redirect.md), [302 Found](302-found.md)

## 例

```http
HTTP/1.1 308 Permanent Redirect
Location: https://example.com/api/v2/orders
Content-Length: 0
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/308
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
