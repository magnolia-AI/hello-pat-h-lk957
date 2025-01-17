'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
export default function Home() {
  const featuredListings = [
    {
      title: "Luxury Villa",
      price: "$1,250,000",
      beds: 4,
      baths: 3,
      sqft: "3,500",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Modern Apartment",
      price: "$450,000",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Family Home",
      price: "$750,000",
      beds: 3,
      baths: 2.5,
      sqft: "2,400",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=500&auto=format&fit=crop"
    }
  ]
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop')",
            filter: "brightness(0.7)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-xl mb-8">Discover the perfect property with our expert guidance</p>
          <div className="flex justify-center gap-4 max-w-md mx-auto">
            <Input placeholder="Enter location..." className="bg-white text-black" />
            <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
          </div>
        </div>
      </section>
      {/* Featured Listings */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredListings.map((listing, index) => (
            <Card key={index} className="overflow-hidden">
              <img 
                src={listing.image} 
                alt={listing.title} 
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{listing.title}</CardTitle>
                <CardDescription className="text-xl font-bold text-blue-600">
                  {listing.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Badge variant="secondary">{listing.beds} Beds</Badge>
                  <Badge variant="secondary">{listing.baths} Baths</Badge>
                  <Badge variant="secondary">{listing.sqft} sq ft</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Name" />
              <Input placeholder="Email" type="email" />
              <Input placeholder="Phone" type="tel" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}