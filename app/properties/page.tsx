'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
export default function PropertiesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
    const locationParam = searchParams.get('location') || ''
  const priceRangeParam = searchParams.get('priceRange') || ''
  const allProperties = [
    {
      title: "Elegant Estate",
      location: "Beverly Hills",
      price: 4250000,
      priceFormatted: "$4,250,000",
      beds: 5,
      baths: 4.5,
      sqft: "6,500",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Oceanfront Villa",
      location: "Malibu",
      price: 7850000,
      priceFormatted: "$7,850,000",
      beds: 6,
      baths: 5,
      sqft: "7,200",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1471&auto=format&fit=crop"
    },
    {
      title: "Modern Masterpiece",
      location: "Hollywood Hills",
      price: 5750000,
      priceFormatted: "$5,750,000",
      beds: 4,
      baths: 4.5,
      sqft: "5,800",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1475&auto=format&fit=crop"
    },
    {
      title: "Downtown Penthouse",
      location: "Los Angeles",
      price: 3500000,
      priceFormatted: "$3,500,000",
      beds: 3,
      baths: 3,
      sqft: "3,200",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1475&auto=format&fit=crop"
    },
    {
      title: "Coastal Dream Home",
      location: "Santa Monica",
      price: 6250000,
      priceFormatted: "$6,250,000",
      beds: 5,
      baths: 4,
      sqft: "5,500",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1475&auto=format&fit=crop"
    },
    {
      title: "Luxury Condo",
      location: "Beverly Hills",
      price: 2950000,
      priceFormatted: "$2,950,000",
      beds: 2,
      baths: 2.5,
      sqft: "2,200",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1475&auto=format&fit=crop"
    },
    {
      title: "Mediterranean Villa",
      location: "Pacific Palisades",
      price: 8500000,
      priceFormatted: "$8,500,000",
      beds: 6,
      baths: 5.5,
      sqft: "8,000",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1475&auto=format&fit=crop"
    },
    {
      title: "Modern Townhouse",
      location: "Santa Monica",
      price: 3250000,
      priceFormatted: "$3,250,000",
      beds: 3,
      baths: 2.5,
      sqft: "2,800",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1475&auto=format&fit=crop"
    }
  ]
  const [searchLocation, setSearchLocation] = useState(locationParam)
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRangeParam)
  const [filteredProperties, setFilteredProperties] = useState(allProperties)
  // Improved search function that's more forgiving
  const matchLocation = (propertyLocation: string, searchTerm: string) => {
    if (!searchTerm) return true
        const searchTerms = searchTerm.toLowerCase().split(' ')
    const locationWords = propertyLocation.toLowerCase().split(' ')
        // Check if any of the search terms match the beginning of any location word
    return searchTerms.every(term =>
      locationWords.some(word => word.includes(term))
    )
  }
  useEffect(() => {
    let filtered = allProperties
    // Filter by location if provided
    if (locationParam) {
      filtered = filtered.filter(property =>
        matchLocation(property.location, locationParam)
      )
    }
    // Filter by price range if provided
    if (priceRangeParam) {
      const [min, max] = priceRangeParam.split('-').map(Number)
      filtered = filtered.filter(property =>
        property.price >= min && property.price <= max
      )
    }
    setFilteredProperties(filtered)
  }, [locationParam, priceRangeParam])
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (searchLocation?.trim()) params.set('location', searchLocation.trim())
    if (selectedPriceRange) params.set('priceRange', selectedPriceRange)
    router.push(`/properties?${params.toString()}`)
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-[#1a365d] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Property Search</h1>
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
            <Input 
              placeholder="Enter city or area (e.g., Beverly Hills, Santa Monica)" 
              className="bg-white text-black"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            <Select 
              value={selectedPriceRange}
              onValueChange={setSelectedPriceRange}
            >
              <SelectTrigger className="bg-white text-black">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-3000000">Under $3M</SelectItem>
                <SelectItem value="3000000-5000000">$3M - $5M</SelectItem>
                <SelectItem value="5000000-7000000">$5M - $7M</SelectItem>
                <SelectItem value="7000000-100000000">$7M+</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Search Properties
            </Button>
          </form>
        </div>
      </div>
      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            {filteredProperties.length} Properties Found
          </h2>
          {locationParam && (
            <p className="text-gray-600">
              Showing results for: {locationParam}
              {priceRangeParam && ` in selected price range`}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-white/90 text-[#1a365d]">
                  {property.location}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{property.title}</CardTitle>
                <div className="text-2xl font-bold text-[#1a365d]">
                  {property.priceFormatted}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.sqft} Sq Ft</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#1a365d] hover:bg-[#2d4a7c]">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}