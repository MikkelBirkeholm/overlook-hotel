import { HotelGrid } from '@/components/HotelGrid/HotelGrid'

import setImageURL from '@/utils/setImageUrl'
import setCityName from '@/utils/setCityName'
import setCountryNameFromCityId from '@/utils/setCountryNameFromCityId'

import React from 'react'

async function getHotels() {
  const res = await fetch('http://localhost:3000/api/destinationer/hoteller')
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

const hotelData = await getHotels()
const formattedHotelData = await formatCardData(hotelData)

export default function Page({ params }) {
  const { land } = params
  return (
    <main>
      <section>
        <HotelGrid
          heading="Vores hoteller"
          data={formattedHotelData}
          type="hotel"
          land={land}
        />
      </section>
    </main>
  )
}
