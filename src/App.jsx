import React from 'react'
import Cover from './components/cover/Cover'
import Quote from './components/quote/Quote'
import Couple from './components/couple/Couple'
import Event from './components/event/Event'
import Gallery from './components/gallery/Gallery'
import Rsvp from './components/rsvp/Rsvp'
import Thanks from './components/closing/Thanks'

const App = () => {
  return (
    <>
      <div className='w-screen h-full bg-amber-200 flex items-center justify-end'>
        <div className='flex flex-col justify-center items-center w-full max-w-[450px]'>
          <Cover />
          <Quote />
          <Couple />
          <Event />
          <Gallery />
          <Rsvp />
          <Thanks />
        </div>
      </div>
    </>
  )
}

export default App