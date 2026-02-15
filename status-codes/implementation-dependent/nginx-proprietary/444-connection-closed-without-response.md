# 444 (nginx) Connection Closed Without Response

> nginx 独自: 応答ヘッダーを送らずに接続を閉じます（HTTP レスポンスとして返るわけではありません）。

## 概要

- **分類**: 非標準（nginx 独自 / 4xx 相当の意図で扱われることが多い）
- **意味**: nginx が **レスポンスヘッダーを送らずに**接続をクローズする
- **主な用途**: 不正アクセス対策（即時遮断）、不要な応答生成の回避

## 代表的なユースケース

- ボット / スキャン / 不審 IP をサーバー側で即時に切断したい
- `return 403;` 等のエラーページを出したくない（情報露出を抑えたい）

## 典型的な原因（よくある勘違い含む）

- サーバー障害ではなく、nginx の設定（`return 444;`）やルールにより **意図的に切断**されている
- クライアント側は「接続が切れた」「Empty reply from server」等に見えることがある

## 関連ヘッダー / 関連ステータス

- 標準的に拒否理由を返すなら [`403 Forbidden`](../../4xx-client-error/403-forbidden.md)
- レート制限なら [`429 Too Many Requests`](../../4xx-client-error/429-too-many-requests.md)

## 例

```nginx
# nginx 設定例（不審な User-Agent を即時切断）
if ($http_user_agent ~* "(bot|crawler|scanner)") {
  return 444;
}
```

## 参考

- nginx docs: `return` directive（444 の説明）
  - https://nginx.org/en/docs/http/ngx_http_rewrite_module.html
- nginx docs: `reset_timedout_connection`（444 で閉じた接続に言及）
  - https://nginx.org/en/docs/http/ngx_http_core_module.html
