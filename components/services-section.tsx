"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BarChart, Layout, Search, PenTool, TrendingUp, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: <BarChart className="h-10 w-10 text-orange-600" />,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your online presence and drive conversions.",
    subServices: ["SEO Optimization", "PPC Advertising", "Social Media Marketing", "Content Creation"],
  },
  {
    icon: <Layout className="h-10 w-10 text-orange-600" />,
    title: "Software Landing Pages",
    description: "High-converting landing pages designed specifically for software products and services.",
    subServices: ["SaaS Landing Pages", "Mobile App Pages", "Product Launch Pages", "Demo Request Pages"],
  },
  {
    icon: <PenTool className="h-10 w-10 text-orange-600" />,
    title: "Creative Design",
    description: "Professional design services to enhance your brand identity and visual communication.",
    subServices: ["Logo Design", "Banner Design", "Cover Designs", "Brand Identity"],
  },
  {
    icon: <Search className="h-10 w-10 text-orange-600" />,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive more organic traffic to your website.",
    subServices: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-orange-600" />,
    title: "PPC Advertising",
    description: "Targeted pay-per-click campaigns that deliver measurable results and ROI.",
    subServices: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Remarketing"],
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-orange-600" />,
    title: "Social Media Marketing",
    description: "Engage with your audience and build brand awareness through effective social media strategies.",
    subServices: ["Content Strategy", "Community Management", "Paid Social", "Analytics & Reporting"],
  },
]

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Badge className="bg-orange-100 text-orange-800 border-0">Our Services</Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What We Offer</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            We provide a wide range of digital marketing and design services to help your business thrive online.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="p-2 w-16 h-16 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Services Include:</h4>
                  <ul className="space-y-1">
                    {service.subServices.map((subService, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <div className="h-1 w-1 rounded-full bg-orange-600 mr-2"></div>
                        {subService}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-orange-600 hover:text-orange-700">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

