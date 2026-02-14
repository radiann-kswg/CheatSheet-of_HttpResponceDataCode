# 412 Precondition Failed

> 引用: "The HTTP `412 Precondition Failed` client error response status code indicates that access to the target resource was denied." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/412

## 概要

- **分類**: 4xx（Client Error）
- **意味**: 条件付きリクエスト（`If-Match` / `If-Unmodified-Since` 等）の前提条件が満たされず、更新などが拒否されたことを示します。
- **主な用途**: 競合防止（いわゆる mid-air collision 回避）として、ETag を使った楽観ロック。

## 代表的なユースケース

- 更新/削除の前に `If-Match: <ETag>` を要求し、違えば 412
- 「最後に見た版から変わっていないこと」を前提にした操作

## 典型的な原因（よくある勘違い含む）

- 条件ヘッダーを付けずに更新して、意図せず上書きが発生する（逆に、条件必須で 428 を返す設計もある）
- 304 と混同する（304 は主に GET/HEAD のキャッシュ再検証、412 は更新系の前提条件不一致）

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `ETag`, `If-Match`, `If-Unmodified-Since`
- 関連ステータス: `304 Not Modified`, `428 Precondition Required`, `409 Conflict`

## 例

```http
HTTP/1.1 412 Precondition Failed
Content-Type: application/json

{"error":"PreconditionFailed","message":"ETag does not match. Fetch latest and retry."}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/412
- MDN（条件付きリクエスト）: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Conditional_requests
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
