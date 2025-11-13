import ContactForm from "@/components/form/ContactForm"
// this is a server component, that nest a client component

const contact = () => {
  return (
    <main className="min-h-screen bg-neutral-700 text-white flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold">Contact</h1>
      <ContactForm/>
    </main>
  )
}

export default contact