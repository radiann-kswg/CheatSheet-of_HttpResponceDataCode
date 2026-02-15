# 実装依存 / 非標準ステータスコード（Implementation-dependent）

RFC / IANA レジストリに載らない「製品固有のステータスコード」や、「慣習的に使われる非標準コード」をまとめます。

- 注意: これらは **標準 HTTP ステータスコードではありません**（意味や発生条件は実装・サービスに依存します）。
- 目標: 断定的に一般化せず、一次情報（公式ドキュメント）へのリンクを添えて要点を把握できる形にします。

## nginx

- [`444 (nginx) Connection Closed Without Response`](444-connection-closed-without-response.md)
- [`495 (nginx) Client Certificate Verification Error`](495-client-certificate-verification-error.md)
- [`496 (nginx) Client Certificate Required`](496-client-certificate-required.md)
- [`497 (nginx) HTTP Request Sent to HTTPS Port`](497-http-request-sent-to-https-port.md)

## Cloudflare

- [`520 (Cloudflare) Web Server Returns an Unknown Error`](520-web-server-returns-an-unknown-error.md)
- [`521 (Cloudflare) Web Server Is Down`](521-web-server-is-down.md)
- [`522 (Cloudflare) Connection Timed Out`](522-connection-timed-out.md)
- [`523 (Cloudflare) Origin Is Unreachable`](523-origin-is-unreachable.md)
- [`524 (Cloudflare) A Timeout Occurred`](524-a-timeout-occurred.md)
- [`525 (Cloudflare) SSL Handshake Failed`](525-ssl-handshake-failed.md)
- [`526 (Cloudflare) Invalid SSL Certificate`](526-invalid-ssl-certificate.md)
- [`530 (Cloudflare) Origin DNS Error`](530-origin-dns-error.md)
