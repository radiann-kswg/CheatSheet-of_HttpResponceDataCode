# HTTP Status Codes Index

このリポジトリは、HTTP ステータスコードのチートシート資料集です。

- 入口（このページ）: カテゴリ別の目次
- 個別ページ: `status-codes/` 配下（基本は 1 コード = 1 ファイル）

## 概要（ステータスコードの基本）

MDN ではステータスコードを次のように説明しています。

> "HTTP response status codes indicate whether a specific HTTP request has been successfully completed." \
> — https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

RFC 9110 では、先頭 1 桁がレスポンスのクラス（1xx〜5xx）を定義するとしています。

> "The first digit of the status code defines the class of response." \
> — https://www.rfc-editor.org/rfc/rfc9110.html

また、RFC 9110 は **未知のステータスコードの扱い**について、クラスを理解し、同クラスの `x00` と等価として扱うことを求めています。

> "treat an unrecognized status code as being equivalent to the x00 status code of that class." \
> — https://www.rfc-editor.org/rfc/rfc9110.html

ステータスコードは拡張可能であり、割り当ては IANA レジストリで確認できます。

- IANA HTTP Status Code Registry: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml

## 運用ヒント（実務での見方）

- **まずクラス（1xx〜5xx）を見る**: 詳細な理由句より、先頭 1 桁で大枠の対応（成功/リダイレクト/エラー種別）を決めやすいです。
- **未知コードでも落ちない実装にする**: RFC 9110 の要件に従い、未認識コードは同クラスの `x00` 相当として扱う方針が安全です。
- **プロキシ/エッジ起因のコードを切り分ける**: 例として Cloudflare の `524` は、オリジンに接続できたが所定時間内に HTTP 応答が返らなかった状況を説明しています。

> "Error 524 indicates that Cloudflare successfully connected to the origin web server, but the origin did not provide an HTTP response before the default 120 seconds Proxy Read Timeout." \
> — https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-524/

## 非標準 / デファクト（実装依存の例）

仕様（RFC / IANA）に載らないコードや、製品固有のコードが使われることがあります。代表例として、nginx の `444` は次のように説明されています。

> "The non-standard code 444 closes a connection without sending a response header." \
> — http://nginx.org/en/docs/http/ngx_http_rewrite_module.html

## 1.Information

### [`100 Continue`](status-codes/1xx-information/100-continue.md)

### [`101 Switching Protocols`](status-codes/1xx-information/101-switching-protocols.md)

### [`102 Processing`](status-codes/1xx-information/102-processing.md)

### [`103 Early Hints`](status-codes/1xx-information/103-early-hints.md)

### [`104 Upload Resumption Supported`](status-codes/1xx-information/104-upload-resumption-supported.md)

## 2.Success

### [`200 OK`](status-codes/2xx-success/200-ok.md)

### [`201 Created`](status-codes/2xx-success/201-created.md)

### [`202 Accepted`](status-codes/2xx-success/202-accepted.md)

### [`203 Non-Authoritative Information`](status-codes/2xx-success/203-non-authoritative-information.md)

### [`204 No Content`](status-codes/2xx-success/204-no-content.md)

### [`205 Reset Content`](status-codes/2xx-success/205-reset-content.md)

### [`206 Partial Content`](status-codes/2xx-success/206-partial-content.md)

### [`207 Multi-Status`](status-codes/2xx-success/207-multi-status.md)

### [`208 Already Reported`](status-codes/2xx-success/208-already-reported.md)

### [`226 IM Used`](status-codes/2xx-success/226-im-used.md)

## 3.Redirection

### [`300 Multiple Choices`](status-codes/3xx-redirection/300-multiple-choices.md)

### [`301 Moved Permanently`](status-codes/3xx-redirection/301-moved-permanently.md)

### [`302 Found`](status-codes/3xx-redirection/302-found.md)

### [`303 See Other`](status-codes/3xx-redirection/303-see-other.md)

### [`304 Not Modified`](status-codes/3xx-redirection/304-not-modified.md)

### [`307 Temporary Redirect`](status-codes/3xx-redirection/307-temporary-redirect.md)

