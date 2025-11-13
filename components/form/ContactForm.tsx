// this is a client component, i needs to be one because of interativity
'use client'
import { useState } from "react"

const ContactForm = () => {
    type FormType = {
        name: string,
        email: string
    }

    const [ formData, setFormData ] = useState<FormType>({
        name: "",
        email: ""
    })

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        console.log({...formData})
        setFormData({ name: "", email: ""})
    }

  return (
    <form 
    onSubmit={(e) => {
        handleSubmit(e)
    }}
    className="mt-8 flex flex-col justify-center items-center gap-4">
        <input 
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        className="bg-white rounded-2xl h-8 text-black p-4"
        placeholder="Name"/>
        <input 
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        className="bg-white rounded-2xl h-8 text-black p-4"
        placeholder="Email"/>
        
        <button 
        type="submit"
        className="bg-blue-500 font-medium text-2xl w-20 rounded-2xl cursor-pointer"
        >Send</button>
    </form>
  )
}

export default ContactForm