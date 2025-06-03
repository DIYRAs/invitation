import React from 'react'
import Decorations from './decorations'

const Cover = () => {
    return (
        <>
            <section style={{ backgroundImage: 'url(assets/image/bg-white-flower-1.jpg)' }}
                className='h-screen text-black justify-center py-18 px-12'>

                <Decorations />
                <h1 className='text-xl text-center'>WEDDING INVITATION</h1>

                <div style={{ boxShadow: 'inset 0 0 7px black' }}
                    className='mt-28 bg-white/10 p-4 leading-tight rounded-2xl backdrop-blur-xs'>
                    <p className='text-3xl font-semibold italic'>Diyra & <br /> Diyraya</p>
                    <p className='ml-2 mt-1'>- Kamis, 19 09 1999</p>
                    <div className='text-start'>
                        <p className='mt-7 mb-2'>Yth. Bapak/Ibu/Saudara/i <br /> <span className='font-semibold'>Tamu Undangan</span>
                        </p>
                        <p>Dengan hormat, kami mengundang Anda ke pernikahan kami</p>
                    </div>
                </div>

                <button className='btn font-semibold btn-outline 
                z-10 mt-5 rounded-md hover:text-white focus:text-white'>
                    OPEN INVITATION
                </button>
            </section>
        </>
    )
}

export default Cover