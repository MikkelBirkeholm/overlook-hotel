import { CardGrid } from '@/components/CardGrid/CardGrid'
import { TitleBanner } from '@/components/TitleBanner/TitleBanner'
import setImageURL from '@/utils/setImageUrl'
import { supabase } from '@/utils/supabaseClient'

async function getNews() {
  const res = await fetch('http://localhost:3000/api/news/get-all')
  const data = await res.json()
  return data
}

async function getRooms() {
  const res = await fetch('http://localhost:3000/api/rooms/get-all')
  const data = await res.json()
  const dataWithImages = await addImageData(data)
  return dataWithImages
}

async function addImageData(data) {
  const dataWithImages = await Promise.all(
    await data.map(async (item) => {
      let { data: room_image_rel, error } = await supabase
        .from('room_image_rel')
        .select('image_id')
        .match({ room_id: item.id, order_num: 1 })
      if (error) return error

      return {
        ...item,
        image_id: room_image_rel[0].image_id,
      }
    })
  )

  return dataWithImages
}

const roomsData = await getRooms()
const roomsCardData = [roomsData[0], roomsData[1], roomsData[2]]

const newsData = await getNews()
const newsCardData = [newsData[0], newsData[1], newsData[2]]

async function formatCardData(data) {
  const formattedData = await Promise.all(
    data.map(async (item) => {
      return {
        title: item.title,
        text: item.teaser ? item.teaser : item.description,
        image: await setImageURL(item.image_id),
        slug: item.slug,
        id: item.id,
      }
    })
  )
  return formattedData
}
const formattedRoomsCardData = await formatCardData(roomsCardData)
const formattedNewsCardData = await formatCardData(newsCardData)

export default async function Home() {
  return (
    <main>
      <TitleBanner
        heading="Velkommen til Overlook Hotel Online"
        src={2}
      />
      <section>
        <CardGrid
          heading="Sidste nyt"
          data={formattedNewsCardData}
          type="blog"
        />
        {formattedRoomsCardData && (
          <CardGrid
            heading="Se vores udvalg af værelser"
            data={formattedRoomsCardData}
            type="rooms"
          />
        )}
      </section>
    </main>
  )
}
