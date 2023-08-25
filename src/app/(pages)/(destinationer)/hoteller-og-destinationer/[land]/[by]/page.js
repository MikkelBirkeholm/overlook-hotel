import { HotelGrid } from '@/components/HotelGrid/HotelGrid'
import setImageURL from '@/utils/setImageUrl'
import setCityName from '@/utils/setCityName'
import setCountryNameFromCityId from '@/utils/setCountryNameFromCityId'

async function getCityInfo(id) {
  const res = await fetch(`http://localhost:3000/api/destinationer/byer/${id}`)
  const data = await res.json()
  return data
}

async function formatCardData(data) {
  const formattedData = await Promise.all(
    data.map(async (item) => {
      return {
        title: item.title,
        text: item.teaser ? item.teaser : item.description,
        image: await setImageURL(item.image_id),
        city: await setCityName(item.city_id),
        country: await setCountryNameFromCityId(item.city_id),
        address: item.address,
        rating: item.num_stars,
        slug: item.slug,
        id: item.id,
      }
    })
  )
  return formattedData
}

export default async function Page({ params }) {
  const { by, land } = params
  const cityInfo = await getCityInfo(by)
  const cityInfoPage = await setCityName(cityInfo[0].id)
  const formattedHotelData = await formatCardData(cityInfo[0].hotels)

  return (
    <main>
      <section>
        <h1>{cityInfoPage[0].name}</h1>
        <p>{cityInfoPage[0].description}</p>

        <hr />
        <HotelGrid
          heading={`Vores hoteller i ${cityInfoPage[0].name}`}
          data={formattedHotelData}
          type="hotel"
          land={land}
        />
      </section>
    </main>
  )
}
