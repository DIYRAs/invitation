import React from 'react'

const Countdown = () => {
    return (
        <div data-aos='fade-up'
         className="grid grid-flow-col text-3xl gap-5 my-10 text-center auto-cols-max">
            <div className="flex flex-col items-center">
                <span className="countdown font-mono">00</span>
                <span className="text-base font-medium">days</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="countdown font-mono">00</span>
                <span className="text-base font-medium">hours</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="countdown font-mono">00</span>
                <span className="text-base font-medium">min</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="countdown font-mono">00</span>
                <span className="text-base font-medium">sec</span>
            </div>
        </div>

    )
}

export default Countdown