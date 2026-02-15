# 実装依存 / 非標準ステータスコード（Implementation-dependent）

RFC / IANA レジストリに載らない「製品固有のステータスコード」や、「慣習的に使われる非標準コード」をまとめます。

- 注意: これらは **標準 HTTP ステータスコードではありません**（意味や発生条件は実装・サービスに依存します）。
- 目標: 断定的に一般化せず、一次情報（公式ドキュメント）へのリンクを添えて要点を把握できる形にします。

## サブカテゴリ

- nginx 独自（nginx-proprietary）: [`nginx-proprietary/index.md`](nginx-proprietary/index.md)
- Cloudflare 独自（cloudflare-proprietary）: [`cloudflare-proprietary/index.md`](cloudflare-proprietary/index.md)
- プロキシ慣習（proxy-conventions）: [`proxy-conventions/index.md`](proxy-conventions/index.md)

## nginx

- [`444 (nginx) Connection Closed Without Response`](nginx-proprietary/444-connection-closed-without-response.md)
- [`495 (nginx) Client Certificate Verification Error`](nginx-proprietary/495-client-certificate-verification-error.md)
- [`496 (nginx) Client Certificate Required`](nginx-proprietary/496-client-certificate-required.md)
- [`497 (nginx) HTTP Request Sent to HTTPS Port`](nginx-proprietary/497-http-request-sent-to-https-port.md)

## Cloudflare

- [`520 (Cloudflare) Web Server Returns an Unknown Error`](cloudflare-proprietary/520-web-server-returns-an-unknown-error.md)
- [`521 (Cloudflare) Web Server Is Down`](cloudflare-proprietary/521-web-server-is-down.md)
- [`522 (Cloudflare) Connection Timed Out`](cloudflare-proprietary/522-connection-timed-out.md)
- [`523 (Cloudflare) Origin Is Unreachable`](cloudflare-proprietary/523-origin-is-unreachable.md)
- [`524 (Cloudflare) A Timeout Occurred`](cloudflare-proprietary/524-a-timeout-occurred.md)
- [`525 (Cloudflare) SSL Handshake Failed`](cloudflare-proprietary/525-ssl-handshake-failed.md)
- [`526 (Cloudflare) Invalid SSL Certificate`](cloudflare-proprietary/526-invalid-ssl-certificate.md)
- [`530 (Cloudflare) Origin DNS Error`](cloudflare-proprietary/530-origin-dns-error.md)

## Proxy

- 598/599 などは、出典が安定して確認できたものから追加します: [`proxy-conventions/index.md`](proxy-conventions/index.md)
  - Alibaba Cloud（EdgeRoutine, ER）の定義例: [`598`](proxy-conventions/598-er-throttled-or-blocked.md), [`599`](proxy-conventions/599-er-context-unknown-error.md)
