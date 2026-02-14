# 451 Unavailable For Legal Reasons

> 引用: "The HTTP `451 Unavailable For Legal Reasons` client error response status code indicates that the user requested a resource that is not available due to legal reasons, such as a web page for which a legal action has been issued." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/451

## 概要

- **分類**: 4xx（Client Error）
- **意味**: 法的理由（差止/削除要請、地域規制など）により、リソースを提供できないことを示します。
- **主な用途**: コンテンツブロックの透明性確保（単なる [403 Forbidden](403-forbidden.md)/[404 Not Found](404-not-found.md) では理由が伝わらないケース）。

## 代表的なユースケース

- 特定法域からのアクセスのみブロック
- DMCA 等により対象ページを公開停止

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Link`（`rel="blocked-by"` を用いる例がある）
- 関連ステータス: [403 Forbidden](403-forbidden.md), [404 Not Found](404-not-found.md)

## 例

```http
HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://example.org/legal>; rel="blocked-by"
Content-Type: text/plain

This resource is unavailable for legal reasons.
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/451
- RFC 7725: https://www.rfc-editor.org/rfc/rfc7725.html
