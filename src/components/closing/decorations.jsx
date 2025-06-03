import React from 'react'

const Decorations = () => {
    return (
        <>
            <img className='absolute bottom-0 left-0 h-80'
             src="assets/image/pink-flower-2.png" />
            <img className='absolute top-0 right-0 h-80 rotate-180 -z-10'
             src="assets/image/pink-flower-2.png" />
            <img className='absolute -top-20 -left-46 h-80 rotate-150 -z-10'
             src="assets/image/blue-flower-1.png" />
        </>
    )
}

export default Decorations