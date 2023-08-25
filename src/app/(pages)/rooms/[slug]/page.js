import { TitleBanner } from '@/components/TitleBanner/TitleBanner'
export async function generateStaticParams() {
  const rooms = await fetch('http://localhost:3000/api/rooms/get-all').then(
    (res) => res.json()
  )

  return rooms.map((room) => ({
    slug: room.slug,
  }))
}

async function getRoom(slug) {
  const res = await fetch(`http://localhost:3000/api/rooms/get-room/${slug}`)
  const data = await res.json()
  return data
}

export default async function Page({ params }) {
  const { slug } = params
  const room = await getRoom(slug)
  console.log(room)
  return (
    <main>
      <section>Rooms</section>
    </main>
  )
}
