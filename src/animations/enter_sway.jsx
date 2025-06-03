import { motion, useAnimation, useInView } from "framer-motion"
import { memo, useEffect, useRef } from "react"

const Enter_sway = ({
    img,
    className,
    rotate,
    initialRotate = 0,
    delay = 0,
    triggerRef = null, // Tambahkan prop triggerRef
}) => {
    const controls = useAnimation()
    const localRef = useRef(null)

    // Gunakan triggerRef jika disediakan, kalau tidak pakai localRef
    const refToUse = triggerRef || localRef
    const inView = useInView(refToUse, { once: true })

    useEffect(() => {
        if (inView) {
            const animate = async () => {
                await controls.start({
                    rotate: initialRotate,
                    scale: [0, 1],
                    opacity: [0, 1],
                    transition: { duration: 1.2, ease: 'easeOut', delay },
                })

                controls.start({
                    rotate: rotate,
                    transition: {
                        repeat: Infinity,
                        duration: 5,
                        ease: 'easeInOut',
                    },
                })
            }

            animate()
        }
    }, [inView, controls, rotate, initialRotate, delay])

    return (
        <motion.img
            ref={localRef} // Tetap pasangkan img ke ref lokal (bukan triggerRef)
            loading="lazy"
            src={img}
            className={className}
            initial={{ scale: 0, opacity: 0 }}
            animate={controls}
        />
    )
}

export default memo(Enter_sway)
