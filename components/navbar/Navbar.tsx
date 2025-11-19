import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-20 w-full flex justify-around absolute top-0 text-2xl items-center border-b-2">
        <Link href={"/home"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/settings"}>Settings</Link>
    </nav>
  )
}

export default Navbar