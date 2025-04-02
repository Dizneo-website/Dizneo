"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle, Code, Laptop, Zap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const landingPageTypes = [
  {
    title: "SaaS Landing Pages",
    description: "High-converting landing pages for software-as-a-service products that drive signups and demos.",
    image: "/placeholder.svg?height=400&width=600&text=SaaS+Landing",
    features: ["Clear value proposition", "Feature highlights", "Pricing tables", "Testimonials", "FAQ sections"],
  },
  {
    title: "Mobile App Landing Pages",
    description: "Engaging landing pages for mobile applications that drive downloads and user acquisition.",
    image: "/placeholder.svg?height=400&width=600&text=App+Landing",
    features: ["App screenshots", "Download buttons", "Feature showcase", "User reviews", "Cross-platform support"],
  },
  {
    title: "Product Launch Pages",
    description: "Excitement-building landing pages for new product launches that generate pre-orders and waitlists.",
    image: "/placeholder.svg?height=400&width=600&text=Product+Launch",
    features: ["Countdown timers", "Early-bird offers", "Product demos", "Email capture", "Social sharing"],
  },
]

export default function SoftwareLandingShowcase() {
  const [activeTab, setActiveTab] = useState("saas")

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Badge className="bg-orange-100 text-orange-800 border-0">Software Landing Pages</Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">High-Converting Landing Pages</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We design and develop landing pages that convert visitors into customers, with a focus on user experience
            and conversion optimization.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="saas" onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="saas">SaaS</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="product">Product Launch</TabsTrigger>
            </TabsList>
          </div>

          {landingPageTypes.map((type, index) => (
            <TabsContent key={index} value={["saas", "mobile", "product"][index]} className="mt-0">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="order-2 md:order-1">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">{type.title}</h3>
                      <p className="text-muted-foreground">{type.description}</p>

                      <div className="mt-6 space-y-3">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="space-y-2">
                          {type.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Button className="bg-orange-600 hover:bg-orange-700">
                          See Examples
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="order-1 md:order-2">
                    <div className="relative overflow-hidden rounded-lg shadow-xl">
                      <Image
                        src={type.image || "/placeholder.svg"}
                        alt={type.title}
                        width={600}
                        height={400}
                        className="w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          {
            icon: <Zap className="h-10 w-10 text-orange-600" />,
            title: "Conversion Focused",
            description:
              "Our landing pages are designed with conversion in mind, using proven principles to maximize your ROI.",
          },
          {
            icon: <Laptop className="h-10 w-10 text-orange-600" />,
            title: "Fully Responsive",
            description:
              "Every landing page works perfectly on all devices, from desktop to mobile, ensuring no visitor is left behind.",
          },
          {
            icon: <Code className="h-10 w-10 text-orange-600" />,
            title: "Fast & Optimized",
            description:
              "Lightning-fast loading times and SEO optimization to ensure your page ranks well and keeps visitors engaged.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-2 w-16 h-16 rounded-lg bg-orange-50 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

