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

- 実装依存・非標準ステータスコード集: [`status-codes/implementation-dependent/index.md`](status-codes/implementation-dependent/index.md)
  - nginx / Cloudflare など、IANA 未登録コードのチートシートをまとめています。

## 1.Information

### [`100 Continue`](status-codes/1xx-information/100-continue.md)

クライアントが本文送信を始める前に、サーバーから「継続してよい」ことを受け取るための 1xx。`Expect: 100-continue` と組み合わせ、不要な大きなアップロードを避けたいときに使われます。

### [`101 Switching Protocols`](status-codes/1xx-information/101-switching-protocols.md)

プロトコル切替（例: HTTP/1.1 から WebSocket など）を受け入れたことを示す 1xx。`Upgrade` / `Connection` ヘッダーの交渉結果として返り、以後は別プロトコルで通信が継続します。

### [`102 Processing`](status-codes/1xx-information/102-processing.md)

WebDAV で使われる 1xx。リクエストを受理して処理中であり、最終的な成功/失敗応答は後で返すことを示します。長い処理でタイムアウト誤判定を避けたいケースの中間応答です。

### [`103 Early Hints`](status-codes/1xx-information/103-early-hints.md)

最終応答（200 等）を待たずに、ブラウザへ事前ヒントを送る 1xx。主に `Link` ヘッダーで先読み（preload）対象を通知し、体感速度改善を狙います。実装/キャッシュとの相性に注意します。

### [`104 Upload Resumption Supported`](status-codes/1xx-information/104-upload-resumption-supported.md)

IANA で TEMPORARY 登録されている拡張 1xx。アップロードの再開（レジューム）をサポートすることを示すためのコードとして整理されています。標準化状況や期限（有効期間）を必ず確認して扱います。

## 2.Success

### [`200 OK`](status-codes/2xx-success/200-ok.md)

リクエストが成功したことを示す基本の 2xx。意味はメソッドにより変わり（GET は取得成功、POST は処理成功など）、レスポンスボディの有無も文脈次第です。API では成功時の代表として広く使われます。

### [`201 Created`](status-codes/2xx-success/201-created.md)

新しいリソースが作成されたことを示す 2xx。作成結果のリソース URI を `Location` で返す設計が一般的です。POST による作成 API でよく使われ、単なる処理成功（200）と区別して扱えます。

### [`202 Accepted`](status-codes/2xx-success/202-accepted.md)

リクエストを受け付けたが、処理は未完了（非同期実行など）であることを示す 2xx。ジョブ実行やバッチ登録で用いられます。結果取得の方法（ポーリング先、ステータス確認 API）を別途提示するのが実務的です。

### [`203 Non-Authoritative Information`](status-codes/2xx-success/203-non-authoritative-information.md)

成功したが、返す表現がオリジンサーバー由来ではない（変換・代理生成など）可能性を示す 2xx。キャッシュやプロキシが内容を書き換える構成で登場し得ますが、API では通常 200 のまま運用されることも多いです。

### [`204 No Content`](status-codes/2xx-success/204-no-content.md)

成功したがレスポンスボディがないことを示す 2xx。更新成功（PUT/PATCH）や削除成功（DELETE）で「返す内容がない」場合によく使われます。クライアント側はボディが無い前提で処理する必要があります。

### [`205 Reset Content`](status-codes/2xx-success/205-reset-content.md)

成功後に、クライアントが表示/入力状態をリセットすることを求める 2xx。フォーム送信後の UI リセット用途などが想定されますが、実際の Web/API では 204 や 200 が用いられる場面も多く、採用時はクライアント対応を確認します。

### [`206 Partial Content`](status-codes/2xx-success/206-partial-content.md)

`Range` リクエストにより、リソースの一部だけを返したことを示す 2xx。動画や大きなファイルの分割取得、再開ダウンロードに用いられます。`Content-Range` などのヘッダー整合が重要で、キャッシュや CDN との挙動も確認します。

### [`207 Multi-Status`](status-codes/2xx-success/207-multi-status.md)

