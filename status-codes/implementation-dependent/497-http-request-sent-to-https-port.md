# 497 (nginx) HTTP Request Sent to HTTPS Port

> nginx 独自: HTTPS ポートに通常の HTTP リクエストが送られたことを表す非標準コード（`error_page` で分岐可能）。

## 概要

- **分類**: 非標準（nginx 独自）
- **意味**: HTTPS ポートに HTTP（平文）でアクセスされた
- **主な用途**: http→https 誘導、誤設定（URL/ポート/プロキシ）の切り分け

## 代表的なユースケース

- `https://` を付け忘れたアクセスを `https://` にリダイレクトしたい
- ロードバランサやリバースプロキシの転送設定ミスを検知したい

## 典型的な原因（よくある勘違い含む）

- クライアントが `http://example.com:443/` のように平文で 443 へ送っている
- TLS 終端の場所（LB/プロキシ/nginx）の前提が食い違っている

## 関連ヘッダー / 関連ステータス

- 恒久的な https 化: [`308 Permanent Redirect`](../3xx-redirection/308-permanent-redirect.md)
- 一時的な https 化: [`307 Temporary Redirect`](../3xx-redirection/307-temporary-redirect.md)

## 例

```nginx
# nginx: 497 を検知したら https へ誘導（例）
error_page 497 =308 https://$host$request_uri;
```

## 参考

- nginx docs: `ngx_http_ssl_module` > Error Processing（495/496/497 の説明）
  - https://nginx.org/en/docs/http/ngx_http_ssl_module.html
