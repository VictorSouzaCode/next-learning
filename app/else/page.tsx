import Link from "next/link"

const page = () => {
  return (
    <main className="min-h-screen bg-neutral-700 text-white flex flex-col justify-center items-center">
      <h1 className="text-8xl font-bold">Else</h1>

          <nav className="mt-8">
              <ul className="flex flex-col gap-4 text-2xl items-center justify-center">

                  <li>
                      <Link href="/else/pizza ">user 1 food type
                      </Link>
                  </li>

                  <li>
                      <Link href="/else/hotdog">user 2 food type
                      </Link>
                  </li>
                  <li>
                      <Link href="/else/hamburguer">user 3 food type
                      </Link>
                  </li>
                  <li>
                      <Link href="/else/pasta">user 4 food type
                      </Link>
                  </li>
              </ul>
          </nav>
    </main>
  )
}

export default page