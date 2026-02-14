# 506 Variant Also Negotiates

> 引用: "The HTTP `506 Variant Also Negotiates` server error response status code is returned during content negotiation when there is recursive loop in the process of selecting a resource." — https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/506

## 概要

- **分類**: 5xx（Server Error）
- **意味**: コンテンツネゴシエーション（特に agent-driven/transparent negotiation）で、バリアント選択が再帰ループになっていることを示します。
- **主な用途**: サーバー設定ミス（typemap/Alternates 等）の検出。

## 代表的な原因

- バリアントの参照が循環している（variant がさらに negotiable になっているなど）

## 関連

- [300 Multiple Choices](../3xx-redirection/300-multiple-choices.md) や Vary/Accept-\* 系のネゴシエーション周りと関係

## 例

```http
HTTP/1.1 506 Variant Also Negotiates
Content-Type: text/plain

Variant negotiation loop detected.
```

## 参考

- MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/506
- RFC 2295: https://www.rfc-editor.org/rfc/rfc2295.html
- MDN（Content negotiation）: https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Content_negotiation
