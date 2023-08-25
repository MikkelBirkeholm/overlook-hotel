export default async function setCountryNameFromCityId(id) {
  try {
    const res = await fetch(`https://api.mediehuset.net/overlook/cities/${id}`)
    const data = await res.json()
    return data.item.country_name
  } catch (error) {
    console.error(error)
    return error
  }
}
