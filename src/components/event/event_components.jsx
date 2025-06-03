import React from 'react'

const Event_components = ({ title, date, time, loc, addr }) => {
    return (
        <div className='w-full border-l border-b p-3 bg-black/20 backdrop-blur-[3px] rounded-2xl'
            style={{ boxShadow: 'inset 0 0 10px wheat, 0 0 5px black' }}>
            <div>
                <p className='text-3xl mb-3'>{title}</p>
                <p>{date}</p>
                <p>{time}</p>
                <p>{loc}</p>
                <p>{addr}</p>
            </div>
        </div>
    )
}

export default Event_components