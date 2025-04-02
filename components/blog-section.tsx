"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const blogPosts = [
  {
    title: "Top Digital Marketing Trends in India for 2025",
    excerpt: "Stay ahead with the latest digital marketing trends shaping India’s online business landscape in 2025.",
    image: "/placeholder.svg?height=200&width=400&text=Indian+Marketing+Trends",
    date: "Apr 2, 2025",
    author: {
      name: "Rohan Sharma",
      avatar: "/placeholder.svg?height=40&width=40&text=RS",
    },
    category: "Digital Marketing",
  },
  {
    title: "How Indian Startups Can Leverage Social Media for Growth",
    excerpt:
      "Discover how Indian startups are using Instagram, LinkedIn, and YouTube to scale their businesses online.",
    image: "/placeholder.svg?height=200&width=400&text=Social+Media+Growth",
    date: "Mar 28, 2025",
    author: {
      name: "Priya Kapoor",
      avatar: "/placeholder.svg?height=40&width=40&text=PK",
    },
    category: "Social Media Marketing",
  },
  {
    title: "The Future of E-commerce SEO in India",
    excerpt:
      "Learn how Indian e-commerce platforms like Flipkart, Amazon India, and Meesho are optimizing for SEO in 2025.",
    image: "/placeholder.svg?height=200&width=400&text=Ecommerce+SEO",
    date: "Mar 15, 2025",
    author: {
      name: "Arjun Verma",
      avatar: "/placeholder.svg?height=40&width=40&text=AV",
    },
    category: "SEO",
  },
  {
    title: "PPC Strategies for Indian Businesses: Google Ads & Meta Ads",
    excerpt:
      "Maximize ROI on Google Ads and Meta Ads (Facebook & Instagram) with these India-focused PPC strategies.",
    image: "/placeholder.svg?height=200&width=400&text=PPC+India",
    date: "Mar 10, 2025",
    author: {
      name: "Neha Joshi",
      avatar: "/placeholder.svg?height=40&width=40&text=NJ",
    },
    category: "Paid Advertising",
  },
  {
    title: "Influencer Marketing in India: How Brands are Winning Big",
    excerpt:
      "Explore how Indian brands are partnering with influencers on Instagram, YouTube, and Twitter to boost engagement.",
    image: "/placeholder.svg?height=200&width=400&text=Influencer+Marketing",
    date: "Feb 25, 2025",
    author: {
      name: "Karan Mehta",
      avatar: "/placeholder.svg?height=40&width=40&text=KM",
    },
    category: "Influencer Marketing",
  },
];

export default function BlogSection() {
  return (
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Badge className="bg-orange-100 text-orange-800 border-0">Our Blog</Badge>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Latest Insights</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Stay up to date with the latest trends and insights in digital marketing, conversion optimization, and more.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-white/90 text-orange-800 hover:bg-white">{post.category}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>
                      {post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{post.author.name}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 p-0">
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link href="#">
          <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-50">
            View All Articles
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

