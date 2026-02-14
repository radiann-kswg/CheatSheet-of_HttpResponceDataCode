# 416 Range Not Satisfiable

> 引用: "The HTTP `416 Range Not Satisfiable` client error response status code indicates that a server could not serve the requested ranges." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/416

## 概要

- **分類**: 4xx（Client Error）
- **意味**: `Range` リクエストで指定されたバイト範囲をサーバーが提供できないことを示します（範囲が実体サイズを超えている等）。
- **主な用途**: ダウンロード再開（レンジ取得）の失敗通知。

## 代表的なユースケース

- リソースが 800 bytes なのに `Range: bytes=1000-1999` を要求
- ETag/最終更新が変わっており、期待しているレンジが意味をなさない

## 典型的な原因（よくある勘違い含む）

- クライアントが古いサイズ前提で再開しようとする
- `Range` が構文的に正しいため、原因がサーバー側にあると誤解する（多くは要求レンジが不適切）

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Range`, `Content-Range`
- 関連ステータス: [206 Partial Content](../2xx-success/206-partial-content.md)

## 例

```http
HTTP/1.1 416 Range Not Satisfiable
Content-Range: bytes */800
Content-Length: 0
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/416
- MDN（レンジリクエスト）: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Range_requests
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