### [`308 Permanent Redirect`](status-codes/3xx-redirection/308-permanent-redirect.md)

## 4.Client Error

### [`400 Bad Request`](status-codes/4xx-client-error/400-bad-request.md)

### [`401 Unauthorized`](status-codes/4xx-client-error/401-unauthorized.md)

### [`402 Payment Required`](status-codes/4xx-client-error/402-payment-required.md)

### [`403 Forbidden`](status-codes/4xx-client-error/403-forbidden.md)

### [`404 Not Found`](status-codes/4xx-client-error/404-not-found.md)

### [`405 Method Not Allowed`](status-codes/4xx-client-error/405-method-not-allowed.md)

### [`406 Not Acceptable`](status-codes/4xx-client-error/406-not-acceptable.md)

### [`407 Proxy Authentication Required`](status-codes/4xx-client-error/407-proxy-authentication-required.md)

### [`408 Request Timeout`](status-codes/4xx-client-error/408-request-timeout.md)

### [`409 Conflict`](status-codes/4xx-client-error/409-conflict.md)

### [`410 Gone`](status-codes/4xx-client-error/410-gone.md)

### [`411 Length Required`](status-codes/4xx-client-error/411-length-required.md)

### [`412 Precondition Failed`](status-codes/4xx-client-error/412-precondition-failed.md)

### [`413 Content Too Large`](status-codes/4xx-client-error/413-content-too-large.md)

### [`414 URI Too Long`](status-codes/4xx-client-error/414-uri-too-long.md)

### [`415 Unsupported Media Type`](status-codes/4xx-client-error/415-unsupported-media-type.md)

### [`416 Range Not Satisfiable`](status-codes/4xx-client-error/416-range-not-satisfiable.md)

### [`417 Expectation Failed`](status-codes/4xx-client-error/417-expectation-failed.md)

### [`418 I'm a teapot`](status-codes/4xx-client-error/418-im-a-teapot.md)

### [`421 Misdirected Request`](status-codes/4xx-client-error/421-misdirected-request.md)

### [`422 Unprocessable Content`](status-codes/4xx-client-error/422-unprocessable-content.md)

### [`423 Locked`](status-codes/4xx-client-error/423-locked.md)

### [`424 Failed Dependency`](status-codes/4xx-client-error/424-failed-dependency.md)

### [`425 Too Early`](status-codes/4xx-client-error/425-too-early.md)

### [`426 Upgrade Required`](status-codes/4xx-client-error/426-upgrade-required.md)

### [`428 Precondition Required`](status-codes/4xx-client-error/428-precondition-required.md)

### [`429 Too Many Requests`](status-codes/4xx-client-error/429-too-many-requests.md)

### [`431 Request Header Fields Too Large`](status-codes/4xx-client-error/431-request-header-fields-too-large.md)

### [`451 Unavailable For Legal Reasons`](status-codes/4xx-client-error/451-unavailable-for-legal-reasons.md)

## 5.Server Error

### [`500 Internal Server Error`](status-codes/5xx-server-error/500-internal-server-error.md)

### [`501 Not Implemented`](status-codes/5xx-server-error/501-not-implemented.md)

### [`502 Bad Gateway`](status-codes/5xx-server-error/502-bad-gateway.md)

### [`503 Service Unavailable`](status-codes/5xx-server-error/503-service-unavailable.md)

### [`504 Gateway Timeout`](status-codes/5xx-server-error/504-gateway-timeout.md)

### [`505 HTTP Version Not Supported`](status-codes/5xx-server-error/505-http-version-not-supported.md)

### [`506 Variant Also Negotiates`](status-codes/5xx-server-error/506-variant-also-negotiates.md)

### [`507 Insufficient Storage`](status-codes/5xx-server-error/507-insufficient-storage.md)

### [`508 Loop Detected`](status-codes/5xx-server-error/508-loop-detected.md)

### [`510 Not Extended`](status-codes/5xx-server-error/510-not-extended.md)

### [`511 Network Authentication Required`](status-codes/5xx-server-error/511-network-authentication-required.md)
