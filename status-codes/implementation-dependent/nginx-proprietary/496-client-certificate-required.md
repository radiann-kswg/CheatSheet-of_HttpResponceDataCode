# 496 (nginx) Client Certificate Required

> nginx 独自: 必要なクライアント証明書が提示されなかったことを表す非標準コード（`error_page` で分岐可能）。

## 概要

- **分類**: 非標準（nginx 独自）
- **意味**: クライアントが要求された証明書を提示していない
- **主な用途**: mTLS（クライアント証明書必須）構成での案内・誘導

## 代表的なユースケース

- 企業内システム等で、クライアント証明書必須のサイトにアクセスした際に、取得手順ページへ誘導する

## 典型的な原因（よくある勘違い含む）

- ブラウザにクライアント証明書が未インストール
- 証明書選択ダイアログでキャンセルした
- OS/ブラウザの証明書ストアにあるが、対象サイトに提示されない設定

## 関連ヘッダー / 関連ステータス

- 検証中エラー: [495 (nginx) Client Certificate Verification Error](495-client-certificate-verification-error.md)
- 標準の認証エラー文脈: [`401 Unauthorized`](../../4xx-client-error/401-unauthorized.md)

## 例

```nginx
# nginx: クライアント証明書未提示を専用ページへ
error_page 496 =302 https://example.com/mtls/client-cert-required;
```

## 参考

- nginx docs: `ngx_http_ssl_module` > Error Processing（495/496/497 の説明）
  - https://nginx.org/en/docs/http/ngx_http_ssl_module.html
