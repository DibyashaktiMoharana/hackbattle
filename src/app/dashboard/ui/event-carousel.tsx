"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Event {
  id: number
  title: string
  date: string
  icon: string
}

const events: Event[] = [
  { id: 1, title: "Clean VIT", date: "24/05/24", icon: "https://static.vecteezy.com/system/resources/previews/024/467/586/original/cartoon-tree-isolated-on-a-white-background-simple-modern-style-cute-green-plants-forest-flat-illustration-summer-spring-trees-vector.jpg" },
  { id: 2, title: "Beach Cleanup", date: "15/06/24", icon: "https://static.vecteezy.com/system/resources/previews/024/467/586/original/cartoon-tree-isolated-on-a-white-background-simple-modern-style-cute-green-plants-forest-flat-illustration-summer-spring-trees-vector.jpg" },
  { id: 3, title: "Park Restoration", date: "30/07/24", icon: "https://static.vecteezy.com/system/resources/previews/024/467/586/original/cartoon-tree-isolated-on-a-white-background-simple-modern-style-cute-green-plants-forest-flat-illustration-summer-spring-trees-vector.jpg" },
]

export default function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length)
  }

  return (
    <div className="relative w-1/4 ">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full"
          >
            <Card className="bg-yellow-400 border-none shadow-lg flex flex-col h-[350px]">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-black mb-2">Upcoming Event</h3>
                    <p className="text-base text-gray-800 font-semibold">{events[currentIndex].title}</p>
                    <p className="text-sm text-gray-700 mt-1">({events[currentIndex].date})</p>
                  </div>
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img src={events[currentIndex].icon} alt="Event" className="w-full h-full object-cover" />
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-black text-whitehover:bg-black hover:text-yellow-400 hover:bg-black mt-6 py-2 text-base font-semibold transition-colors duration-300"
                >
                  Join Event
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-black text-yellow-400 hover:bg-white hover:text-black border-2 border-black rounded-full w-10 h-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-black text-yellow-400 hover:bg-white hover:text-black border-2 border-black rounded-full w-10 h-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}