WebDAV で使われる 2xx。複数のサブ操作/リソースについて、個別の結果（成功/失敗）をまとめて返す目的で使われます。ボディは XML（`application/xml` 等）になることが多く、一般的な JSON API では採用例が限定的です。

### [`208 Already Reported`](status-codes/2xx-success/208-already-reported.md)

WebDAV の拡張で、同一リソースが既にレスポンス内で報告済みであることを示す 2xx。重複列挙を避ける目的で使われます。通常の REST API ではあまり見かけず、対応クライアントの前提が必要です。

### [`226 IM Used`](status-codes/2xx-success/226-im-used.md)

差分転送（インスタンス操作）に関連する 2xx。クライアントが差分取得を要求し、サーバーが差分表現を返したことを示す用途です。一般の API 設計では ETag/条件付きリクエスト（304 等）で代替されることが多いです。

## 3.Redirection

### [`300 Multiple Choices`](status-codes/3xx-redirection/300-multiple-choices.md)

複数の表現/選択肢があり、クライアントが選べることを示す 3xx。実運用では 301/302/303/307/308 が主で、300 は自動選択の難しさから採用が限定的です。使う場合は選択肢の提示方法を明確にします。

### [`301 Moved Permanently`](status-codes/3xx-redirection/301-moved-permanently.md)

リソースが恒久的に移動したことを示す 3xx。SEO やブックマーク更新の文脈で重要で、通常 `Location` で移動先を示します。メソッド変更の扱いは実装差があり得るため、必要なら 308 も検討します。

### [`302 Found`](status-codes/3xx-redirection/302-found.md)

一時的な移動を示す 3xx（歴史的に最も普及）。`Location` で移動先を示します。多くのクライアントが POST を GET に変える挙動を持つため、意図を明確にしたい場合は 303 や 307 を使う方が安全です。

### [`303 See Other`](status-codes/3xx-redirection/303-see-other.md)

別 URI を GET で参照せよ、という意図を明確にする 3xx。POST 処理後に結果ページへ誘導する（PRG: Post/Redirect/Get）パターンで用いられます。`Location` を必ず返し、クライアントは GET で取り直します。

### [`304 Not Modified`](status-codes/3xx-redirection/304-not-modified.md)

条件付きリクエスト（`If-None-Match` / `If-Modified-Since` など）の結果、内容が変わっていないことを示す 3xx。ボディは返さず、キャッシュ利用を促します。ETag の運用やキャッシュ制御とセットで設計します。

### [`307 Temporary Redirect`](status-codes/3xx-redirection/307-temporary-redirect.md)

一時的なリダイレクトを示し、元のメソッドとボディを維持することを意図した 3xx。302 の曖昧さ（メソッドが変わり得る）を避けたい場合に使います。`Location` と合わせて、クライアント互換性も確認します。

### [`308 Permanent Redirect`](status-codes/3xx-redirection/308-permanent-redirect.md)

恒久的なリダイレクトを示し、元のメソッドとボディを維持することを意図した 3xx。301 の互換性問題（実装によりメソッドが変わる可能性）を避けたい場合に有効です。`Location` とキャッシュ影響に注意します。

## 4.Client Error

### [`400 Bad Request`](status-codes/4xx-client-error/400-bad-request.md)

リクエストが不正でサーバーが処理できないことを示す 4xx。構文エラー、必須パラメータ不足、型不一致などで返ります。API では検証エラーの代表として使われますが、401/403/404 などとの使い分けを決めておくと運用しやすいです。

### [`401 Unauthorized`](status-codes/4xx-client-error/401-unauthorized.md)

認証が必要、または認証情報が不正であることを示す 4xx。通常 `WWW-Authenticate` を伴い、クライアントに認証方式を伝えます。権限不足（認証済みだが許可されない）は 403 を使う、という切り分けが一般的です。

### [`402 Payment Required`](status-codes/4xx-client-error/402-payment-required.md)

将来用途のために予約されている 4xx。決済必須を表す目的で使われることがありますが、一般的な意味付けが確立していません。API で採用する場合は、エラーコードや本文で課金要件を明確にし、クライアント合意を取ります。

### [`403 Forbidden`](status-codes/4xx-client-error/403-forbidden.md)

