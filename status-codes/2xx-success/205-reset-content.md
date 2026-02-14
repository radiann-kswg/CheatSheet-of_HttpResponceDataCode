# 205 Reset Content

> 引用: "The HTTP `205 Reset Content` successful response status code indicates that the request has been successfully processed and the client should reset the document view." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/205

## 概要

- **分類**: 2xx（Success）
- **意味**: リクエストは成功し、クライアントは表示/入力状態（フォーム等）をリセットすべきであることを示します。
- **主な用途**: フォーム送信後に入力欄をクリアするなど。

## 代表的なユースケース

- コメント投稿などの POST が成功し、フォームをリセットする

## 典型的な原因（よくある勘違い含む）

- 205 でボディを返してしまう（MDN にもある通りボディ無しが前提）
- ブラウザはネイティブにリセットしないため、クライアント側実装が必要

## 関連ヘッダー / 関連ステータス

- 関連ステータス: `204 No Content`

## 例

```http
HTTP/1.1 205 Reset Content
Content-Length: 0

```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/205
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
