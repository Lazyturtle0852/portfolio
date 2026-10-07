# lazyta-toru.net

たーとるのポートフォリオサイト。[Astro](https://astro.build) + Tailwind CSS v4 で作っています。
`main` に push すると GitHub Actions でビルドされ、サーバーへ rsync でデプロイされます。

## 開発

Node.js 22.12 以上が必要です。

```sh
npm install
npm run dev      # http://localhost:4321
npm run lint     # astro check（型チェック）
npm run build    # dist/ に出力
npm run preview  # ビルド結果をローカルで確認
```

## コンテンツの更新

| 内容 | 場所 |
| --- | --- |
| News | `src/content/news/*.md`（1件1ファイル） |
| Projects | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Journey | `src/data/timeline.ts` |
| 画像 | `src/assets/images/`（ビルド時に WebP へ最適化） |

News を追加するときは、`src/content/news/` に次のような Markdown を置きます。
必須項目が欠けているとビルドがエラーになります。

```md
---
date: 2026-10-07
title: タイトル
link: https://example.com           # 省略可
image: ../../assets/images/xxx.png  # 省略可
---

本文
```
