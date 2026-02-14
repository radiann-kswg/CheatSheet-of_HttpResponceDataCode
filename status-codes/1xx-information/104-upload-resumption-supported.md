# 104 Upload Resumption Supported

> 引用: "HTTP status codes are extensible" — https://www.rfc-editor.org/rfc/rfc9110.html

## 概要

- **分類**: 1xx（Informational）
- **意味**: アップロード再開（レジューム）を支援する拡張の文脈で、サポートを示すために IANA に登録されているステータスコードです（TEMPORARY 登録）。
- **主な用途**: レジューム可能アップロードの仕組みで、サーバー機能を示すシグナルとして扱う。

## 代表的なユースケース

- 大きなアップロードを分割/再開可能にする設計で、クライアントが能力検出に利用する
- エッジ/プロキシを挟む構成でも、サポート有無をステータスコードとして明示したい

## 典型的な原因（よくある勘違い含む）

- **注意**: IANA 上で TEMPORARY（期限あり）として登録されているため、利用前に最新状況（有効期限・ドラフト/標準化段階）を確認する
- 未対応クライアントが 1xx を想定せず、最終応答として誤解する実装がある

## 関連ヘッダー / 関連ステータス

- 関連ステータス: `100 Continue`（本文送信前の合意）, `206 Partial Content`（部分取得）

## 例

```http
HTTP/1.1 104 Upload Resumption Supported

```

## 参考

- IANA HTTP Status Code Registry（104 の登録を確認）: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
- IETF Draft（Resumable Upload）: https://datatracker.ietf.org/doc/draft-ietf-httpbis-resumable-upload/
- RFC 9110（ステータスコードの拡張性）: https://www.rfc-editor.org/rfc/rfc9110.html
