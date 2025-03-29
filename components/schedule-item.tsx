"use client"

import { motion } from "framer-motion"

interface ScheduleItemProps {
  time: string
  event: string
}

export function ScheduleItem({ time, event }: ScheduleItemProps) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-lg border border-pink-500/20 bg-black/50 backdrop-blur-sm p-4 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.15)] transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-w-[100px] rounded-md bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-3 py-1 text-center font-medium text-pink-500">
        {time}
      </div>
      <div className="font-medium text-white">{event}</div>
    </motion.div>
  )
}

