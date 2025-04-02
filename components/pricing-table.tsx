"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
const plans = [
  {
    name: "Basic",
    description: "Perfect for small businesses just getting started with digital marketing.",
    price: "₹9,999",
    features: [
      "SEO Audit & Optimization",
      "Social Media Management (2 platforms)",
      "Basic Landing Page",
      "Monthly Performance Report",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses that need comprehensive digital marketing.",
    price: "₹19,999",
    features: [
      "Everything in Basic",
      "Advanced SEO Strategy",
      "Social Media Management (4 platforms)",
      "High-Converting Landing Page",
      "Content Creation (4 articles/month)",
      "PPC Campaign Management",
      "Bi-weekly Performance Reports",
      "Email & Phone Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For established businesses with complex digital marketing needs.",
    price: "₹39,999",
    features: [
      "Everything in Professional",
      "Custom Digital Marketing Strategy",
      "Social Media Management (all platforms)",
      "Multiple Landing Pages",
      "Content Creation (8 articles/month)",
      "Advanced PPC Campaign Management",
      "Weekly Performance Reports",
      "Dedicated Account Manager",
      "24/7 Priority Support",
    ],
    popular: false,
  },
];

export default function PricingTable() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Badge className="bg-orange-100 text-orange-800 border-0">Pricing</Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, Transparent Pricing</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Choose the perfect plan for your business needs. No hidden fees or surprises.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className={`h-full flex flex-col ${plan.popular ? "border-orange-600 shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <Badge className="bg-orange-600 text-white border-0">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/ month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-orange-600 hover:bg-orange-700" : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  Select Plan
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Need a custom solution?{" "}
          <Button variant="link" className="p-0 h-auto text-orange-600">
            Contact us
          </Button>{" "}
          for a personalized quote.
        </p>
      </div>
    </div>
  )
}

