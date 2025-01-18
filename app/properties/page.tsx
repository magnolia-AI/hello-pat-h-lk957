'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useSearchParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
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
      type: "Single Family",
      yearBuilt: "2020",
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
      type: "Villa",
      yearBuilt: "2019",
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
      type: "Single Family",
      yearBuilt: "2021",
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
      type: "Penthouse",
      yearBuilt: "2018",
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
      type: "Single Family",
      yearBuilt: "2020",
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
      type: "Condo",
      yearBuilt: "2019",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1475&auto=format&fit=crop"
    }
  ]
  const [searchLocation, setSearchLocation] = useState(locationParam)
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRangeParam)
  const [filteredProperties, setFilteredProperties] = useState(allProperties)
  const [selectedType, setSelectedType] = useState<string>("")
  const [bedrooms, setBedrooms] = useState<string>("")
  const propertyTypes = Array.from(new Set(allProperties.map(p => p.type)))
  const matchLocation = (propertyLocation: string, searchTerm: string) => {
    if (!searchTerm) return true
    const searchTerms = searchTerm.toLowerCase().split(' ')
    const locationWords = propertyLocation.toLowerCase().split(' ')
    return searchTerms.every(term =>
      locationWords.some(word => word.includes(term))
    )
  }
  useEffect(() => {
    let filtered = allProperties
    if (locationParam) {
      filtered = filtered.filter(property =>
        matchLocation(property.location, locationParam)
      )
    }
    if (priceRangeParam) {
      const [min, max] = priceRangeParam.split('-').map(Number)
      filtered = filtered.filter(property =>
        property.price >= min && property.price <= max
      )
    }
    if (selectedType) {
      filtered = filtered.filter(property => property.type === selectedType)
    }
    if (bedrooms) {
      filtered = filtered.filter(property => property.beds.toString() === bedrooms)
    }
    setFilteredProperties(filtered)
  }, [locationParam, priceRangeParam, selectedType, bedrooms])
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (searchLocation?.trim()) params.set('location', searchLocation.trim())
    if (selectedPriceRange) params.set('priceRange', selectedPriceRange)
    router.push(`/properties?${params.toString()}`)
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-[300px] bg-[#1a365d]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-4">Find Your Dream Home</h1>
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <Input 
              placeholder="Location" 
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
            <Select value={bedrooms} onValueChange={setBedrooms}>
              <SelectTrigger className="bg-white text-black">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                {[2,3,4,5,6].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}+ Beds
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Search Properties
            </Button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="space-y-6">
            <Card className="p-4">
              <h3 className="font-semibold mb-4">Property Type</h3>
              <ScrollArea className="h-[200px]">
                <div className="space-y-2">
                  {propertyTypes.map((type) => (
                    <div key={type} className="flex items-center">
                      <Button
                        variant={selectedType === type ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => setSelectedType(type === selectedType ? "" : type)}
                      >
                        {type}
                      </Button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
                            <Separator className="my-4" />
                            <div className="space-y-4">
                <h3 className="font-semibold">Quick Filters</h3>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setSelectedPriceRange("0-3000000")}
                  >
                    Under $3M
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setBedrooms("4")}
                  >
                    4+ Bedrooms
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          {/* Property Grid */}
          <div className="md:col-span-3">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {filteredProperties.length} Properties Found
              </h2>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property, index) => (
                <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-white/90 text-[#1a365d]">
                      {property.type}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{property.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {property.location}
                    </CardDescription>
                    <div className="text-2xl font-bold text-[#1a365d]">
                      {property.priceFormatted}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="text-center">
                        <div className="font-semibold">{property.beds}</div>
                        <div className="text-xs">Beds</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{property.baths}</div>
                        <div className="text-xs">Baths</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold">{property.sqft}</div>
                        <div className="text-xs">Sq Ft</div>
                      </div>
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
      </div>
    </div>
  )
}