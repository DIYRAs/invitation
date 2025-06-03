import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import Decorations from './decorations'

const Quote = forwardRef((props, ref) => {
    return (
        <section ref={ref} className='h-max p-8 text-black bg-fixed bg-contain bg-white'
        // style={{ backgroundImage: 'url(assets/image/bg-blue-flower-1.webp)' }}
        >
            <Decorations />

            <div className='w-full h-max p-6 rounded-lg px-2 flex flex-col items-center'>
                <div data-aos='fade-left'
                    className='bg-gray-500/10 p-3 rounded-lg text-center backdrop-blur-[1px]'
                    style={{ boxShadow: 'inset 0 0 7px black, 0 0 5px lightblue' }}>
                    <p className='text-3xl tracking-tighter font-serif'>
                        وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ  ۝٢١
                    </p>
                </div>

                <p data-aos='fade-up'
                    className='my-2 bg-gray-400/10 backdrop-blur-[2px] w-full
                 text-center gap-5 font-mono font-black tracking-widest p-3 rounded-xl 
                 flex items-center justify-center'>Ar-rum: 21</p>

                <div data-aos='fade-right'
                    className='bg-gray-500/10 p-3 rounded-lg text-center backdrop-blur-[1px]'
                    style={{ boxShadow: 'inset 0 0 7px black, 0 0 5px lightblue' }}>
                    <p className='italic font-mono tracking-wide'>"Dan di antara tanda-tanda kekuasaan-Nya adalah Dia menciptakan
                        untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya."</p>
                </div>
            </div>

        </section>
    )
})

export default Quote