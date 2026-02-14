# 417 Expectation Failed

> 引用: "The HTTP `417 Expectation Failed` client error response status code indicates that the expectation given in the request's Expect header could not be met." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/417

## 概要

- **分類**: 4xx（Client Error）
- **意味**: `Expect` ヘッダーで提示された期待（例: `Expect: 100-continue`）をサーバーが満たせないことを示します。
- **主な用途**: `Expect` をサーバーがサポートしない、または特定の期待値に対応していない場合。

## 代表的なユースケース

- 大きなアップロードで `Expect: 100-continue` を使ったが、サーバーが期待を受理しない

## 典型的な原因（よくある勘違い含む）

- `Expect` を付けたままリトライして、同じ 417 を繰り返す（417 後は `Expect` なしで再送が必要になることがある）

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Expect`
- 関連ステータス: `100 Continue`, `413 Content Too Large`

## 例

```http
HTTP/1.1 417 Expectation Failed
Content-Length: 0
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/417
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
