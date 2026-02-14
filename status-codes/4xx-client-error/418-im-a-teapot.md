# 418 I'm a teapot

> 引用: "The HTTP `418 I'm a teapot` status response code indicates that the server refuses to brew coffee because it is, permanently, a teapot." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/418

## 概要

- **分類**: 4xx（Client Error）
- **意味**: ジョークとして定義されたステータスで、サーバーが「コーヒーを淹れない（ティーポットだから）」という比喩的拒否を表します。
- **位置づけ**: 元々は RFC 2324（April Fools）由来で、広くジョーク用途で使われたため RFC 9110 で「正式に予約」されています。**実運用の意味付けには使わない**のが無難です。

## 代表的なユースケース

- 例示・ネタ・実験用途
- 「このリクエストは扱わない」等をジョークで返す（ただし可観測な仕様になるので推奨度は低い）

## 典型的な注意点

- クライアント/中間機器が未知コードを 4xx として扱えず、思わぬ挙動になる可能性
- 自動化ツールや監視がエラー原因を誤解しやすい

## 関連ステータス

- [503 Service Unavailable](../5xx-server-error/503-service-unavailable.md)（一時的に処理できない場合）

## 例

```http
HTTP/1.1 418 I'm a teapot
Content-Type: application/json

{"error":"ImATeapot","message":"This endpoint does not brew coffee."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/418
- RFC 2324: https://www.rfc-editor.org/rfc/rfc2324.html
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
