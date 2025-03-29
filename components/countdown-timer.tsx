"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date to April 3, 2025
    const targetDate = new Date("April 3, 2025 10:00:00").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h3 className="text-center text-xl md:text-2xl font-bold mb-6 text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          COUNTDOWN TO CODE ODYSSEY 2025
        </span>
      </h3>

      <div className="grid grid-cols-4 gap-2 md:gap-6">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-700 rounded-lg opacity-20"></div>
              <div className="absolute inset-[2px] bg-black rounded-lg flex items-center justify-center">
                <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                  {unit.value.toString().padStart(2, "0")}
                </span>
              </div>
              <div className="absolute inset-0 border border-pink-500/30 rounded-lg"></div>
            </div>
            <span className="mt-2 text-xs md:text-sm text-gray-400 font-medium">{unit.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

