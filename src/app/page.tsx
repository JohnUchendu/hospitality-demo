// src/app/(main)/page.tsx
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Play, 
  Calendar, 
  Users, 
  Star, 
  Clock, 
  ArrowRight,
  Shield,
  Heart
} from 'lucide-react'

// Temporary data - will be replaced with Sanity later
// In src/app/(main)/page.tsx - UPDATE THE featuredEvents ARRAY
const featuredEvents = [
  {
    id: '1',
    title: 'Spiritual Renewal Weekend Retreat',
    slug: 'spiritual-renewal-weekend-retreat', // ← ADD THIS
    description: 'A transformative weekend of prayer, teaching, and connection with God',
    date: '2024-02-15',
    location: 'Lagos Retreat Center',
    price: 25000,
    earlyBirdPrice: 20000,
    earlyBirdDeadline: '2024-01-31',
    maxAttendees: 50,
    currentAttendees: 42,
    image: '/retreat.jpg',
    type: 'retreat'
  },
  {
    id: '2',
    title: 'Gospel Hospitality Workshop',
    slug: 'gospel-hospitality-master-workshop', // ← ADD THIS
    description: 'Learn to create welcoming spaces that reflect God\'s love in your community',
    date: '2024-02-08',
    location: 'Online & In-Person',
    price: 15000,
    earlyBirdPrice: 12000,
    earlyBirdDeadline: '2024-01-25',
    maxAttendees: 30,
    currentAttendees: 28,
    image: '/workshop.jpg',
    type: 'workshop'
  },
  {
    id: '3',
    title: 'Family Prayer Conference',
    slug: 'annual-family-prayer-conference', // ← ADD THIS
    description: 'Strengthen your family through the power of prayer and spiritual connection',
    date: '2024-02-22',
    location: 'Abuja Convention Center',
    price: 35000,
    earlyBirdPrice: 30000,
    earlyBirdDeadline: '2024-02-08',
    maxAttendees: 100,
    currentAttendees: 67,
    image: '/conference.jpg',
    type: 'conference'
  }
]
const featuredVideos = [
  {
    id: '1',
    title: 'Finding Hope in Challenging Times',
    description: 'A powerful message about discovering purpose when life gets difficult',
    duration: '45:23',
    views: '2.4K',
    category: 'sermon',
    featured: true,
    thumbnail: '/hope-thumbnail.jpg'
  },
  {
    id: '2',
    title: 'Miracle Healing Testimony',
    description: 'An incredible story of God\'s healing power and transformation',
    duration: '18:45',
    views: '1.8K',
    category: 'testimonial',
    featured: true,
    thumbnail: '/healing-thumbnail.jpg'
  }
]

