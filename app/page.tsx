"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { EventCard } from "@/components/event-card"
import { PrizeCard } from "@/components/prize-card"
import { ScheduleItem } from "@/components/schedule-item"
import { FaqItem } from "@/components/faq-item"
import { ContactCard } from "@/components/contact-card"
import { CountdownTimer } from "@/components/countdown-timer"
import { Navbar } from "@/components/navbar"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  // Initialize smooth scrolling
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const href = this.getAttribute("href")
        if (href) {
          const targetElement = document.querySelector(href)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            })
          }
        }
      })
    })
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-black text-white relative">
      <AnimatedBackground />
      <Navbar />

      <main className="flex-1 relative z-10">
        <HeroSection />

        {/* Countdown Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <CountdownTimer />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  About Code Odyssey
                </h2>
                <p className="text-gray-300 md:text-xl">
                  "Code Odyssey 2025" is a high-energy gaming and tech event where gamers, developers, and cybersecurity
                  enthusiasts compete in a series of intense challenges! Engage in gaming tournaments, coding marathons,
                  debugging battles, and cybersecurity face-offs to win exciting prizes!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex flex-col gap-2 p-4 rounded-lg border border-pink-500/20 bg-black/50 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300">
                    <div className="rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                      <ChevronRight className="h-5 w-5 text-pink-500" />
                    </div>
                    <h3 className="font-medium text-white">Compete in thrilling gaming battles</h3>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-lg border border-pink-500/20 bg-black/50 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300">
                    <div className="rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                      <ChevronRight className="h-5 w-5 text-pink-500" />
                    </div>
                    <h3 className="font-medium text-white">Code and debug your way to victory</h3>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-lg border border-pink-500/20 bg-black/50 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300">
                    <div className="rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                      <ChevronRight className="h-5 w-5 text-pink-500" />
                    </div>
                    <h3 className="font-medium text-white">Win exciting prizes & recognition</h3>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-lg border border-pink-500/20 bg-black/50 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-300">
                    <div className="rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-br from-pink-500/20 to-purple-500/20">
                      <ChevronRight className="h-5 w-5 text-pink-500" />
                    </div>
                    <h3 className="font-medium text-white">Network with top developers & gamers</h3>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-pink-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 z-10"></div>
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Code Odyssey Event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
                <Calendar className="h-10 w-10 text-pink-500 mb-2" />
                <h3 className="text-xl font-bold text-white">Date</h3>
                <p className="text-gray-300 text-center">3rd April 2025</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
                <Clock className="h-10 w-10 text-pink-500 mb-2" />
                <h3 className="text-xl font-bold text-white">Duration</h3>
                <p className="text-gray-300 text-center">10:00 AM onwards</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
                <MapPin className="h-10 w-10 text-pink-500 mb-2" />
                <h3 className="text-xl font-bold text-white">Venue</h3>
                <p className="text-gray-300 text-center">D-Block, Auditorium</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300">
                <Users className="h-10 w-10 text-pink-500 mb-2" />
                <h3 className="text-xl font-bold text-white">Team Size</h3>
                <p className="text-gray-300 text-center">Varies by event</p>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Tech & Gaming Events
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                  Compete in a variety of exciting tech and gaming challenges designed to test your skills
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <EventCard
                title="SovaStrike – The Gaming Showdown"
                description="Compete in tactical FPS battles, high-paced 1v1 combat, battle royale survival, strategic cricket simulation, and fun math-based challenges."
                games={["Valorant", "Tekken", "BGMI", "Cricket Champions", "Calculus"]}
                icon="gamepad"
              />

              <EventCard
                title="Innov8 Sprint – The Coding Marathon"
                description="Problem statements provided OR open innovation allowed. Jury includes founding and ex-core team members."
                features={["Dev Lead (Bhavish) & App Lead (Anileshwar) leading problem curation."]}
                icon="code"
              />

              <EventCard
                title="Zero-Bug Challenge – Debugging Face-Off"
                description="1v1 battle across 3 rounds of debugging challenges. Last person standing wins!"
                rounds={["Basic debugging", "Intermediate code fixes", "Advanced problem-solving"]}
                note="Question preparation by CP Leads (Sai Sruti & Karthik Reddy)."
                icon="bug"
              />

              <EventCard
                title="Capture the Flag (CTF) – Cybersecurity Challenge"
                description="Solve security challenges & exploit vulnerabilities. Real-world hacking simulations & cryptographic puzzles."
                features={["Win prizes as the best ethical hackers!"]}
                icon="shield"
              />
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section id="prizes" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Prizes & Perks
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                  Win amazing prizes and gain valuable opportunities
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <PrizeCard
                title="Gaming & Coding Winners"
                description="Cash prizes, goodies, and recognition for top performers"
                icon="trophy"
              />

              <PrizeCard
                title="Best Cybersecurity Hackers"
                description="Special awards & certifications for ethical hacking skills"
                icon="shield-check"
              />

              <PrizeCard
                title="Internship Opportunities"
                description="Exclusive internship & networking opportunities for standout participants"
                icon="briefcase"
              />
            </div>

            <div className="mt-12 p-6 bg-black/50 backdrop-blur-sm rounded-lg border border-pink-500/20">
              <h3 className="text-xl font-bold mb-4 text-white">Additional Perks</h3>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-pink-500" />
                  <span className="text-gray-300">Exclusive Swag & Goodies</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-pink-500" />
                  <span className="text-gray-300">Hands-on mentorship from industry experts</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-pink-500" />
                  <span className="text-gray-300">Career opportunities for top performers</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Event Schedule
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                  Plan your day with our detailed timeline
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-4">
              <ScheduleItem time="10:00 AM" event="Opening Ceremony" />
              <ScheduleItem time="10:30 AM" event="Gaming & Coding Begins" />
              <ScheduleItem time="3:00 PM" event="Zero-Bug Challenge Round 1" />
              <ScheduleItem time="5:00 PM" event="Capture the Flag Challenge" />
              <ScheduleItem time="7:00 PM" event="Fun Break & Networking" />
              <ScheduleItem time="10:00 PM" event="Final Showdowns & Submissions" />
              <ScheduleItem time="12:00 AM" event="Winners Announcement" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                  Find answers to common questions about Code Odyssey 2025
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-4 max-w-3xl mx-auto">
              <FaqItem question="Who can participate?" answer="Gamers, developers, and tech enthusiasts globally." />
              <FaqItem question="Is it free?" answer="Yes, participation is 100% free!" />
              <FaqItem question="Can I join solo?" answer="Yes, teams and solo participants are allowed." />
              <FaqItem
                question="What games and coding languages are supported?"
                answer="Any! Valorant, BGMI, Web3, Python, JS, etc."
              />
              <FaqItem question="Where will it be hosted?" answer="D-Block, Auditorium & Online Streaming." />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Contact Us
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                  Reach out to us for any queries or assistance
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <ContactCard title="Email" contact="codeodyssey@codeoholics.com" icon="mail" />
              <ContactCard title="Website" contact="codeoholics-ten.vercel.app" icon="globe" />
              <ContactCard title="Phone" contact="7989842906, 9618136194, 8106828650" icon="phone" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-pink-500/20 py-6 md:py-0 bg-black/80 backdrop-blur-sm relative z-10">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
            © 2025 Code Odyssey. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium text-gray-400 hover:text-white">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-400 hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

