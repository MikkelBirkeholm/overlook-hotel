export default async function setCountryIdFromName(name) {
  try {
    const res = await fetch('http://localhost:3000/api/destinationer/lande')
    const data = await res.json()
    const countryId = data.find((country) => country.slug === name)
    return countryId.id
  } catch (error) {
    console.error(error)
    return error
  }
}
