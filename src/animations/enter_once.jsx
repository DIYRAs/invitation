import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const Enter_once = ({ children, className, duration = 1.2, delay = 0 }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-50px" })
    const controls = useAnimation()
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (inView && !hasAnimated) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration, delay, ease: "easeInOut" }
            })
            setHasAnimated(true)
        }
    }, [inView, hasAnimated, controls, duration, delay])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 70 }}
            animate={controls}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default Enter_once
