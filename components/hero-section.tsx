"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const rect = containerRef.current.getBoundingClientRect()

      const x = clientX - rect.left
      const y = clientY - rect.top

      const xPercent = x / rect.width
      const yPercent = y / rect.height

      const xOffset = (xPercent - 0.5) * 30
      const yOffset = (yPercent - 0.5) * 30

      containerRef.current.style.setProperty("--x-offset", `${xOffset}px`)
      containerRef.current.style.setProperty("--y-offset", `${yOffset}px`)
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"
          style={{
            transform: "translate(var(--x-offset, 0px), var(--y-offset, 0px))",
            transition: "transform 0.1s ease-out",
          }}
        ></div>

        {/* Animated grid lines */}
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Code Odyssey 2025</span>
              <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Where Tech Meets Gaming!
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="mt-6 text-lg text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The ultimate fest bringing together gamers, developers, and problem solvers.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a href="https://linktr.ee/CodeoholicsCommunity" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full sm:w-auto">
              Register Now
            </Button>
            </a>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Explore Events
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-sm text-gray-400">Exciting Events</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white">8h+</div>
              <div className="text-sm text-gray-400">Non-Stop Action</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white">Revealing Soon</div>
              <div className="text-sm text-gray-400">Prize Pool</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-sm text-gray-400">Participants</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}

