import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600">
        🚀 Hello, Next.js + Tailwind!
      </h1>
      <p className="mt-4 text-gray-600">你的開發環境已成功啟動。</p>

      <Link href="/member">member</Link>
    </main>
  );
}
