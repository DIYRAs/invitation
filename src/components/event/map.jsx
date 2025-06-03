import React from 'react'

const Map = () => {
    return (
        <div className='mt-16 flex flex-col items-center justify-center pb-16 bg-white w-screen'>
            <button className='btn btn-soft bg-white text-black hover:bg-slate-950 hover:text-white w-full py-6'>
                Lihat Lokasi
            </button>
            <iframe
                className='rounded-t-4xl mask w-full'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.2196474108796!2d114.58741067437654!3d-3.2957119411229057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de4211bbc1be42d%3A0xd93490f4e3d79a8e!2sSMK%20Negeri%202%20Banjarmasin!5e0!3m2!1sid!2sid!4v1748870603610!5m2!1sid!2sid"
                height="200"
                style={{ border: 0, boxShadow: '0 0 8px black' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

        </div>
    )
}

export default Map
