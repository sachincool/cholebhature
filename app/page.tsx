import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, ChefHat, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Contact Banner */}
      <div className="w-full bg-black text-yellow-400 py-2 px-4 text-center">
        <p className="text-sm md:text-base font-medium">
          Contact me at{" "}
          <a href="mailto:contact@sachin.cool" className="font-bold underline">
            contact@sachin.cool
          </a>
        </p>
      </div>

      {/* Free Site Offer Banner */}
      <div className="w-full bg-yellow-400 text-black py-3 px-4 text-center">
        <p className="text-sm md:text-base font-medium">
          🎉 Special Offer: Get this website template for FREE when you feature{" "}
          <span className="font-bold">Samridhi Luthra</span> as a cook! 👩‍🍳
        </p>
      </div>

      <header className="sticky top-0 z-40 bg-black text-yellow-400">
        <div className="container flex h-20 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Chole Bhature"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-yellow-400">CholeBhature.ca</span>
              <span className="text-xs text-yellow-200">VEGETARIAN CATERING CO.</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-yellow-200 uppercase">
              Home
            </Link>
            <div className="relative group">
              <Link href="#location1" className="text-sm font-medium hover:text-yellow-200 uppercase flex items-center">
                Location @ Williams Parkway <span className="ml-1">▼</span>
              </Link>
            </div>
            <div className="relative group">
              <Link href="#location2" className="text-sm font-medium hover:text-yellow-200 uppercase flex items-center">
                Location @ Main Street South <span className="ml-1">▼</span>
              </Link>
            </div>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden text-yellow-400 border-yellow-400">
            <span className="sr-only">Toggle menu</span>
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
          </Button>
        </div>
      </header>

      <div className="bg-black py-4">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="#menu1"
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 transition-colors py-4 px-6 rounded flex items-center justify-center text-center"
          >
            <Menu className="mr-2 h-5 w-5" />
            <span className="font-bold">CHOLE BHATURE @ WILLIAMS PARKWAY MENU (TAKEOUT ONLY)</span>
          </Link>
          <Link
            href="#menu2"
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 transition-colors py-4 px-6 rounded flex items-center justify-center text-center"
          >
            <Menu className="mr-2 h-5 w-5" />
            <span className="font-bold">CHOLE BHATURE @ MAIN STREET SOUTH MENU</span>
          </Link>
          <Link
            href="#menu3"
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 transition-colors py-4 px-6 rounded flex items-center justify-center text-center"
          >
            <Menu className="mr-2 h-5 w-5" />
            <span className="font-bold">CHOLE BHATURE @ OTHER LOCATION</span>
          </Link>
        </div>
      </div>

      <main className="flex-1">
        <section id="home" className="relative bg-[#f8f7e7]">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-repeat bg-contain"></div>
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6 text-black">
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight uppercase">
                  Savory
                  <br />
                  Chole
                  <br />
                  Bhature
                </h1>
                <p className="max-w-[600px] text-lg md:text-xl">
                  Experience the rich flavors of Punjab at our restaurant. Serving the most delicious and authentic
                  Chole Bhature in town.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-yellow-400 hover:bg-yellow-500 text-black">
                    <Link href="#menu1">View Menu</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-black text-black hover:bg-black/10">
                    <Link href="#contact">Find Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Delicious Chole Bhature"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black text-white py-16">
          <div className="container">
            <div className="flex flex-col items-end text-right">
              <h2 className="text-4xl md:text-6xl font-bold text-yellow-400">INDIAN FOOD MADE WITH</h2>
              <h2 className="text-4xl md:text-6xl font-bold text-yellow-400">TANGY TEMPTATIONS</h2>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Chole Bhature Dish"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg">
                  Welcome to Cholebhature, The best Indian restaurant that always serves tasty food at an affordable
                  price. Our specialty is authentic Punjabi Chole Bhature made with traditional recipes and the finest
                  ingredients.
                </p>
                <p className="text-lg">
                  With multiple locations across the city, we bring the flavors of India closer to you. Whether you're
                  dining in or taking out, our food will transport you straight to the streets of Punjab.
                </p>
                <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black mt-4">
                  <Link href="#locations">Find a Location</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="menu1" className="py-16 bg-[#f8f7e7]">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">WILLIAMS PARKWAY MENU</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[800px]">Takeout Only</p>
              <div className="mt-4 h-1 w-20 bg-yellow-400 rounded"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2 hover:border-yellow-400 transition-colors">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Classic Chole Bhature"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">Classic Chole Bhature</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our signature dish - spicy chickpea curry served with fluffy deep-fried bread.
                  </p>
                  <p className="mt-2 font-semibold text-yellow-600">$12.99</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-yellow-400 transition-colors">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Punjabi Thali"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">Punjabi Thali</h3>
                  <p className="mt-2 text-muted-foreground">
                    A complete meal with chole, bhature, rice, raita, and dessert.
                  </p>
                  <p className="mt-2 font-semibold text-yellow-600">$18.99</p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-yellow-400 transition-colors">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Samosa"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">Samosa Platter</h3>
                  <p className="mt-2 text-muted-foreground">
                    Crispy pastry filled with spiced potatoes and peas, served with chutney.
                  </p>
                  <p className="mt-2 font-semibold text-yellow-600">$8.99</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black">
                <Link href="#contact">View Full Menu</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="menu2" className="py-16 bg-black text-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-yellow-400">
                MAIN STREET SOUTH MENU
              </h2>
              <p className="mt-4 text-lg text-yellow-200 max-w-[800px]">Dine-in and Takeout Available</p>
              <div className="mt-4 h-1 w-20 bg-yellow-400 rounded"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-black border-2 border-yellow-400 hover:border-yellow-200 transition-colors text-white">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Classic Chole Bhature"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-yellow-400">Classic Chole Bhature</h3>
                  <p className="mt-2 text-yellow-100">
                    Our signature dish - spicy chickpea curry served with fluffy deep-fried bread.
                  </p>
                  <p className="mt-2 font-semibold text-yellow-400">$12.99</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-2 border-yellow-400 hover:border-yellow-200 transition-colors text-white">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Punjabi Thali"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-yellow-400">Punjabi Thali</h3>
                  <p className="mt-2 text-yellow-100">A complete meal with chole, bhature, rice, raita, and dessert.</p>
                  <p className="mt-2 font-semibold text-yellow-400">$18.99</p>
                </CardContent>
              </Card>
              <Card className="bg-black border-2 border-yellow-400 hover:border-yellow-200 transition-colors text-white">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Lassi"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-yellow-400">Punjabi Lassi</h3>
                  <p className="mt-2 text-yellow-100">
                    Traditional yogurt-based drink, available in sweet or salty varieties.
                  </p>
                  <p className="mt-2 font-semibold text-yellow-400">$4.99</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black">
                <Link href="#contact">View Full Menu</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="locations" className="py-16 bg-[#f8f7e7]">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">OUR LOCATIONS</h2>
              <div className="mt-4 h-1 w-20 bg-yellow-400 rounded"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-2 hover:border-yellow-400 transition-colors">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">Williams Parkway</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-yellow-600 mt-1" />
                      <p className="text-muted-foreground">123 Williams Parkway, Brampton, ON</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-yellow-600 mt-1" />
                      <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="h-5 w-5 text-yellow-600 mt-1" />
                      <p className="text-muted-foreground">Monday - Sunday: 11:00 AM - 10:00 PM</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <ChefHat className="h-5 w-5 text-yellow-600 mt-1" />
                      <p className="text-muted-foreground">Takeout Only</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black w-full">
                      <Link href="#menu1">View Menu</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-yellow-400 transition-colors">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">Main Street South</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-yellow-600 mt-1" />
                      <p className="text-muted-foreground">456 Main Street South, Brampton, ON</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-yellow-600 mt-1" />
                      <p className="text-muted-foreground">(123) 456-7891</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="h-5 w-5 text-yellow-600 mt-1" />
                      <p className="text-muted-foreground">Monday - Sunday: 11:00 AM - 10:00 PM</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <ChefHat className="h-5 w-5 text-yellow-600 mt-1" />
                      <p className="text-muted-foreground">Dine-in and Takeout Available</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black w-full">
                      <Link href="#menu2">View Menu</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-black text-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-yellow-400">CONTACT US</h2>
              <p className="mt-4 text-lg text-yellow-200 max-w-[800px]">Visit us today or place an order</p>
              <div className="mt-4 h-1 w-20 bg-yellow-400 rounded"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-yellow-200">Phone</h3>
                    <p className="text-white">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-yellow-200">Email</h3>
                    <p className="text-white">contact@sachin.cool</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-yellow-200">Locations</h3>
                    <p className="text-white">Williams Parkway & Main Street South, Brampton, ON</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-bold text-yellow-200">Hours</h3>
                    <p className="text-white">Monday - Sunday: 11:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 bg-yellow-400/10 p-6 rounded-xl border border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-400">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none text-yellow-200">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="bg-black border-yellow-400 text-white" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none text-yellow-200">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-black border-yellow-400 text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium leading-none text-yellow-200">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject of your message"
                      className="bg-black border-yellow-400 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none text-yellow-200">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[120px] bg-black border-yellow-400 text-white"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-yellow-400 bg-black text-white">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Chole Bhature"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-yellow-400">CholeBhature.ca</span>
                  <span className="text-xs text-yellow-200">VEGETARIAN CATERING CO.</span>
                </div>
              </div>
              <p className="text-yellow-100">
                Authentic Punjabi cuisine in the heart of Brampton. Serving the most delicious Chole Bhature in town.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-yellow-100 hover:text-yellow-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#menu1" className="text-yellow-100 hover:text-yellow-400 transition-colors">
                    Williams Parkway Menu
                  </Link>
                </li>
                <li>
                  <Link href="#menu2" className="text-yellow-100 hover:text-yellow-400 transition-colors">
                    Main Street South Menu
                  </Link>
                </li>
                <li>
                  <Link href="#locations" className="text-yellow-100 hover:text-yellow-400 transition-colors">
                    Locations
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-yellow-100 hover:text-yellow-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-400">Hours</h3>
              <ul className="space-y-2">
                <li className="text-yellow-100">Monday: 11AM - 10PM</li>
                <li className="text-yellow-100">Tuesday: 11AM - 10PM</li>
                <li className="text-yellow-100">Wednesday: 11AM - 10PM</li>
                <li className="text-yellow-100">Thursday: 11AM - 10PM</li>
                <li className="text-yellow-100">Friday: 11AM - 10PM</li>
                <li className="text-yellow-100">Saturday: 11AM - 10PM</li>
                <li className="text-yellow-100">Sunday: 11AM - 10PM</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-400">Contact</h3>
              <ul className="space-y-2">
                <li className="text-yellow-100">Phone: (123) 456-7890</li>
                <li className="text-yellow-100">Email: contact@sachin.cool</li>
                <li className="text-yellow-100">Williams Parkway, Brampton, ON</li>
                <li className="text-yellow-100">Main Street South, Brampton, ON</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-yellow-400/30 text-center text-yellow-200">
            <p>&copy; {new Date().getFullYear()} CholeBhature.ca. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

