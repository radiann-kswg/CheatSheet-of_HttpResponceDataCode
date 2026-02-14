# 511 Network Authentication Required

> 引用: "The HTTP `511 Network Authentication Required` server error response status code indicates that the client needs to authenticate to gain network access." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/511

## 概要

- **分類**: 5xx（Server Error）
- **意味**: クライアントがネットワークアクセスを得るために認証（規約同意等）を行う必要があることを示します。
- **主な用途**: いわゆるキャプティブポータル（空港/カフェWi-Fi等）。オリジンサーバーではなく、ネットワークを制御する「介在プロキシ」が返します。

## 代表的なユースケース

- 未ログイン状態でのアクセスに対し、ログインページへ誘導

## 典型的な注意点

- アプリ視点では「オリジンが返した 5xx」に見えるが、実際はネットワーク側の遮断

## 例

```http
HTTP/1.1 511 Network Authentication Required
Content-Type: text/html

<html><body>Please authenticate with the local network.</body></html>
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/511
- RFC 6585: https://www.rfc-editor.org/rfc/rfc6585.html
