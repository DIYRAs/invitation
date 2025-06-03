import { useRef } from 'react'
import Enter_sway from '../../animations/enter_sway'
import Decoration from './decoration'

const Rsvp = () => {
    const trigger = useRef(null)
    const trigger2 = useRef(null)

    return (
        <section className='h-screen bg-fixed pt-12 bg-top-right bg-white'>
            <Enter_sway
                img={'assets/image/brown-flower-1.png'}
                className={'absolute w-6/12 -top-88 -left-60 origin-bottom-right'}
                initialRotate={'180deg'}
                rotate={['180deg', '190deg', '180deg']}
                triggerRef={trigger} />
            <Enter_sway
                img={'assets/image/brown-flower-2.png'}
                className={'absolute w-12/12 -bottom-5 -right-55 origin-bottom'}
                initialRotate={'-35deg'}
                rotate={['-35deg', '-45deg','-35deg']}
                triggerRef={trigger2} />

            <fieldset data-aos='fade-down'
             ref={trigger} className="fieldset bg-white/30 backdrop-blur-[5px] text-black space-y-8 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-black text-2xl font-bold">RSVP</legend>

                <div>
                    <label className="label text-sm font-mono text-black">Nama</label>
                    <input type="text" className="input bg-slate-900 text-white" placeholder="Nama" />
                </div>

                <div>
                    <label className="label text-sm font-mono text-black">Jumlah Tamu</label>
                    <input type="number" className="input bg-slate-900 text-white" placeholder="Jumlah Tamu" />
                </div>

                <div>
                    <label className="label text-sm font-mono text-black">Kehadiran</label>
                    <select defaultValue="Pick a language" className="select bg-slate-900 text-white">
                        <option disabled={true}>Kehadiran</option>
                        <option>Hadir</option>
                        <option>Tidak Hadir</option>
                    </select>
                </div>

                <button ref={trigger2} className="btn btn-outline mt-4"
                    style={{ boxShadow: 'inset 0 0 5px black' }}>Konfirmasi</button>
            </fieldset>
        </section>
    )
}

export default Rsvp