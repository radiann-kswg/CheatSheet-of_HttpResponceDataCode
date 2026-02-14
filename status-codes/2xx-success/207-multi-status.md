# 207 Multi-Status

> 引用: "The HTTP `207 Multi-Status` successful response status code indicates a mixture of responses." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/207

## 概要

- **分類**: 2xx（Success）
- **意味**: 複数のサブ操作/リソースについて、結果が混在していることを示します（WebDAV 専用）。
- **主な用途**: WebDAV の `PROPFIND` 等で、複数リソースのステータスをまとめて返す。

## 代表的なユースケース

- コレクション配下の複数リソースについて、各リソースごとに 200/404 等の結果を列挙

## 典型的な原因（よくある勘違い含む）

- ブラウザ向け Web では基本的に遭遇しない（MDN でも WebDAV 専用と明記）
- ボディが XML である前提を無視して JSON としてパースしてしまう

## 関連ヘッダー / 関連ステータス

- 関連ステータス: [208 Already Reported](208-already-reported.md)

## 例

```http
HTTP/1.1 207 Multi-Status
Content-Type: application/xml; charset="utf-8"

<?xml version="1.0" encoding="utf-8"?>
<D:multistatus xmlns:D="DAV:">
	<D:response>
		<D:href>/Coll/</D:href>
		<D:status>HTTP/1.1 200 OK</D:status>
	</D:response>
</D:multistatus>
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/207
- RFC 4918: https://www.rfc-editor.org/rfc/rfc4918
