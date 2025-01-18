'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
export default function Home() {
  const featuredListings = [
    {
      title: "Elegant Estate",
      location: "Beverly Hills, CA",
      price: "$4,250,000",
      beds: 5,
      baths: 4.5,
      sqft: "6,500",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Oceanfront Villa",
      location: "Malibu, CA",
      price: "$7,850,000",
      beds: 6,
      baths: 5,
      sqft: "7,200",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1471&auto=format&fit=crop"
    },
    {
      title: "Modern Masterpiece",
      location: "Hollywood Hills, CA",
      price: "$5,750,000",
      beds: 4,
      baths: 4.5,
      sqft: "5,800",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1475&auto=format&fit=crop"
    }
  ]
  const stats = [
    { value: "500+", label: "Properties Sold" },
    { value: "$1B+", label: "Total Sales" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Years Experience" }
  ]
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop')",
            filter: "brightness(0.5)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 leading-tight">Luxury Real Estate Excellence</h1>
          <p className="text-2xl mb-12 font-light">Curating Exceptional Properties for Discerning Clients</p>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Location" className="bg-white/90 text-black" />
              <Input placeholder="Price Range" className="bg-white/90 text-black" />
              <Button className="bg-[#1a365d] hover:bg-[#2d4a7c] text-white h-12">
                Search Properties
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-[#1a365d] text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Listings */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of prestigious properties, each offering unique luxury and sophistication
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredListings.map((listing, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="relative">
                <img 
                  src={listing.image} 
                  alt={listing.title} 
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-white/90 text-[#1a365d]">
                  Featured
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{listing.title}</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {listing.location}
                </CardDescription>
                <div className="text-2xl font-bold text-[#1a365d]">
                  {listing.price}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{listing.beds} Bedrooms</span>
                  <span>{listing.baths} Bathrooms</span>
                  <span>{listing.sqft} Sq Ft</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#1a365d] hover:bg-[#2d4a7c]">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Schedule a Consultation</h2>
          <p className="text-gray-600 mb-12">
            Let our luxury real estate experts guide you to your perfect property
          </p>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Personal Consultation</CardTitle>
              <CardDescription>
                Complete the form below for a confidential discussion about your real estate goals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="First Name" className="h-12" />
                <Input placeholder="Last Name" className="h-12" />
              </div>
              <Input placeholder="Email Address" type="email" className="h-12" />
              <Input placeholder="Phone Number" type="tel" className="h-12" />
              <Button className="w-full h-12 bg-[#1a365d] hover:bg-[#2d4a7c] text-lg">
                Request Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}