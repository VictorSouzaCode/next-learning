import Link from "next/link"

const NavBar = () => {
  return (
    <header className="border border-amber-300 absolute top-0 w-full h-16">
      <nav className="h-full">
      <ul className="text-2xl flex justify-around h-full items-center text-white font-medium">
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/else"}>Else</Link>
        </li>
      </ul>
      </nav>
    </header>
  )
}

export default NavBar