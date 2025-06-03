import React from 'react'
import Opening from './opening'
import Decorations from './decorations'
import Enter_sway from '../../animations/enter_sway'

const Couple = () => {
    return (
        <section className='h-max pb-12 pt-24 text-white bg-fixed bg-bottom bg-contain'
            style={{ backgroundImage: 'url(assets/image/bg-sakura-1.jpg)' }}>

            <Opening />

            <div className='w-full bg-black/30 pb-28 pt-6 backdrop-blur-[3px]'>
                <div className='h-40 text-center w-40 self-start grid place-items-center ml-10 rounded-full relative'>
                    <img data-aos='fade-up-right'
                        className='h-full w-full ring-2 ring-black rounded-full object-cover object-center'
                        src="assets/image/couple.jpg" alt="the groom" />

                    <div data-aos='fade-up'
                        className='absolute -bottom-24 left-0 w-max max-w-56 flex flex-col text-start ml-3'>
                        <p className='font-semibold text-xl'>Diyrama Diyra</p>
                        <p>Putra ke-tiga dari keluarga <br />
                            Bapak Lorem & Ibu Ipsum
                        </p>
                    </div>

                    <Decorations who={'GROOM'} />
                    <Enter_sway
                        img={'assets/image/ring-flower-2.png'}
                        className={'absolute transition -top-2 scale-[1.3] object-center object-cover'}
                        initialRotate={'270deg'}
                        rotate={['270deg', '280deg', '270deg']} />
                </div>
            </div>

            {/* BRIDGE */}
            <div className='w-full bg-black/30 pb-34 pt-6 backdrop-blur-[3px] flex items-end justify-end mt-10'>
                <div className='h-40 text-center w-40 self-end
             grid place-items-center mr-10 rounded-full relative'>
                    <img data-aos='fade-up-left'
                        className='h-full w-full ring-2 ring-black rounded-full object-cover object-center'
                        src="assets/image/couple.jpg" alt="the groom" />

                    <div data-aos='fade-up'
                        className='absolute -bottom-24 right-0 w-max max-w-56 flex flex-col text-end mr-3'>
                        <p className='font-semibold text-xl'>Ramadiy Diyraya</p>
                        <p>Putra ke-tiga dari keluarga <br />
                            Bapak Lorem & Ibu Ipsum
                        </p>
                    </div>

                    <Decorations who={'BRIDGE'} />
                    <Enter_sway
                        img={'assets/image/ring-flower-2.png'}
                        className={'absolute transition -top-3 scale-[1.3] object-center object-cover'}
                        initialRotate={'-360deg'}
                        rotate={['0', '10deg', '0']} />
                </div>
            </div>
        </section>
    )
}

export default Couple