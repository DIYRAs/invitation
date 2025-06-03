import Decorations from './decorations'
import { useRef } from 'react'
import Enter_once from '../../animations/enter_once'

const Cover = ({ isOpen, setOpen, setPlay }) => {
    const triggerRef = useRef(null)

    const openInvitation = () => {
        setOpen(prev => !prev)
        setPlay(prev => !prev)
    }

    return (
        <>
            <section style={{ backgroundImage: 'url(assets/image/bg-white-flower-1.webp)' }}
                className='h-screen relative text-black justify-center py-18 px-12'>

                <Decorations ref={triggerRef} />
                <h1 data-aos='fade-down' className='text-xl text-center'>WEDDING INVITATION</h1>

                <Enter_once>
                    <div ref={triggerRef} style={{ boxShadow: 'inset 0 0 7px black' }}
                        className='mt-36 bg-white/10 p-4 leading-tight rounded-2xl backdrop-blur-xs'>
                        <p className='thanks text-4xl font-semibold italic'>Diyra & <br /> Diyraya</p>
                        <p className='ml-2 mt-1'>- Kamis, 19 09 1999</p>
                        <div className='text-start'>
                            <p className='mt-7 mb-2'>Yth. Bapak/Ibu/Saudara/i <br /> <span className='font-semibold'>Tamu Undangan</span>
                            </p>
                            <p>Dengan hormat, kami mengundang Anda ke pernikahan kami</p>
                        </div>
                    </div>
                </Enter_once>

                <button data-aos='fade-up' data-aos-delay='700' onClick={openInvitation}
                    className='btn font-semibold btn-outline static
                z-10 mt-5 rounded-md hover:text-white'>
                    {isOpen ? 'CLOSE' : 'OPEN'} INVITATION
                </button>

            </section>
        </>
    )
}

export default Cover