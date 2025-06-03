import React, { useState, useEffect } from 'react'

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        const countDownDate = new Date("Oct 1, 2025 08:00:00").getTime()

        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now

            if (distance < 0) {
                clearInterval(interval)
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                })
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="grid grid-flow-col text-3xl z-10 gap-5 my-10 text-center auto-cols-max">
            <div className="flex flex-col items-center">
                <span className="countdown font-mono">{timeLeft.days}</span>
                <span className="text-base font-medium">days</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="countdown font-mono">{timeLeft.hours}</span>
                <span className="text-base font-medium">hours</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="countdown font-mono">{timeLeft.minutes}</span>
                <span className="text-base font-medium">min</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="countdown font-mono">{timeLeft.seconds}</span>
                <span className="text-base font-medium">sec</span>
            </div>
        </div>
    )
}

export default Countdown
