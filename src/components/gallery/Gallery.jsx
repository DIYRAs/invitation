import React from 'react'
import Slide_gallery from './slide_gallery';

const Gallery = () => {

    const imgs = [
        'assets/image/couple.jpg',
        'assets/image/couple-2.jpg',
        'assets/image/couple-3.jpg',
        'assets/image/couple.jpg',
        'assets/image/couple-2.jpg',
        'assets/image/couple-3.jpg'
    ]

    return (
        <section className='h-max pb-8 pt-14 text-black bg-fixed relative'
            style={{ backgroundImage: 'url(assets/image/bg-white-flower-2.jpg)' }}>
            <h1 className='thanks text-4xl font-semibold mb-10'
            >~ Our Moments ~</h1>

            <Slide_gallery imgs={imgs} />

            <div className='grid grid-cols-2 mb-10 place-items-center gap-4 py-5 px-8 w-full h-max bg-black/20 backdrop-blur-[2px]'>
                {imgs.map((img, i) => (
                    <img data-aos='zoom-in-up'
                        className='h-42 w-full object-cover object-center hover:scale-110 transition'
                        src={img} key={i} />
                ))}
            </div>

            <Slide_gallery imgs={imgs} directions='right' />
        </section>
    )
}

export default Gallery