# 302 Found

> 引用: "The HTTP `302 Found` redirection response status code indicates that the requested resource has been temporarily moved to the URL in the Location header." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/302

## 概要

- **分類**: 3xx（Redirection）
- **意味**: 一時的な移動を示し、移動先は `Location` ヘッダーで通知します。
- **主な用途**: 一時的な誘導（メンテナンス、段階的な移行、ログイン誘導など）。

## 代表的なユースケース

- メンテナンス中のみ別ページへ誘導
- A/B テストなどで一時的に別 URL を返す
- 旧 URL を残しつつ、当面は新 URL へ誘導

## 典型的な原因（よくある勘違い含む）

- 恒久移動なのに `302` を返してしまう（意図により `301` / `308` が適切な場合がある）
- 非 GET リクエストで、古いクライアントがメソッドを `GET` に変える可能性を見落とす（必要なら `307` を検討）

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Location`
- 関連ステータス: [307 Temporary Redirect](307-temporary-redirect.md)（一時＋メソッド維持）, [303 See Other](303-see-other.md)（GET へ変更）, [301 Moved Permanently](301-moved-permanently.md)

## 例

```http
HTTP/1.1 302 Found
Location: https://example.com/temporary
Content-Length: 0
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/302
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
