export async function getRandomQuote () {
  try {
    const response = await fetch('https://quote-garden.onrender.com/api/v3/quotes/random')
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa')
    }
    const data = await response.json()
    return data.data[0]
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export async function getAuthor (author) {
  try {
    const response = await fetch(`https://quote-garden.onrender.com/api/v3/quotes?author=${author}`)
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa')
    }
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('Error', error)
  }
}
