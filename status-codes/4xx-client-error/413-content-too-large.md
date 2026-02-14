# 413 Content Too Large

> 引用: "The HTTP `413 Content Too Large` client error response status code indicates that the request entity was larger than limits defined by server." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/413

## 概要

- **分類**: 4xx（Client Error）
- **意味**: サーバーが許容する上限を超えるサイズのリクエストボディ（エンティティ）であることを示します。
- **主な用途**: ファイルアップロードや巨大 JSON などのサイズ制限超過。

## 代表的なユースケース

- アップロードサイズ上限（例: 4MB）を超えた
- リバースプロキシ（nginx 等）の制限により拒否された

## 典型的な原因（よくある勘違い含む）

- アプリ側は許容しているが、前段（CDN/WAF/プロキシ）が制限している
- RFC 9110 以前の理由句（`Payload Too Large`）がログ等に残っており、ファイル名と一致しない

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Content-Length`, `Retry-After`（実装により付与される場合）
- 関連ステータス: `400 Bad Request`, `415 Unsupported Media Type`

## 例

```http
HTTP/1.1 413 Content Too Large
Content-Type: application/json

{"error":"ContentTooLarge","message":"Maximum allowed upload size is 4MB."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/413
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
