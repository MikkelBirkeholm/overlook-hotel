export default async function setHotelIdFromSlug(slug) {
  try {
    const res = await fetch('http://localhost:3000/api/destinationer/hoteller')
    const data = await res.json()
    const hotelId = data.find((hotel) => hotel.slug === slug)
    return hotelId.id
  } catch (error) {
    console.error(error)
    return error
  }
}
