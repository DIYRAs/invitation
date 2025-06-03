import React from 'react'
import Opening from './opening'

const Couple = () => {
    return (
        <section className='h-max pb-42 pt-24 text-white bg-fixed bg-bottom bg-contain'
            style={{ backgroundImage: 'url(assets/image/bg-sakura-2.jpg)' }}>

            <Opening />

            <div className='w-full bg-black/10 pb-28 pt-6 backdrop-blur-[3px]'>
                <div className='h-40 text-center w-40 self-start grid place-items-center ml-10 rounded-full relative'>
                    <img className='h-full w-full ring-2 ring-black rounded-full object-cover object-center'
                        src="assets/image/couple.jpg" alt="the groom" />

                    <div className='absolute -bottom-24 left-0 w-max max-w-56 flex flex-col text-start ml-3'>
                        <p className='font-semibold text-xl'>Diyrama Diyra</p>
                        <p>Putra ke-tiga dari keluarga <br />
                            Bapak Lorem & Ibu Ipsum
                        </p>
                    </div>

                    <p className='absolute text-start top-0 -right-26 tracking-tighter opacity-60 font-bold text-2xl'
                        style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}>
                        THE <span className='text-4xl'>GROOM</span></p>
                    <img className='absolute transition scale-[1.3] object-center object-cover'
                        style={{ filter: 'drop-shadow(0 0 1px black)' }}
                        src="assets/image/ring-flower-1.png" alt="flower-ring" />
                </div>
            </div>

            {/* BRIDGE */}
            <div className='h-40 mt-46 text-center w-40 self-end
             grid place-items-center mr-10 bg-red-300 rounded-full relative'>
                <img className='h-full w-full ring-2 ring-black rounded-full object-cover object-center'
                    src="assets/image/couple.jpg" alt="the groom" />

                <div className='absolute -bottom-24 right-0 w-max max-w-56 flex flex-col text-end mr-3'>
                    <p className='font-semibold text-xl'>Ramadiy Diyraya</p>
                    <p>Putra ke-tiga dari keluarga <br />
                        Bapak Lorem & Ibu Ipsum
                    </p>
                </div>

                <p className='absolute text-start top-0 -left-26 tracking-tighter opacity-60 font-bold text-2xl'
                    style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
                    THE <span className='text-4xl'>BRIDGE</span>
                </p>
                <img className='absolute transition scale-[1.3] object-center object-cover'
                    style={{ filter: 'drop-shadow(0 0 1px black)' }}
                    src="assets/image/ring-flower-1.png" alt="flower-ring" />
            </div>
        </section>
    )
}

export default Couple