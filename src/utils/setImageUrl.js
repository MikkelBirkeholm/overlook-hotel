export default async function setImageURL(id) {
  try {
    const res = await fetch('http://localhost:3000/api/get-images')
    const data = await res.json()
    const imgURL = data.find((image) => image.id === id)
    return imgURL.filename
  } catch (error) {
    console.error(error)
    return error
  }
}
