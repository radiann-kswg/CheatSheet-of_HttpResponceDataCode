# 303 See Other

> 引用: "The HTTP `303 See Other` redirection response status code indicates that the browser should redirect to the URL in the Location header instead of rendering the requested resource." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/303

## 概要

- **分類**: 3xx（Redirection）
- **意味**: 指定された `Location` へ遷移し、元のリソースをそのまま表示しないことを示します。一般に、遷移先の取得は `GET` になります。
- **主な用途**: フォーム送信（POST）後に確認ページへ誘導する「Post/Redirect/Get（PRG）」。

## 代表的なユースケース

- POST の結果として、確認ページや結果表示 URL を `Location` で返す
- PUT/POST で作成・更新した直後に「参照用 URL」へ誘導する

## 典型的な原因（よくある勘違い含む）

- 302 を使うとクライアント実装により挙動が揺れやすく、PRG の意図が伝わりにくい
- 303 を返しつつ `Location` を付け忘れて、クライアントが遷移できない

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Location`
- 関連ステータス: [302 Found](302-found.md), [307 Temporary Redirect](307-temporary-redirect.md)

## 例

```http
HTTP/1.1 303 See Other
Location: https://example.com/confirmation/123
Content-Length: 0
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/303
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
