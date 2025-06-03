import React from 'react'
import { motion } from 'framer-motion';

const Slide_gallery = ({ imgs, directions = 'left' }) => {
    const animateX = directions === 'left'
        ? { x: ['0%', '-50%'] }
        : { x: ['-50%', '0%'] };

    return (
        <div className='w-full relative overflow-hidden h-46'>
            <motion.div
                className='flex items-center w-max'
                animate={animateX}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear',
                }}
            >
                {[...imgs, ...imgs].map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        className='h-32 aspect-video object-cover mx-2'
                        style={{ boxShadow: '0 0 8px black' }}
                    />
                ))}
            </motion.div>
        </div>


    )
}

export default Slide_gallery