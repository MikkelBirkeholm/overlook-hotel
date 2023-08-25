import React from 'react'
import setCountryIdFromName from '@/utils/setCountryIdFromName'
import setCityName from '@/utils/setCityName'
import setCountryNameFromCityId from '@/utils/setCountryNameFromCityId'
import { CityGrid } from '@/components/CityGrid/CityGrid'

async function getCountryData(id) {
  const res = await fetch(`https://api.mediehuset.net/overlook/countries/${id}`)
  const data = await res.json()
  return data
}

async function formatCardData(data) {
  const formattedData = await Promise.all(
    data.map(async (item) => {
      const [city] = await setCityName(item.id)
      const country = await setCountryNameFromCityId(item.id)
      return {
        title: item.name,
        text: item.teaser ? item.teaser : item.description,
        image: item.image,
        city: city,
        country: country,
        id: item.id,
      }
    })
  )
  return formattedData
}

export default async function LandPage({ params }) {
  const { land } = params
  const countryId = await setCountryIdFromName(land)
  const countryData = await getCountryData(countryId)
  const formattedCityData = await formatCardData(countryData.item.cities.items)

  return (
    <main>
      <section>
        <h1>{land.charAt(0).toUpperCase() + land.slice(1)}</h1>
        <p>{countryData.item.description}</p>
        <hr />
        <CityGrid
          data={formattedCityData}
          land={land}
        />
      </section>
    </main>
  )
}
