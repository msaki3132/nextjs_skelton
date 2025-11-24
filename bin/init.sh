#!/bin/sh

# 1. プロジェクト作成（src/付き）
npx create-next-app@latest nextjs_skelton -- --ts --eslint --tailwind --src-dir --app

cd my-app

# 2. shadcn/ui 初期化
npx shadcn-ui@latest init

# 3. 必要なコンポーネント一括追加
npx shadcn@latest add button card badge separator

# 4. ユーティリティ
npm install clsx tailwind-merge

# 5. 起動
npm run dev