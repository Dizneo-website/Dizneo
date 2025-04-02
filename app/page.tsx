import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronRight, Star } from "lucide-react"
import TestimonialSlider from "@/components/testimonial-slider"
import PricingTable from "@/components/pricing-table"
import ContactForm from "@/components/contact-form"
import BlogSection from "@/components/blog-section"
import ServicesSection from "@/components/services-section"
import SoftwareLandingShowcase from "@/components/software-landing-showcase"
import NewsletterSubscription from "@/components/newsletter-subscription"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-orange-50"> 
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-gradient-to-br from-orange-400 to-orange-600">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold">D</div>
            </div>
            <span className="text-xl font-bold">Dizneo</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Portfolio
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Pricing
            </Link>
            <Link href="#blog" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex hover:text-orange-600 hover:bg-orange-50">
              Log in
            </Button>
            <Button size="sm" className="hidden md:flex bg-orange-600 hover:bg-orange-700">
              Free Consultation
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-orange-100 to-orange-200">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex rounded-md bg-orange-100 text-orange-800 border-0 mb-2">
                    Digital Marketing & Software Landing Pages
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your Digital Presence
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We create high-converting digital marketing strategies and software landing pages that turn visitors into loyal customers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                    View Our Work
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="inline-block rounded-full overflow-hidden border-2 border-white h-8 w-8">
                        <Image
                          src={`/placeholder.svg?height=32&width=32&text=${i}`}
                          alt="Avatar"
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9</span>
                    <span className="text-muted-foreground">(500+ reviews)</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=500&width=800&text=Digital+Marketing+Showcase"
                    alt="Hero Image"
                    width={800}
                    height={500}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <ServicesSection />
        </section>

        <section id="software-landing" className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <SoftwareLandingShowcase />
        </section>

        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-orange-100 text-orange-800 border-0">Our Work</Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Case Studies & Portfolio</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Browse through our latest projects and see how we've helped businesses transform their digital presence and increase conversions.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Tabs defaultValue="all" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="digital">Digital Marketing</TabsTrigger>
                    <TabsTrigger value="landing">Landing Pages</TabsTrigger>
                    <TabsTrigger value="creative">Creative Design</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="all" className="mt-0">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <Card key={i} className="overflow-hidden group">
                        <div className="relative overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=400&width=600&text=Project+${i}`}
                            alt={`Project ${i}`}
                            width={600}
                            height={400}
                            className="object-cover transition-transform duration-300 group-hover:scale-105 aspect-[4/3]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 w-full">
                              <h3 className="text-white font-bold">Project Title {i}</h3>
                              <p className="text-white/80 text-sm">Digital Marketing</p>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <h3 className="font-bold">Client Success Story {i}</h3>
                            <p className="text-sm text-muted-foreground">
                              Increased conversion rate by 150% through targeted digital marketing strategies.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button variant="ghost" className="p-0 h-auto text-orange-600 hover:text-orange-700">
                            View Case Study <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="digital" className="mt-0">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                      <Card key={i} className="overflow-hidden group">
                        <div className="relative overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=400&width=600&text=Digital+${i}`}
                            alt={`Digital Marketing Project ${i}`}
                            width={600}
                            height={400}
                            className="object-cover transition-transform duration-300 group-hover:scale-105 aspect-[4/3]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 w-full">
                              <h3 className="text-white font-bold">Digital Marketing Project {i}</h3>
                              <p className="text-white/80 text-sm">SEO & PPC</p>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <h3 className="font-bold">Digital Marketing Success {i}</h3>
                            <p className="text-sm text-muted-foreground">
                              Increased organic traffic by 200% and reduced cost per acquisition by 40%.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button variant="ghost" className="p-0 h-auto text-orange-600 hover:text-orange-700">
                            View Case Study <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="landing" className="mt-0">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[1, 2].map((i) => (
                      <Card key={i} className="overflow-hidden group">
                        <div className="relative overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=400&width=600&text=Landing+${i}`}
                            alt={`Landing Page Project ${i}`}
                            width={600}
                            height={400}
                            className="object-cover transition-transform duration-300 group-hover:scale-105 aspect-[4/3]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 w-full">
                              <h3 className="text-white font-bold">Landing Page Project {i}</h3>
                              <p className="text-white/80 text-sm">Conversion Optimization</p>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <h3 className="font-bold">Landing Page Success {i}</h3>
                            <p className="text-sm text-muted-foreground">
                              Increased conversion rate by 85% with our high-converting landing page design.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button variant="ghost" className="p-0 h-auto text-orange-600 hover:text-orange-700">
                            View Case Study <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="creative" className="mt-0">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[1].map((i) => (
                      <Card key={i} className="overflow-hidden group">
                        <div className="relative overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=400&width=600&text=Creative+${i}`}
                            alt={`Creative Design Project ${i}`}
                            width={600}
                            height={400}
                            className="object-cover transition-transform duration-300 group-hover:scale-105 aspect-[4/3]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 w-full">
                              <h3 className="text-white font-bold">Creative Design Project {i}</h3>
                              <p className="text-white/80 text-sm">Branding & Logo Design</p>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-2">
                            <h3 className="font-bold">Creative Design Success {i}</h3>
                            <p className="text-sm text-muted-foreground">
                              Complete brand overhaul resulting in 45% increase in brand recognition.
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Button variant="ghost" className="p-0 h-auto text-orange-600 hover:text-orange-700">
                            View Case Study <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="flex justify-center mt-10">
              <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                View All Projects
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-orange-100">
          <TestimonialSlider />
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <PricingTable />
        </section>

        <section id="newsletter" className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <NewsletterSubscription />
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <ContactForm />
        </section>

        <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <BlogSection />
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Transform Your Digital Presence?</h2>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                  Let's create a high-converting digital strategy together. Start your journey with Dizneo today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-orange-600 bg-orange-50">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-gradient-to-br from-orange-400 to-orange-600">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">D</div>
                </div>
                <span className="text-xl font-bold">Dizneo</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Creating high-converting digital marketing strategies and software landing pages since 2024.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-orange-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-orange-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-orange-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-orange-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-orange-600">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-orange-600">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-muted-foreground hover:text-orange-600">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-orange-600">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-orange-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-muted-foreground hover:text-orange-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-orange-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-orange-600">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-orange-600">
                    SEO Optimization
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-orange-600">
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-orange-600">
                    PPC Advertising
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-orange-600">
                    Software Landing Pages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-orange-600">
                    Creative Design
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-muted-foreground"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-muted-foreground mb-1">Dizneo Marketing, Molakalmuru, Chitradurga Dist, Karnataka - 577535</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-muted-foreground"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-muted-foreground mb-1">+91 (900) 859-5822</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-muted-foreground"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-muted-foreground">dizneo.website@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© 2025 DesignPro. All rights reserved.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
