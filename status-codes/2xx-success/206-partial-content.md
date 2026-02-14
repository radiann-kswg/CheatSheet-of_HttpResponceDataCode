# 206 Partial Content

> 引用: "The HTTP `206 Partial Content` successful response status code is sent in response to a range request." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/206

## 概要

- **分類**: 2xx（Success）
- **意味**: `Range` リクエストに対して、要求された範囲（バイト範囲等）だけを返したことを示します。
- **主な用途**: 動画/大容量ファイルの分割取得、再開ダウンロード。

## 代表的なユースケース

- `Range: bytes=...` により一部だけ取得する
- 複数範囲（`multipart/byteranges`）で必要部分だけ取得する

## 典型的な原因（よくある勘違い含む）

- `Content-Range` の整合が取れていない（クライアントが破損扱いする）
- キャッシュ/CDN が Range に未対応で期待した挙動にならない

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Range`, `Content-Range`, `If-Range`
- 関連ステータス: `200 OK`, `416 Range Not Satisfiable`

## 例

```http
HTTP/1.1 206 Partial Content
Content-Type: application/octet-stream
Content-Range: bytes 0-99/200

...binary...
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/206
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