サーバーがリクエストを理解したが、許可しないことを示す 4xx。認証済みでも権限が足りない、ポリシーで拒否する等のケースです。認証が必要な場合は 401、存在を隠したい場合は 404 を返す運用もあり得ます。

### [`404 Not Found`](status-codes/4xx-client-error/404-not-found.md)

指定されたリソースが見つからないことを示す 4xx。URL の誤り、ルーティング未設定、削除済み等が原因です。恒久的に削除したなら 410、アクセス制御で隠すなら 404 を返す運用もあり、設計方針が重要です。

### [`405 Method Not Allowed`](status-codes/4xx-client-error/405-method-not-allowed.md)

URI は存在するが、そのメソッド（GET/POST 等）が許可されていないことを示す 4xx。`Allow` ヘッダーで許可メソッドを示すのが定石です。REST API ではルーティングの不整合や誤ったメソッド利用を早期に検知できます。

### [`406 Not Acceptable`](status-codes/4xx-client-error/406-not-acceptable.md)

クライアントの `Accept`（表現の希望）などに合致するレスポンスを生成できないことを示す 4xx。コンテンツネゴシエーションを厳密に行う場合に登場します。API では `application/json` 固定にして 406 を返さない運用も多いです。

### [`407 Proxy Authentication Required`](status-codes/4xx-client-error/407-proxy-authentication-required.md)

プロキシが認証を要求していることを示す 4xx。エンドユーザー向けネットワークや企業プロキシで遭遇します。サーバー認証（401）と異なり、`Proxy-Authenticate` などプロキシ向けヘッダーが関係します。

### [`408 Request Timeout`](status-codes/4xx-client-error/408-request-timeout.md)

サーバーがリクエストを待ったが、時間内に受信できなかったことを示す 4xx。ネットワーク遅延やクライアント停止で発生します。アプリ層のタイムアウト（504/524 等）と混同しやすいため、ログでどこがタイムアウトしたか切り分けます。

### [`409 Conflict`](status-codes/4xx-client-error/409-conflict.md)

リクエストが現在の状態と衝突するため処理できないことを示す 4xx。更新競合、重複作成、状態遷移の矛盾などで返ります。ETag を使う楽観ロック（`If-Match`）や、業務エラーコードと併用すると原因が追いやすいです。

### [`410 Gone`](status-codes/4xx-client-error/410-gone.md)

リソースが以前は存在したが、現在は恒久的に利用できないことを示す 4xx。404 より強い意味を持ち、クローラやクライアントに「もう探さない」判断を促せます。削除 API の設計やコンテンツ廃止時に使い分けます。

### [`411 Length Required`](status-codes/4xx-client-error/411-length-required.md)

サーバーが `Content-Length` の指定を要求していることを示す 4xx。ストリーミングや転送エンコーディングとの関係で発生し得ます。現代の HTTP 実装では見かけにくいですが、ゲートウェイ/古いサーバー構成で遭遇する可能性があります。

### [`412 Precondition Failed`](status-codes/4xx-client-error/412-precondition-failed.md)

条件付きリクエスト（前提条件）が満たされないことを示す 4xx。`If-Match` / `If-Unmodified-Since` 等の前提が成立しない場合に返ります。楽観ロックや整合性維持に有効で、競合（409）と合わせて使い分けます。

### [`413 Content Too Large`](status-codes/4xx-client-error/413-content-too-large.md)

リクエストボディが大きすぎて処理できないことを示す 4xx。アップロード上限、プロキシの制限、サーバー設定が原因です。クライアントには上限の目安や代替手段（分割、別 API）を返すと UX が改善します。

### [`414 URI Too Long`](status-codes/4xx-client-error/414-uri-too-long.md)

URI が長すぎて処理できないことを示す 4xx。クエリパラメータの肥大化、URL エンコード後の長大化、リダイレクトループ等で起きます。長いデータは POST ボディへ移す、検索条件を短縮するなどの設計見直しが必要です。

### [`415 Unsupported Media Type`](status-codes/4xx-client-error/415-unsupported-media-type.md)

`Content-Type` がサーバーでサポートされていないことを示す 4xx。JSON 期待なのに `text/plain` が来た、などで返します。API では受け付けるメディアタイプを明確にし、エラーメッセージに期待値を含めると解決が早いです。

