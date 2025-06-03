import { motion, useAnimation, useInView } from "framer-motion"
import { memo, useEffect, useRef } from "react"

const Enter_spin = ({ img, className, delay = 0 }) => {
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (inView) {
            const animate = async () => {
                await controls.start({
                    scale: [0, 1],
                    opacity: [0, 1],
                    transition: { duration: 1.2, ease: 'easeOut', delay },
                })

                controls.start({
                    rotate: ['0', '360deg'],
                    transition: {
                        repeat: Infinity,
                        duration: 10,
                        ease: 'linear',
                    },
                })
            }
            animate()
        }

    }, [controls, delay, inView])

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

export default memo(Enter_spin)