const stats = [
  { number: '5,000+', label: 'Lives Transformed' },
  { number: '200+', label: 'Events Hosted' },
  { number: '50+', label: 'Communities Reached' },
  { number: '98%', label: 'Satisfaction Rate' }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Addressing HOPE & BEAUTY */}
      <section className="relative h-screen bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 flex items-center justify-center text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10"></div>
        
        <div className="relative text-center space-y-8 px-4 max-w-6xl mx-auto z-10">
          <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-0 px-4 py-2">
            ✨ Transformative Gospel Hospitality
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Find Your
            <span className="block bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text text-transparent">
              Spiritual Home
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Experience God's love through inspiring teachings, transformative events, 
            and a community that feels like family. Your journey to spiritual fulfillment starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg rounded-full shadow-lg">
              <Link href="/events" className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Find Events
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20 px-8 py-3 text-lg rounded-full backdrop-blur-sm">
              <Link href="/videos" className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Watch Teachings
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm">
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-amber-300" />
              <span>Safe & Welcoming</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 rounded-full px-4 py-2">
              <Heart className="h-4 w-4 text-amber-300" />
              <span>Community Focused</span>
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 rounded-full px-4 py-2">
              <Users className="h-4 w-4 text-amber-300" />
              <span>5,000+ Members</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Urgency Section - SCARCITY & DESIRE */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm border-0 mb-4">
            ⚡ Limited Time Opportunity
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Early Bird Registration Ending Soon!
          </h2>
          
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Secure your spot at our transformative events before prices increase. 
            Don't miss this chance for spiritual growth at special rates.
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center min-w-20">
              <div className="text-2xl font-bold">07</div>
              <div className="text-sm opacity-90">Days</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center min-w-20">
              <div className="text-2xl font-bold">14</div>
              <div className="text-sm opacity-90">Hours</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center min-w-20">
              <div className="text-2xl font-bold">32</div>
              <div className="text-sm opacity-90">Minutes</div>
            </div>
          </div>

          <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-gray-100 rounded-full px-8">
            <Link href="/events" className="flex items-center gap-2">
              View Special Offers
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

    
{/* Featured Events - Addressing DREAMS & SAFETY */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <Badge variant="outline" className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
        🎯 Upcoming Experiences
      </Badge>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Transform Your Spiritual Journey
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Join our carefully crafted events designed to inspire growth, 
        build community, and deepen your connection with God.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {featuredEvents.map((event) => {
        const availableSpots = event.maxAttendees - event.currentAttendees
        const isEarlyBird = new Date() < new Date(event.earlyBirdDeadline)
        const spotsLeftPercent = (availableSpots / event.maxAttendees) * 100
        
        return (
          <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            {/* Scarcity Badge */}
            {availableSpots < 10 && (
              <div className="absolute top-4 right-4 z-10">
                <Badge variant="destructive" className="animate-pulse">
                  🔥 Only {availableSpots} left!
                </Badge>
              </div>
            )}

            {/* Event Image */}
            <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity"></div>
              {isEarlyBird && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 hover:bg-green-600">
                    🕊️ Early Bird
                  </Badge>
                </div>
              )}
            </div>

            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  {event.type}
                </Badge>
                <div className="text-right">
                  <div className="text-2xl font-bold text-amber-600">
                    ₦{isEarlyBird ? event.earlyBirdPrice.toLocaleString() : event.price.toLocaleString()}
                  </div>
                  {isEarlyBird && (
                    <div className="text-sm text-gray-500 line-through">
                      ₦{event.price.toLocaleString()}
                    </div>
                  )}
                </div>
              </div>

              <h3 className="font-bold text-xl mb-3 group-hover:text-purple-700 transition-colors">
                {event.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {event.description}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  {event.location}
                </div>
              </div>

              {/* Progress Bar - SCARCITY VISUAL */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Spots filled</span>
                  <span className="font-semibold">
                    {event.currentAttendees}/{event.maxAttendees}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(event.currentAttendees / event.maxAttendees) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* FIXED: Use event.slug instead of event.id */}
              <Button asChild className="w-full mt-4 rounded-full">
                <Link href={`/events/${event.slug}`}>
                  {availableSpots === 0 ? 'Join Waitlist' : 'Register Now'}
                </Link>
              </Button>
            </CardContent>
          </Card>
        )
      })}
    </div>

    <div className="text-center">
      <Button asChild variant="outline" size="lg" className="rounded-full">
        <Link href="/events" className="flex items-center gap-2">
          View All Events
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  </div>
</section>

      {/* Video Teachings - Addressing HOPE & INSPIRATION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-red-50 text-red-700 border-red-200">
              📺 Latest Teachings
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Spiritual Nourishment for Your Soul
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access powerful messages, inspiring testimonies, and transformative 
              teachings that will uplift and guide you on your spiritual journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredVideos.map((video) => (
              <Card key={video.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 relative">
                    <div className="aspect-video bg-gradient-to-br from-purple-400 to-blue-600 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 rounded-full p-3 transform group-hover:scale-110 transition-transform">
                          <Play className="h-6 w-6 text-purple-600 fill-current" />
                        </div>
                      </div>
                      {video.featured && (
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary" className="bg-amber-500 text-white">
                            <Star className="h-3 w-3 fill-current" />
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <CardContent className="md:w-3/5 p-6">
                    <Badge variant="outline" className="mb-3 bg-purple-50 text-purple-700">
                      {video.category}
                    </Badge>
                    
                    <h3 className="font-bold text-lg mb-2 group-hover:text-purple-700 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {video.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {video.duration}
                        </span>
                        <span>{video.views} views</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                        Watch Now
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="rounded-full bg-purple-600 hover:bg-purple-700">
              <Link href="/videos" className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Explore All Videos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Statistics - Building TRUST & PRIDE */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Our Impact in the Community</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Addressing ENGAGEMENT & DESIRE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4 bg-green-50 text-green-700 border-green-200">
              🤝 Join Our Family
            </Badge>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Transformative Journey?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Become part of a growing community that's experiencing God's love 
              through gospel hospitality. Your spiritual transformation awaits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-amber-500 hover:bg-amber-600 px-8">
                <Link href="/events" className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Attend an Event
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-50 px-8">
                <Link href="/videos" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Watch Teachings
                </Link>
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Join 5,000+ believers already on their spiritual journey
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}