# 495 (nginx) Client Certificate Verification Error

> nginx 独自: クライアント証明書の検証中にエラーが発生したことを表す非標準コード（`error_page` によるリダイレクト等に使われます）。

## 概要

- **分類**: 非標準（nginx 独自）
- **意味**: クライアント証明書の検証中にエラーが発生
- **主な用途**: mTLS（クライアント証明書認証）構成でのエラー分岐

## 代表的なユースケース

- mTLS のエラーを専用ページへ誘導したい（`error_page 495 ...`）
- クライアントに証明書更新や設定不備を案内したい

## 典型的な原因（よくある勘違い含む）

- 証明書チェーンの不備、期限切れ、失効、署名検証失敗など
- 「サーバーが 495 を返している」というより、nginx 内部のエラー処理コードとして扱われることがある

## 関連ヘッダー / 関連ステータス

- クライアント証明書未提示: [496 (nginx) Client Certificate Required](496-client-certificate-required.md)
- HTTPS ポートへの誤送信: [497 (nginx) HTTP Request Sent to HTTPS Port](497-http-request-sent-to-https-port.md)
- 標準の認証エラー文脈: [`401 Unauthorized`](../4xx-client-error/401-unauthorized.md)

## 例

```nginx
# nginx: SSL エラーを専用 URL に誘導（リダイレクト）
error_page 495 =302 https://example.com/mtls/client-cert-error;
```

## 参考

- nginx docs: `ngx_http_ssl_module` > Error Processing（495/496/497 の説明）
  - https://nginx.org/en/docs/http/ngx_http_ssl_module.html
