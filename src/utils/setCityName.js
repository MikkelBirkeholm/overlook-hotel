export default async function setCityName(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/cities/${id}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error('error from api', error)
    return error
  }
}
