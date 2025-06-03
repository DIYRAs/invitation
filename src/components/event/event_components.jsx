import React from 'react'

const Event_components = ({ title, date, time, loc, addr }) => {
    let style = ''
    title == 'Akad' ? style = 'border-b' : style = 'border-t'

    return (
        <div data-aos='flip-up'
            className={`w-full border-l ${style} p-3 rounded-2xl`}>
            <div className='font-semibold'>
                <p className='thanks text-4xl mb-3 font-serif'>{title}</p>
                <p>{date}</p>
                <p>{time}</p>
                <p>{loc}</p>
                <p>{addr}</p>
            </div>
        </div>
    )
}

export default Event_components