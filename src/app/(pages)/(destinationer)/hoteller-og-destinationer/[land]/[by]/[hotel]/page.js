import { RoomGrid } from '@/components/RoomGrid/RoomGrid'
import styles from '@/styles/sidebar.module.scss'
import setHotelIdFromSlug from '@/utils/setHotelIdFromSlug'

async function getHotelData(id) {
  const res = await fetch(`https://api.mediehuset.net/overlook/hotels/${id}`)
  const data = await res.json()
  return data
}

export default async function Page({ params }) {
  const { land, by, hotel } = params
  const hotelId = await setHotelIdFromSlug(hotel)
  const hotelData = await getHotelData(hotelId)

  const bookingData = {
    hotel_id: hotelId,
    hotel_name: hotelData.item.title,
    hotel_city: hotelData.item.city_name,
    hotel_country: land.charAt(0).toUpperCase() + land.slice(1),
    hotel_room: '',
  }

  return (
    <main>
      <section className={styles.sidebarLayout}>
        <div>
          <h1>{hotelData.item.title}</h1>
          <p>{hotelData.item.teaser}</p>
          <RoomGrid
            data={hotelData.item.rooms.items}
            bookingData={bookingData}
          />
        </div>
        <div className={styles.sidebar}>
          <h2>Information</h2>
          <ul>
            <li>
              <span>
                {hotelData.item.address}, {hotelData.item.city_name}
              </span>
            </li>
            <li>
              <span>{hotelData.item.phone}</span>
            </li>
          </ul>
          <h2>Faciliteter</h2>
          <ul>
            {hotelData.item.facilities.map((item, i) => {
              return <li key={i}>{item.title}</li>
            })}
          </ul>
        </div>
      </section>
    </main>
  )
}
