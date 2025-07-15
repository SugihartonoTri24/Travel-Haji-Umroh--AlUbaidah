import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Users, Shield, Clock, Heart, Phone, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AU</span>
          </div>
          <span className="ml-2 text-xl font-bold text-gray-900">Al Ubaidah</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            About
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                    ✨ Trusted Hajj & Umrah Partner
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Your Sacred Journey to <span className="text-emerald-600">Makkah</span> Begins Here
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Experience the spiritual journey of a lifetime with Al Ubaidah. We provide comprehensive Hajj and
                    Umrah packages with expert guidance, comfortable accommodations, and dedicated support throughout
                    your pilgrimage.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Your Journey
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Free Consultation
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">4.9/5</span>
                    <span>from 500+ pilgrims</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-emerald-600" />
                    <span>Licensed & Certified</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  width="600"
                  height="500"
                  alt="Kaaba in Makkah"
                  className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Our Services</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Why Choose Al Ubaidah?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We combine years of experience with modern comfort to ensure your pilgrimage is spiritually fulfilling
                  and worry-free.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Expert Guidance</h3>
                  <p className="text-center text-gray-600">
                    Our experienced guides provide comprehensive support throughout your journey, ensuring you perform
                    all rituals correctly and meaningfully.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Prime Locations</h3>
                  <p className="text-center text-gray-600">
                    Stay in comfortable accommodations close to Haram, making it easy to perform your prayers and
                    rituals without hassle.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Complete Support</h3>
                  <p className="text-center text-gray-600">
                    From visa processing to transportation, meals, and 24/7 assistance, we handle everything so you can
                    focus on your spiritual journey.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Spiritual Focus</h3>
                  <p className="text-center text-gray-600">
                    Our programs are designed to maximize your spiritual experience with dedicated time for worship,
                    reflection, and personal growth.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Flexible Packages</h3>
                  <p className="text-center text-gray-600">
                    Choose from various package options tailored to different budgets and preferences, all maintaining
                    our high standards of service.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-emerald-100 hover:shadow-lg transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Proven Excellence</h3>
                  <p className="text-center text-gray-600">
                    With over 15 years of experience and thousands of satisfied pilgrims, we have established ourselves
                    as a trusted partner.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Testimonials</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">What Our Pilgrims Say</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Read the experiences of those who have completed their sacred journey with us.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Al Ubaidah made my Hajj journey absolutely perfect. The guidance was exceptional, accommodations
                    were comfortable, and the spiritual atmosphere they created was truly special. I felt supported
                    every step of the way."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold text-sm">AH</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Ahmad Hassan</p>
                      <p className="text-sm text-gray-600">Hajj 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The Umrah package exceeded all my expectations. The team was professional, caring, and
                    knowledgeable. The proximity to Haram made it easy to perform prayers, and the overall experience
                    was life-changing."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-600 font-semibold text-sm">FA</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Fatima Ali</p>
                      <p className="text-sm text-gray-600">Umrah 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "I've traveled with Al Ubaidah twice now, and both experiences were flawless. Their attention to
                    detail, spiritual guidance, and genuine care for pilgrims sets them apart. Highly recommended!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold text-sm">MR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Mohammed Rahman</p>
                      <p className="text-sm text-gray-600">Hajj & Umrah</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-emerald-600 to-emerald-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Begin Your Sacred Journey?
                </h2>
                <p className="max-w-[600px] text-emerald-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied pilgrims who have trusted Al Ubaidah for their Hajj and Umrah journey.
                  Contact us today for a free consultation.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Today
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">AU</span>
          </div>
          <p className="text-xs text-gray-600">© 2024 Al Ubaidah Travel Agency. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
