# 307 Temporary Redirect

> 引用: "The HTTP `307 Temporary Redirect` redirection response status code indicates that the resource requested has been temporarily moved to the URL in the Location header." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/307

## 概要

- **分類**: 3xx（Redirection）
- **意味**: 一時的な移動を示します。`302` と似ていますが、一般にリダイレクト後も元リクエストのメソッド/ボディを維持することが期待されます。
- **主な用途**: 一時的な誘導で、メソッド変更（POST→GET など）を避けたい場合。

## 代表的なユースケース

- API エンドポイントの一時移設（POST/PUT のまま移送したい）
- メンテナンス中のみ別ホストへ逃がす（ただし副作用のあるメソッドは慎重に）

## 典型的な原因（よくある勘違い含む）

- [302 Found](302-found.md) の代わりに使うべき場面（メソッド維持が重要）を見落とす
- `Location` を付け忘れてクライアントが遷移できない

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Location`
- 関連ステータス: [302 Found](302-found.md), [303 See Other](303-see-other.md), [308 Permanent Redirect](308-permanent-redirect.md)

## 例

```http
HTTP/1.1 307 Temporary Redirect
Location: https://example.com/api/v2/orders
Content-Length: 0
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/307
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