### [`416 Range Not Satisfiable`](status-codes/4xx-client-error/416-range-not-satisfiable.md)

指定された `Range` が無効（範囲外など）で満たせないことを示す 4xx。部分取得（206）を使う実装で発生します。`Content-Range: */{length}` を返す運用があり、クライアントは最新サイズを基に再試行できます。

### [`417 Expectation Failed`](status-codes/4xx-client-error/417-expectation-failed.md)

`Expect` ヘッダーで要求された期待（例: 100-continue）が満たせないことを示す 4xx。中間応答の扱いが絡むため、プロキシやロードバランサの挙動差にも注意が必要です。通常の API では遭遇頻度は高くありません。

### [`418 I'm a teapot`](status-codes/4xx-client-error/418-im-a-teapot.md)

歴史的/ジョーク用途として知られる 4xx（IANA では Unused として扱われます）。実サービスの API で使うと互換性や理解の面で不利になりやすく、通常は 400/404/422 など目的に合うコードを選ぶ方が安全です。

### [`421 Misdirected Request`](status-codes/4xx-client-error/421-misdirected-request.md)

リクエストが意図したオリジンへ届いておらず、そのサーバーでは適切に応答できないことを示す 4xx。HTTP/2 の接続共有や SNI/ホスト名の取り扱い、プロキシ構成に起因します。再接続や別経路での再試行が有効な場合があります。

### [`422 Unprocessable Content`](status-codes/4xx-client-error/422-unprocessable-content.md)

リクエストの構文自体は正しいが、意味的に処理できないことを示す 4xx。入力値の妥当性（バリデーション）エラーとして採用されることが多いです。400 と使い分ける場合は、どこからが「意味エラー」かをチームで統一します。

### [`423 Locked`](status-codes/4xx-client-error/423-locked.md)

対象リソースがロックされており、操作できないことを示す 4xx（WebDAV 由来）。排他制御や編集ロックの状態を表現できます。一般的な API では 409 とする場合もあるため、採用時はクライアントと合意します。

### [`424 Failed Dependency`](status-codes/4xx-client-error/424-failed-dependency.md)

前提となる別操作が失敗したため、現在の操作も失敗したことを示す 4xx（WebDAV 由来）。バッチ処理や複合操作の結果表現に使われます。通常の API では 409/400/500 に寄せる場合もあります。

### [`425 Too Early`](status-codes/4xx-client-error/425-too-early.md)

リプレイ攻撃などのリスクがあるため、リクエストを処理するには早すぎることを示す 4xx。TLS/HTTP の再送や早期データ（0-RTT）に関連して登場します。再試行戦略や idempotency と合わせて設計するのが重要です。

### [`426 Upgrade Required`](status-codes/4xx-client-error/426-upgrade-required.md)

現在のプロトコルでは処理できず、別プロトコル/新しいバージョンへの切替が必要であることを示す 4xx。`Upgrade` などで要求を示すことがあります。API のバージョン移行では 426 以外の手段（Deprecation 周知等）も併用されます。

### [`428 Precondition Required`](status-codes/4xx-client-error/428-precondition-required.md)

更新の競合を避けるために前提条件（例: `If-Match`）が必要であることを示す 4xx。ETag による楽観ロックを必須化したい API に有効です。412（条件不一致）と組み合わせると、競合制御が明確になります。

### [`429 Too Many Requests`](status-codes/4xx-client-error/429-too-many-requests.md)

リクエストが多すぎる（レート制限）ことを示す 4xx。再試行するなら待機時間を伝える（`Retry-After` など）設計が重要です。クライアント側は指数バックオフやキューイングで負荷を抑える実装が求められます。

### [`431 Request Header Fields Too Large`](status-codes/4xx-client-error/431-request-header-fields-too-large.md)

リクエストヘッダー（全体または特定フィールド）が大きすぎて処理できないことを示す 4xx。巨大な Cookie、過剰なカスタムヘッダー、転送経路の制限が原因です。問題ヘッダーの特定とサイズ削減（Cookie 分割/整理）が対策になります。

