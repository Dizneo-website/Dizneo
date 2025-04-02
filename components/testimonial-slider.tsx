"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote:
      "Dizneo helped us scale our e-commerce business with expert SEO and PPC strategies. We saw a 180% increase in organic traffic within just three months!",
    author: "Ravi Sharma",
    role: "Founder, TrendKart",
    avatar: "/placeholder.svg?height=40&width=40&text=RS",
  },
  {
    quote:
      "The landing page designed by Dizneo for our EdTech platform achieved a 12% conversion rate. Their insights into user behavior and UI/UX are outstanding!",
    author: "Pooja Iyer",
    role: "Marketing Head, LearnPro",
    avatar: "/placeholder.svg?height=40&width=40&text=PI",
  },
  {
    quote:
      "Our clinic's online visibility skyrocketed after working with Dizneo. Their local SEO strategy helped us attract 3x more appointment bookings.",
    author: "Dr. Akash Verma",
    role: "Director, HealWell Clinics",
    avatar: "/placeholder.svg?height=40&width=40&text=AV",
  },
];


export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Badge className="bg-orange-100 text-orange-800 border-0">Testimonials</Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Clients Say</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Don't just take our word for it. Here's what our clients have to say about our digital marketing and design
            services.
          </p>
        </div>
      </div>
      <div className="mt-12 relative">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Card className="max-w-3xl mx-auto">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <Quote className="h-12 w-12 text-orange-200" />
                    <p className="text-lg md:text-xl italic">{testimonials[current].quote}</p>
                    <div className="flex items-center mt-6">
                      <Avatar className="h-12 w-12 border-2 border-white">
                        <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].author} />
                        <AvatarFallback>
                          {testimonials[current].author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4 text-left">
                        <p className="text-base font-medium">{testimonials[current].author}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-8 gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => {
              prev()
              setAutoplay(false)
            }}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-2 h-2 p-0 rounded-full ${current === index ? "bg-orange-600" : "bg-gray-300"}`}
              onClick={() => {
                setCurrent(index)
                setAutoplay(false)
              }}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => {
              next()
              setAutoplay(false)
            }}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

