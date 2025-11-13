
const foodType = async ({params} : { params: Promise<{id: string}>}) => {
    const { id } = await params;

  return (
    <main className="min-h-screen bg-neutral-700 text-white flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold">I Like {id} very much</h1>
    </main>
  )
}

export default foodType