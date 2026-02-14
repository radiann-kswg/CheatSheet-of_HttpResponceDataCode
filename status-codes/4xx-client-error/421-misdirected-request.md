# 421 Misdirected Request

> 引用: "The HTTP `421 Misdirected Request` client error response status code indicates that the request was directed to a server that is not able to produce a response." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/421

## 概要

- **分類**: 4xx（Client Error）
- **意味**: リクエストが「応答を生成できないサーバー」に向いてしまったことを示します（例: 接続の再利用により、要求先の authority / scheme の組み合わせが合っていない）。
- **主な用途**: HTTP/2/HTTP/3 などで接続を共有/再利用する際のホスト不整合（SNI/証明書/バーチャルホスト設定の組み合わせ）

## 代表的なユースケース

- ワイルドカード証明書等で複数ドメインを同一接続で再利用し、意図しないサーバーへ到達
- リバースプロキシ/ロードバランサのルーティングと Host/authority の組み合わせが不一致

## 典型的な原因

- オリジンのバーチャルホスト設定不足（該当ホストに対する設定がない）
- HTTP/2 のコネクション再利用条件を満たしていないのに再利用している

## 対応のヒント

- クライアントは **別接続で再試行**すると成功することがあります（MDN も retry を示唆）。

## 例

```http
HTTP/1.1 421 Misdirected Request
Content-Length: 0
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/421
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
