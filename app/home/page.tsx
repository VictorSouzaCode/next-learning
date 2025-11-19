'use client'
import { getLoggedUser } from "../lib/authPlaceholder"
import { redirect } from "next/navigation"
import Navbar from "@/components/navbar/Navbar"

const HomePage = () => {
    const user = getLoggedUser()

    if (!user) {
        redirect("/auth")
    }

  return (
    <main className="min-h-screen bg-neutral-700 text-white flex flex-col justify-center items-center gap-4">
      <Navbar/>
        <h1 className="text-6xl font-bold">Home Page</h1>
        <h2 className="text-3xl font-medium">Welcome my dude</h2>
    </main>
  )
}

export default HomePage