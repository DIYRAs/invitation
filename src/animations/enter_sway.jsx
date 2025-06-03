import { motion, useAnimation, useInView } from "framer-motion"
import { memo, useEffect, useRef } from "react"

const Enter_sway = ({ img, className, rotate, initialRotate = 0, delay = 0 }) => {
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

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
            ref={ref}
            loading="lazy"
            src={img}
            className={className}
            initial={{ scale: 0, opacity: 0 }}
            animate={controls}
        />
    )
}

export default memo(Enter_sway)
