"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Bell, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Subscribing email:", email)
    // Show success state
    setSubscribed(true)
    // Reset after 3 seconds
    setTimeout(() => {
      setSubscribed(false)
      setEmail("")
    }, 3000)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center space-y-3">
        <Badge className="bg-orange-100 text-orange-800 border-0">Newsletter</Badge>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Stay Updated</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
          Subscribe to our newsletter for the latest digital marketing trends, tips, and insights.
        </p>
      </div>

      {/* Newsletter Card */}
      <div className="mt-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-[1fr_1fr]">
                {/* Left Side - Benefits */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 md:p-12 text-white">
                  <div className="space-y-4">
                    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white/20">
                      <Bell className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Why Subscribe?</h3>
                    <ul className="space-y-2">
                      {[
                        "Weekly digital marketing tips",
                        "Exclusive case studies",
                        "Industry insights and trends",
                        "Special offers and promotions",
                        "Free resources and templates",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-white/90 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side - Subscription Form */}
                <div className="p-6 md:p-12 flex items-center">
                  {subscribed ? (
                    <div className="w-full text-center space-y-4">
                      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 mx-auto">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-green-600">Thank You for Subscribing!</h3>
                      <p className="text-muted-foreground">
                        You've been added to our newsletter. Check your inbox for a confirmation email.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="w-full space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Join Our Newsletter</h3>
                        <p className="text-sm text-muted-foreground">
                          Get the latest digital marketing insights delivered straight to your inbox.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="pl-10 focus:ring-orange-500 focus:border-orange-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                        Subscribe
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By subscribing, you agree to our{" "}
                        <a href="#" className="underline hover:text-orange-600">
                          Privacy Policy
                        </a>
                        . We'll never share your information.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );

}

