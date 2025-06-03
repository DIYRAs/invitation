import Enter_sway from '../../animations/enter_sway'
import { forwardRef, memo } from 'react'

const Decoration = forwardRef((props, ref) => {
    return (
        <>
            <Enter_sway
                img={'assets/image/brown-flower-1.png'}
                className={'absolute w-6/12 -top-88 -left-60 origin-bottom-right'}
                initialRotate={'180deg'}
                rotate={['180deg', '190deg', '180deg']}
                triggerRef={ref} />
            <Enter_sway
                img={'assets/image/brown-flower-2.png'}
                className={'absolute w-12/12 -bottom-5 -right-55 origin-bottom'}
                initialRotate={'-35deg'}
                rotate={['-35deg', '-45deg', '-35deg']}
                triggerRef={ref} />
        </>
    )
})

export default memo(Decoration)