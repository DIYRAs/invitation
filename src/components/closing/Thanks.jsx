import React from 'react'
import Decorations from './decorations'

const Thanks = () => {
    return (
        <section className='h-max text-black bg-fixed py-32 px-8 text-center bg-bottom'
        style={{backgroundImage: 'url(assets/image/bg-blue-flower-2.webp)'}} >

            <p className='thanks text-7xl mb-6'>Thank You</p>

            <p className='text-md'>Merupakan suatu kebahagian dan kehormatan bagi kami, apabila
                Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu
                kepada kedua mempelai.
            </p>

            <p className='text-xl mt-4 italic'>Hormat Kami Yang Berbahagia</p>

            <p className='thanks bg-white/50 p-4 text-5xl mt-4 font-bold tracking-wider'>Diyra & Diyraya</p>
        </section>
    )
}

export default Thanks