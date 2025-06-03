import React from 'react'

const Decorations = ({ who }) => {
    let style = ''
    let wrt = ''
    who == 'GROOM' ? style = '-right-26' : style = '-left-26'
    who == 'GROOM' ? wrt = 'vertical-lr' : wrt = 'vertical-rl'

    return (
        <p data-aos='zoom-in-dowm'
            className={`absolute text-start top-0 ${style} tracking-tighter text-white/60 font-bold text-2xl`}
            style={{ writingMode: wrt, textOrientation: 'upright' }}>
            THE <span className='text-4xl'>{who}</span></p>
    )
}

export default Decorations