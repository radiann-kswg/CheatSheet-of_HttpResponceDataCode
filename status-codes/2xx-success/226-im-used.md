# 226 IM Used

> 引用: "The HTTP `226 IM Used` successful response status code indicates that the server is returning a delta in response to a GET request." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/226

## 概要

- **分類**: 2xx（Success）
- **意味**: GET に対して、全体ではなく差分（delta）を返していることを示します（HTTP delta encodings の文脈）。
- **主な用途**: 帯域削減のための差分配信。

## 代表的なユースケース

- クライアントが `A-IM` と `If-None-Match` を送り、サーバーが差分を返す

## 典型的な原因（よくある勘違い含む）

- 代理・キャッシュが差分エンコーディングを理解せず、破損や不整合を起こす
- 実装サポートが限定的で、採用の割に運用が複雑になる

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `A-IM`, `IM`, `Delta-Base`, `ETag`, `If-None-Match`
- 関連ステータス: [200 OK](200-ok.md), [304 Not Modified](../3xx-redirection/304-not-modified.md)

## 例

```http
HTTP/1.1 226 IM Used
IM: vcdiff
Delta-Base: abcd123
Content-Type: text/plain

...delta...
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/226
- RFC 3229: https://www.rfc-editor.org/rfc/rfc3229
