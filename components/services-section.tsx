"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BarChart, Search, TrendingUp, Users, Globe, ClipboardCheck } from "lucide-react"
import { motion } from "framer-motion"

const digitalMarketingServices = [
  {
    icon: <Search className="h-10 w-10 text-orange-600" />,
    title: "SEO & Organic Growth",
    description: "Boost your search rankings with proven SEO strategies that drive organic traffic.",
    subServices: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-orange-600" />,
    title: "Paid Advertising (PPC)",
    description: "Maximize ROI with high-converting PPC campaigns across search and social platforms.",
    subServices: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Remarketing Campaigns"],
  },
  {
    icon: <Users className="h-10 w-10 text-orange-600" />,
    title: "Social Media Marketing",
    description: "Engage and grow your audience with strategic social media campaigns.",
    subServices: ["Content Strategy", "Influencer Marketing", "Community Management", "Analytics & Reporting"],
  },
  {
    icon: <Globe className="h-10 w-10 text-orange-600" />,
    title: "Content Marketing",
    description: "Attract and convert customers with high-quality, SEO-optimized content.",
    subServices: ["Blog Writing", "Video Marketing", "Infographics", "E-Books & Whitepapers"],
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-orange-600" />,
    title: "Conversion Rate Optimization",
    description: "Optimize your website and landing pages to turn visitors into customers.",
    subServices: ["A/B Testing", "User Behavior Analysis", "Funnel Optimization", "Heatmap Tracking"],
  },
  {
    icon: <BarChart className="h-10 w-10 text-orange-600" />,
    title: "Analytics & Performance Tracking",
    description: "Measure and improve your marketing performance with data-driven insights.",
    subServices: ["Google Analytics", "Social Media Insights", "Competitor Analysis", "Custom Dashboards"],
  },
]

export default function DigitalMarketingSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Badge className="bg-orange-100 text-orange-800 border-0">Digital Marketing Services</Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Grow Your Business Online</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Our expert digital marketing solutions help brands increase visibility, engagement, and revenue.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {digitalMarketingServices.map((service, index) => (
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
                  <h4 className="text-sm font-medium mb-2">Includes:</h4>
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
