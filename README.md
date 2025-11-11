This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# 🚀 Next.js 16 + TypeScript + Tailwind Starter

這是一個簡潔的 React / Next.js 16 專案模板，內建 TypeScript、Tailwind CSS、ESLint 與 App Router。  
可作為任何新專案的快速起點。

---

## 🧰 1️⃣ 前置需求

請先安裝 **Node.js（建議 LTS 版）**

👉 [https://nodejs.org/en](https://nodejs.org/en)

安裝完成後確認版本：

```powershell
node -v
npm -v


⚙️ 2️⃣ 建立新專案

在你想放專案的資料夾中執行：
npx create-next-app@latest my-next-app

當出現提示時，選擇：

√ Would you like to use the recommended Next.js defaults? » Yes, use recommended defaults

🚀 3️⃣ 啟動開發伺服器
cd my-next-app
npm run dev

若要更改 port，可執行：

npm run dev -- -p 3001

🧩 4️⃣ 專案結構說明
my-next-app/
├─ app/
│  ├─ layout.tsx        # 全域頁面框架
│  ├─ page.tsx          # 首頁
│  ├─ globals.css       # 全域樣式 (含 Tailwind)
│  └─ api/
│     └─ hello/
│        └─ route.ts    # 範例 API (GET)
├─ public/
│  └─ favicon.ico
├─ tailwind.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
├─ eslint.config.mjs
├─ next.config.ts
└─ package.json

🧠 5️⃣ 常用指令
指令	功能
npm run dev	啟動開發伺服器
npm run build	建立正式版 (Production Build)
npm start	啟動正式伺服器
npm run lint	檢查程式碼風格
npx prettier --write .	格式化整個專案

🧩 6️⃣ 範例修改

修改 app/page.tsx：

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600">
        🚀 Hello, Next.js + Tailwind!
      </h1>
      <p className="mt-4 text-gray-600">這是你的第一個頁面。</p>
    </main>
  );
}

🧭 8️⃣ 開啟專案 (從終端機)

在 PowerShell / CMD / 終端機中執行：

code -r .


或若在父層資料夾中：

code -r .\my-next-app

🧱 一、初始化 Git 專案

先進入專案資料夾：

cd D:\work\Projects\my-next-app

初始化 Git：

git init

🧾 二、建立 .gitignore

Next.js 專案不該上傳 node_modules、暫存檔、輸出資料夾等。
請在專案根目錄建立 .gitignore 檔案（或覆蓋原本的），內容如下：

# Node / Next.js / TypeScript 標準忽略設定

# dependencies
node_modules/

# build output
.next/
out/

# environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# editor settings
.vscode/
.idea/
.DS_Store

# misc
dist/
coverage/

🧩 三、建立第一次提交
git add .
git commit -m "Initial Next.js 16 + TypeScript + Tailwind setup"

🌐 四、在 GitHub 上建立一個新 Repository

1️⃣ 前往 https://github.com

2️⃣ 登入後點選右上角的 「New repository」
3️⃣ 填寫：

Repository name：my-next-app

Visibility：Public 或 Private 都可以

不用勾「Add a README」或「Add .gitignore」（因為你已經有）

按下「Create repository」。

🔗 五、連結本地端與 GitHub

建立完 repo 之後，GitHub 頁面會顯示一段指令，例如：

git remote add origin https://github.com/bluetyp1014/my-next-app.git
git branch -M main
git push -u origin main

✅ 六、完成！

你會看到訊息：

Enumerating objects: ...
Counting objects: ...
Compressing objects: ...
Writing objects: ...
To https://github.com/yourname/my-next-app.git
 * [new branch]      main -> main

 🌈 七、之後在其他電腦使用時

要重新使用這個專案，只要：

git clone https://github.com/yourname/my-next-app.git
cd my-next-app
npm install
npm run dev