### [`451 Unavailable For Legal Reasons`](status-codes/4xx-client-error/451-unavailable-for-legal-reasons.md)

法的要請によりコンテンツを提供できないことを示す 4xx。検閲、差止め、コンプライアンス対応などの文脈で使われます。説明文や通知ページの提示が実務上重要で、単なる 403 と区別して理由を表明できます。

## 5.Server Error

### [`500 Internal Server Error`](status-codes/5xx-server-error/500-internal-server-error.md)

サーバー側の予期しないエラーで処理できなかったことを示す 5xx。アプリ例外、設定不備、依存サービス障害など幅広い原因が含まれます。クライアントは即時修正できないことが多く、ログ/トレースで原因を切り分ける運用が重要です。

### [`501 Not Implemented`](status-codes/5xx-server-error/501-not-implemented.md)

サーバーが要求された機能（主にメソッド）をサポートしていないことを示す 5xx。405 が「その URI では不可」なのに対し、501 は「サーバーとして未実装」のニュアンスです。ゲートウェイが上流から受け取る場合もあります。

### [`502 Bad Gateway`](status-codes/5xx-server-error/502-bad-gateway.md)

ゲートウェイ/プロキシが上流サーバーから不正な応答を受け取ったことを示す 5xx。上流障害、接続不良、TLS/HTTP 不整合などで発生します。エッジ層のログとオリジンのログを突き合わせて原因を切り分けます。

### [`503 Service Unavailable`](status-codes/5xx-server-error/503-service-unavailable.md)

一時的にサービスを提供できないことを示す 5xx。メンテナンス、過負荷、依存サービス停止などで返ります。復旧見込みがある場合は `Retry-After` を添えるとクライアントの再試行制御に役立ちます。

### [`504 Gateway Timeout`](status-codes/5xx-server-error/504-gateway-timeout.md)

ゲートウェイ/プロキシが上流から時間内に応答を得られなかったことを示す 5xx。アプリ処理の遅延、ネットワーク、上流の輻輳などが原因です。どの層のタイムアウトか（LB/CDN/アプリ）を明確にするのが調査の近道です。

### [`505 HTTP Version Not Supported`](status-codes/5xx-server-error/505-http-version-not-supported.md)

サーバーがリクエストで使われた HTTP バージョンをサポートしないことを示す 5xx。古い/特殊なクライアントやプロキシ構成で発生し得ます。通常はサーバー設定（対応バージョン、ALPN、プロキシ設定）を見直します。

### [`506 Variant Also Negotiates`](status-codes/5xx-server-error/506-variant-also-negotiates.md)

コンテンツネゴシエーションの設定不備により、サーバー側で循環（自己交渉）してしまうことを示す 5xx。一般的な API では見かけにくいですが、ネゴシエーションやバリアント設定を行う構成で発生します。

### [`507 Insufficient Storage`](status-codes/5xx-server-error/507-insufficient-storage.md)

サーバーが要求を完了するためのストレージ容量を確保できないことを示す 5xx（WebDAV 由来）。ディスク枯渇やクォータ超過などが原因です。アラートや容量監視、バックプレッシャー設計が重要になります。

### [`508 Loop Detected`](status-codes/5xx-server-error/508-loop-detected.md)

サーバーが処理中に無限ループ（循環参照）を検出したことを示す 5xx。WebDAV の探索や依存解決で起き得ます。一般の Web アプリでも、再帰的リダイレクトやプロキシ設定ミスが原因になる場合があります。

### [`510 Not Extended`](status-codes/5xx-server-error/510-not-extended.md)

要求を満たすために、追加拡張が必要であることを示す 5xx（ただし IANA では OBSOLETED とされています）。実務ではほとんど使われず、拡張交渉は別メカニズムで行うのが一般的です。

### [`511 Network Authentication Required`](status-codes/5xx-server-error/511-network-authentication-required.md)

ネットワークアクセス（キャプティブポータル等）の認証が必要であることを示す 5xx。公衆 Wi-Fi などで、ブラウザにログインページ誘導を行う目的で使われます。アプリの障害と誤認しやすいので、環境要因の切り分けが重要です。
