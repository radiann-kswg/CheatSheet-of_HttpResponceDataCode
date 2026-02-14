# 300 Multiple Choices

> 引用: "The HTTP `300 Multiple Choices` redirection response status code indicates that the request has more than one possible response. The user-agent or the user should choose one of them." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/300

## 概要

- **分類**: 3xx（Redirection）
- **意味**: 同じ要求に対して複数の選択肢（表現やリソース）があり、クライアント（またはユーザー）が選ぶ必要があることを示します。
- **主な用途**: コンテンツネゴシエーション等で、候補となる表現の一覧を返して選択させる。

## 代表的なユースケース

- 言語/形式など複数の表現があり、サーバー側で自動選択しない（またはできない）場合に候補を返す
- 実装固有の方法で、候補 URI とメタデータ（言語、メディアタイプ等）を提示する

## 典型的な原因（よくある勘違い含む）

- `Accept` / `Accept-Language` などのヘッダーだけでは一意に決まらず、複数候補が残る
- 300 は「自動でリダイレクトするコード」ではなく、候補を提示して選択させる目的のコード

## 関連ヘッダー / 関連ステータス

- 関連ヘッダー: `Location`（サーバーが推奨候補を示す場合）, `Vary`
- 関連ステータス: `301 Moved Permanently`, `302 Found`, `308 Permanent Redirect`

## 例

```http
HTTP/1.1 300 Multiple Choices
Content-Type: application/json

{
	"choices": [
		{"uri": "/index.html.en", "language": "en"},
		{"uri": "/index.html.fr", "language": "fr"}
	]
}
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/300
- RFC 9110: https://www.rfc-editor.org/rfc/rfc9110.html
