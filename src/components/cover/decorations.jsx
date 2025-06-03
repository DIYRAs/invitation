import React from 'react'

const Decorations = () => {
    return (
        <>
            <img className='absolute bottom-0 left-0 -z-10 object-center object-cover h-7/12 blur-[1px]'
                src="assets/image/pink-flower-2.png" alt="flower-decoration" />

            <img className='absolute -bottom-0 -right-56 -rotate-[30deg] origin-bottom z-[1] object-cover h-7/12'
                src="assets/image/pink-flower-1.png" alt="flower-decoration" />

            <img className='absolute -bottom-32 -right-56 -rotate-[30deg] z-[1] origin-bottom object-cover h-7/12'
                src="assets/image/pink-flower-1.png" alt="flower-decoration" />
        </>
    )
}

export default Decorations