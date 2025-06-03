import { useState, useRef, useEffect } from 'react'
import Cover from './components/cover/Cover'
import Quote from './components/quote/Quote'
import Couple from './components/couple/Couple'
import Event from './components/event/Event'
import Gallery from './components/gallery/Gallery'
import Rsvp from './components/rsvp/Rsvp'
import Thanks from './components/closing/Thanks'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        openRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [isOpen])

  useEffect(() => {
    // pastikan AOS sudah tersedia dari CDN
    if (window.AOS) {
      window.AOS.init({
        duration: 1000, // durasi animasi
      })
    }
  }, [])


  return (
    <>
      <div className='w-screen h-full bg-amber-200 flex items-center justify-center'>
        <div className='flex flex-col justify-center items-center w-full max-w-[450px]'>
          <Cover isOpen={isOpen} setOpen={setIsOpen} />
          {isOpen ? (
            <>
              <div ref={openRef}>
                <Quote />
              </div>
              <Couple />
              <Event />
              <Gallery />
              <Rsvp />
              <Thanks />
            </>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default App