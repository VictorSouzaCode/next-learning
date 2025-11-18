// this is a client component, i needs to be one because of interativity
'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { fakeLogin } from "@/app/lib/authPlaceholder"

// The login page is working, thank good
// Now i need implent the other routes functionalities in my components

const ContactForm = () => {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault()

        const ok = fakeLogin(email, password)

        if (!ok) {
            alert("Invalid credentials");
            return;
        }

        router.push('/about')
    }

  return (
    <form 
    onSubmit={(e) => {
        handleSubmit(e)
    }}
    className="mt-8 flex flex-col justify-center items-center gap-4">

        <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white rounded-2xl h-8 text-black p-4"
        placeholder="Email"/>
        
        <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-white rounded-2xl h-8 text-black p-4"
        placeholder="Password"/>
        
        <button 
        type="submit"
        className="bg-blue-500 font-medium text-2xl w-20 rounded-2xl cursor-pointer"
        >Send</button>
    </form>
  )
}

export default ContactForm