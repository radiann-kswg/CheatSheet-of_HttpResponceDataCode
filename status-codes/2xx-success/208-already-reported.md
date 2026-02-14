# 208 Already Reported

> 引用: "The HTTP `208 Already Reported` successful response status code is used in a 207 Multi-Status response to save space and avoid conflicts." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/208

## 概要

- **分類**: 2xx（Success）
- **意味**: `207 Multi-Status` の中で、同一リソースが既に報告済みであることを示して重複を避けます（WebDAV 専用）。
- **主な用途**: WebDAV で同じリソースが複数経路で参照される場合の重複抑制。

## 代表的なユースケース

- `207` のレスポンス内で、最初のバインディングは [200 OK](200-ok.md) 等で報告し、以後の重複バインディングは 208 を使う

## 典型的な原因（よくある勘違い含む）

- 単独の HTTP 応答として返るコードだと誤解する（基本的に [207 Multi-Status](207-multi-status.md) の内部で使われる）

## 関連ヘッダー / 関連ステータス

- 関連ステータス: [207 Multi-Status](207-multi-status.md), [200 OK](200-ok.md)

## 例

```http
HTTP/1.1 207 Multi-Status
Content-Type: application/xml; charset="utf-8"

<?xml version="1.0" encoding="utf-8"?>
<D:multistatus xmlns:D="DAV:">
	<D:response>
		<D:href>/Coll/Bar</D:href>
		<D:status>HTTP/1.1 208 Already Reported</D:status>
	</D:response>
</D:multistatus>
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/208
- RFC 5842: https://www.rfc-editor.org/rfc/rfc5842
