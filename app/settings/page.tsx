'use client'
import Navbar from "@/components/navbar/Navbar"


const Settings = () => {
  return (
    <main className="min-h-screen bg-neutral-700 text-white flex flex-col justify-center items-center gap-4">
        <Navbar/>
        <h1 className="text-8xl">Settings</h1>

          <section className="flex flex-col gap-4">
              <h2 className="text-4xl">Change Colors</h2>

              <button className="text-2xl border rounded-2xl">Background</button>
              <button className="text-2xl border rounded-2xl">Navbar</button>
              <button className="text-2xl border rounded-2xl">Text</button>
          </section>
    </main>
  )
}

export default Settings