import { forwardRef } from 'react'
import Enter_sway from '../../animations/enter_sway'
import Enter_spin from '../../animations/enter_spin'

const Decorations = forwardRef((props, ref) => {
    return (
        <>
            <Enter_spin
                img={"assets/image/orange-flower-2.png"}
                className={'absolute -left-20 top-42'} />

            <Enter_spin
                img={'assets/image/orange-flower-2.png'}
                className={'absolute -right-20 top-76'} />

            <Enter_sway
                img={'assets/image/orange-flower-1.png'}
                className={'absolute -rotate-[10deg] -right-56 -top-20 -z-10 origin-bottom'}
                rotate={['-10deg', '0', '-10deg']}
                triggerRef={ref}
                initialRotate={'-10deg'} />
        </>
    )
})

export default Decorations