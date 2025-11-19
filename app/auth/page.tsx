import ContactForm from "@/components/form/ContactForm"
import Link from "next/link"

const Login = () => {

  return (
    <main className="min-h-screen bg-neutral-700 text-white flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold">Login</h1>
      <ContactForm/>
      <Link href={"/"}>
      <button className="mt-4 border rounded-2xl p-1 cursor-pointer">Back</button>
      </Link>
    </main>
  )
}

export default Login