# 103 Early Hints

> 引用: "The first digit of the status code defines the class of response." — https://www.rfc-editor.org/rfc/rfc9110.html

## 概要

- **分類**: 1xx（Informational）
- **意味**: 最終応答の前に、クライアントへ事前ヒント（例: preload すべきリソース）を送るための中間応答です。
- **主な用途**: `Link` ヘッダーでリソースの先読みを促し、待ち時間を短縮する。

## 代表的なユースケース

- HTML の生成に時間がかかるが、依存する CSS/JS を先に取得させたい
- CDN/エッジで早期にヒントを返し、ブラウザの並列取得を促進する

## 典型的な原因（よくある勘違い含む）

- **勘違い**: `103` が最終応答だと思い、後続の 200/304 などを処理しない
- `Link` の指定がキャッシュ戦略と噛み合わず、効果が出ない/逆効果になる

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Link`
- 関連ステータス: `200 OK`, `304 Not Modified`

## 例

```http
HTTP/1.1 103 Early Hints
Link: </assets/app.css>; rel=preload; as=style

```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103
- RFC 8297: https://www.rfc-editor.org/rfc/rfc8297
- IANA Registry: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
