"use client"

import { motion } from "framer-motion"
import { Mail, Globe, Phone } from "lucide-react"

interface ContactCardProps {
  title: string
  contact: string
  icon: "mail" | "globe" | "phone"
}

export function ContactCard({ title, contact, icon }: ContactCardProps) {
  const icons = {
    mail: <Mail className="h-6 w-6" />,
    globe: <Globe className="h-6 w-6" />,
    phone: <Phone className="h-6 w-6" />,
  }

  return (
    <motion.div
      className="flex flex-col items-center rounded-lg border border-pink-500/20 bg-black/50 backdrop-blur-sm p-6 text-center hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.15)] transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-4 text-pink-500">
        {icons[icon]}
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300">{contact}</p>
    </motion.div>
  )
}

