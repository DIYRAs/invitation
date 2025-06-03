import React from 'react'
import Enter_sway from '../../animations/enter_sway'

const Decorations = ({ who }) => {
    let style = ''
    let wrt = ''
    who == 'GROOM' ? style = '-right-26' : style = '-left-26'
    who == 'GROOM' ? wrt = 'vertical-lr' : wrt = 'vertical-rl'

    return (
        <>
            <p data-aos='zoom-in-dowm'
                className={`absolute text-start top-0 ${style} tracking-tighter text-white/60 font-bold text-2xl`}
                style={{ writingMode: wrt, textOrientation: 'upright' }}>
                THE <span className='text-4xl'>{who}</span> </p>

            {who == 'GROOM' ? <>
                <Enter_sway
                    img={'assets/image/ring-flower-2.png'}
                    className={'absolute transition -top-2 scale-[1.3] object-center object-cover'}
                    initialRotate={'270deg'}
                    rotate={['270deg', '280deg', '270deg']} />
            </> : <>
                <Enter_sway
                    img={'assets/image/ring-flower-2.png'}
                    className={'absolute transition -top-3 scale-[1.3] object-center object-cover'}
                    initialRotate={'-360deg'}
                    rotate={['0', '10deg', '0']} />
            </>}
        </>
    )
}

export default Decorations