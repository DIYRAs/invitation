import React from 'react'
import Decorations from './decorations'

const Quote = () => {
    return (
        <section className='h-max p-8 text-gray-100 bg-fixed'
            style={{ backgroundImage: 'url(assets/image/bg-blue-flower-1.jpg)' }}>
            <Decorations />

            <div className='w-full h-max p-6 backdrop-blur-xs px-2 bg-black/20 flex flex-col items-center'>
                <div className='bg-gray-500/10 p-3 rounded-lg text-center backdrop-blur-[1px]'
                    style={{ boxShadow: 'inset 0 0 7px black, 0 0 5px lightblue' }}>
                    <p className='text-3xl tracking-tighter font-serif'>
                        وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ  ۝٢١
                    </p>
                </div>

                <p className='my-2 bg-gray-400/10 backdrop-blur-[2px] w-full
                 text-center gap-5 font-mono font-black tracking-widest p-3 rounded-xl 
                 flex items-center justify-center'> <hr className='w-10' /> Ar-Rum : 21 <hr className='w-10' /></p>

                <div className='bg-gray-500/10 p-3 rounded-lg text-center backdrop-blur-[1px]'
                    style={{ boxShadow: 'inset 0 0 7px black, 0 0 5px lightblue' }}>
                    <p className='italic font-mono tracking-wide'>"Dan di antara tanda-tanda kekuasaan-Nya adalah Dia menciptakan
                        untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya."</p>
                </div>
            </div>

        </section>
    )
}

export default Quote