import { useRef } from 'react'
import Event_components from './event_components'
import Countdown from './countdown'
import Decorations from './decorations'

const Event = () => {
    const trigger = useRef(null)

    return (
        <section ref={trigger} className='h-max pt-16 px-12 text-black bg-fixed bg-center bg-white'
        // style={{ backgroundImage: 'url(assets/image/bg-orange-flower.jpg)' }}
        >
            <Decorations ref={trigger} />
            <Event_components
                title={'Akad'}
                date={'Rabu, 01 10 2025'}
                time={'Pukul: 08.00 WITA s.d. Selesai'}
                loc={'Rumah rumahan'}
                addr={'Jln. rumah hamur rumahan Pt.123admin#'} />

            <Countdown />
            <Event_components
                title={'Resepsi'}
                date={'Rabu, 01 10 2025'}
                time={'Pukul: 10.00 WITA s.d. Selesai'}
                loc={'Rumah rumahan'}
                addr={'Jln. rumah hamur rumahan Pt.123admin#'} />

            <div
                className='mt-16 flex flex-col items-center justify-center pb-16 bg-white w-screen'>
                <button data-aos='fade-left'
                    className='btn btn-soft bg-white text-black hover:bg-slate-950 hover:text-white w-full py-6'>
                    Lihat Lokasi
                </button>
                <iframe data-aos='flip-down'
                    className='mask'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.2196474108796!2d114.58741067437654!3d-3.2957119411229057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de4211bbc1be42d%3A0xd93490f4e3d79a8e!2sSMK%20Negeri%202%20Banjarmasin!5e0!3m2!1sid!2sid!4v1748870603610!5m2!1sid!2sid"
                    width='450'
                    height="250"
                    style={{ border: 0, boxShadow: '0 0 8px black' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

            </div>
        </section>
    )
}

export default Event