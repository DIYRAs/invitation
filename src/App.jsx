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
  const [isPlay, setIsPlay] = useState(false)
  const openRef = useRef(null)
  const audioRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        openRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [isOpen])

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true
      })
    }
  }, [isOpen])

  const audioPlay = () => {
    setIsPlay(prev => !prev)
  }

  useEffect(() => {
    isPlay ? audioRef.current?.play() : audioRef.current?.pause()
  }, [isPlay])


  return (
    <>
      <div className='w-screen h-full bg-white/80 flex items-center justify-center'>
        <div className='flex flex-col justify-center items-center w-full max-w-[450px]'>
          <Cover isOpen={isOpen} setPlay={setIsPlay} setOpen={setIsOpen} />
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

        {isOpen &&
          <label className="swap fixed top-5 right-118 z-[1999] text-black">
            {/* this hidden checkbox controls the state */}
            <input onClick={audioPlay} type="checkbox" />

            {/* volume on icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24">
              <path
                d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
            </svg>

            {/* volume off icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24">
              <path
                d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
            </svg>
          </label>}
      </div>

      <audio ref={audioRef} src="assets/audio/bgm.mp3"></audio>
    </>
  )
}

export default App