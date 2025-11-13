// Goal: Understand what runs on the client vs server and why it matters.
// Difference between Server Components and Client Components

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-700 text-white flex justify-center items-center">
      <h1 className="text-8xl font-bold">Home Page</h1>
    </main>
  );
}

/*
Use Client Components for: forms, animations, real-time updates, anything with useState/useEffect

Use Server Components for: data fetching, static content, SEO-sensitive content
*/
