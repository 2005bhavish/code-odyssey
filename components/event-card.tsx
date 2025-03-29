import Link from "next/link";
import { motion } from "framer-motion";
import { Gamepad2, Code, Bug, Shield, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  description: string;
  games?: string[];
  features?: string[];
  rounds?: string[];
  note?: string;
  icon: "gamepad" | "code" | "bug" | "shield";
  imageUrl: string;
  buttons?: { text: string; link?: string }[]; // ✅ Allow multiple buttons
}

export function EventCard({
  title,
  description,
  games,
  features,
  rounds,
  note,
  icon,
  imageUrl,
  buttons,
}: EventCardProps) {
  const icons = {
    gamepad: <Gamepad2 className="h-6 w-6" />,
    code: <Code className="h-6 w-6" />,
    bug: <Bug className="h-6 w-6" />,
    shield: <Shield className="h-6 w-6" />,
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg border border-pink-500/20 bg-black/50 backdrop-blur-sm p-6 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.15)] transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute right-0 top-0 h-100 w-16 translate-x-4 -translate-y-4 transform rounded-full bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-70 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2"></div>
      <div className="absolute right-0 top-0 h-100 w-20 translate-x-8 -translate-y-8 transform rounded-full bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-50 transition-transform group-hover:translate-x-6 group-hover:-translate-y-6"></div>

      <div className="mb-4 flex items-center gap-2">
        <div className="rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-2 text-pink-500">
          {icons[icon]}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      <p className="mb-4 text-gray-300">{description}</p>

      <div className="mb-4 relative w-full h-64 overflow-hidden rounded-lg">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>

      {games && (
        <div className="space-y-2">
          <h4 className="font-medium text-white">Games:</h4>
          <ul className="space-y-1">
            {games.map((game, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-pink-500" />
                <span className="text-gray-300">{game}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {features && (
        <div className="space-y-2">
          <h4 className="font-medium text-white">Features:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-pink-500" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {rounds && (
        <div className="space-y-2">
          <h4 className="font-medium text-white">Rounds:</h4>
          <ul className="space-y-1">
            {rounds.map((round, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-pink-500" />
                <span className="text-gray-300">{round}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {note && (
        <div className="mt-4 text-sm text-gray-400">
          <strong className="text-white">Note:</strong> {note}
        </div>
      )}

      {/* ✅ Multiple Buttons Section */}
      <div className="mt-6 flex flex-col gap-3">
        {buttons?.map((button, index) => (
          button.link ? (
            <a
              key={index}
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button className="w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-600 hover:from-indigo-700 hover:via-purple-600 hover:to-blue-400">
                {button.text}
              </Button>
            </a>
          ) : (
            <Button
              key={index}
              className="w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-600 hover:from-indigo-700 hover:via-purple-600 hover:to-blue-400"
            >
              {button.text}
            </Button>
          )
        ))}
      </div>
    </motion.div>
  );
}
