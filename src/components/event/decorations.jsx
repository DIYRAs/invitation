import React from 'react'
import Enter_sway from '../../animations/enter_sway'
import Enter_spin from '../../animations/enter_spin'

const Decorations = () => {
    return (
        <>
            <img className='absolute -left-20 top-52'
                src="assets/image/orange-flower-2.png" />

            <Enter_spin
                img={'assets/image/orange-flower-2.png'}
                className={'absolute -right-20 top-76'} />

            <Enter_sway
                img={'assets/image/orange-flower-1.png'}
                className={'absolute -right-100 -top-160 -z-10 rotate-[120deg] origin-bottom'}
                rotate={['120deg', '110deg', '120deg']}
                initialRotate={'120deg'} />
        </>
    )
}

export default Decorations