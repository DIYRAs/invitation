import React, { memo, forwardRef } from 'react'
import Enter_sway from '../../animations/enter_sway'

const Decorations = forwardRef((props, ref) => {
    return (
        <>
            <Enter_sway
                img={'assets/image/pink-flower-4.png'}
                rotate={['0deg', '10deg', '0']}
                triggerRef={ref}
                className={'absolute -top-30 -left-0 object-center rotate-[90deg] object-cover origin-bottom-left h-4/12 blur-[1px]'} />

            <Enter_sway
                img={'/assets/image/pink-flower-1.webp'}
                rotate={['-30deg', '-20deg', '-30deg']}
                initialRotate={'-30deg'}
                triggerRef={ref}
                delay={0.2}
                className='absolute -bottom-15 origin-bottom -right-44 h-7/12'
            />

            <Enter_sway
                img={'assets/image/pink-flower-1.webp'}
                rotate={['-20deg', '-30deg', '-20deg']}
                initialRotate={'-20deg'}
                triggerRef={ref}
                className='absolute bottom-24 origin-bottom -right-40 h-7/12'
            />
        </>
    )
})

export default memo(Decorations)