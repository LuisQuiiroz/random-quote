import { useEffect, useState } from 'react'
import { getAuthor, getRandomQuote } from './utils/quote'

function App () {
  const [quote, setQuote] = useState()
  const [authorQuotes, setAuthorQuotes] = useState()
  const [author, setAuthor] = useState()

  async function getQuote () {
    try {
      const randomQuote = await getRandomQuote()
      setQuote(randomQuote)
      setAuthorQuotes()
      setAuthor('')
    } catch (error) {
      console.error('Error en la solicitud:', error)
    }
  }

  async function getAuthorQ (author) {
    try {
      const aq = await getAuthor(author)
      setAuthorQuotes(aq)
      setQuote()
    } catch (error) {
      console.error('Error en la solicitud:', error)
    }
  }

  useEffect(() => {
    getQuote()
  }, [])

  useEffect(() => {
    if (author === '') return
    getAuthorQ(author)
  }, [author])
  return (
    <>
      <header className='fixed right-3 top-3'>
        <button className='flex mr-auto items-center gap-2 p-2 cursor-pointer text-gray-2' type='button' onClick={() => getQuote()}>
          <p>random</p>
          <svg className='w-6 h-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99' />
          </svg>
        </button>
      </header>
      {
        quote && (
          <main className='container mx-auto px-5 my-40 flex items-center justify-center'>
            <div className='md:w-3/4'>
              <p className='text-black text-4xl font-medium border-l-8 border-yellow-300 pl-12 md:pl-24'>{`"${quote.quoteText}"`}</p>
              <div className='pl-20 mt-20'>
                <button
                  type='button'
                  className='flex justify-between items-center py-12 px-7 w-full group hover:bg-gray-1'
                  onClick={() => setAuthor(quote.quoteAuthor)}
                >
                  <div>
                    <h3 className='text-gray-2 group-hover:text-white text-2xl font-medium text-left'>
                      {quote.quoteAuthor}
                    </h3>
                    <p className='text-gray-3 group-hover:text-white text-sm font-medium text-left'>
                      {quote.quoteGenre}
                    </p>
                  </div>
                  <span className='text-right text-white'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </main>
        )
        }
      {
        author && authorQuotes && (
          <section className='container mx-auto my-20 md:w-3/4 px-5'>
            <h3 className='text-gray-1 text-4xl font-bold text-left'>
              {author}
            </h3>
            {
          authorQuotes.map(quote => (
            <p key={quote._id} className='text-black text-4xl font-medium border-l-8 border-yellow-300 pl-12 md:pl-24 my-16'>{`"${quote.quoteText}"`}</p>
          ))
        }
          </section>
        )
      }
      <footer className='text-sm text-center py-6'>
        created by <span className='font-bold'>Quiiroz</span> - devChallenges.io
      </footer>
    </>
  )
}

export default App
