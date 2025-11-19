import Link from "next/link";

// These hooks are the client-side navigation tools of the App Router (Next.js 13+). They replace the old next/router.

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-700 text-white flex flex-col gap-8 justify-center items-center">
      <h1 className="text-4xl font-bold">Hi! This is my App</h1>

      <Link href="/auth">
      <button className="border rounded-2xl p-4 font-bold text-2xl cursor-pointer">Go To Login</button>
      </Link>
    </main>
  );
}
