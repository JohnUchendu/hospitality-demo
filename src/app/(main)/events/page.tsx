// src/app/(main)/events/page.tsx
import { EventGrid } from '@/components/events/event-grid'
import { EventFilter } from '@/components/events/event-filter'
import { getSampleEvents } from '@/lib/sample-events-data'
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Clock } from 'lucide-react'

async function getEvents() {
  return getSampleEvents()
}

export default async function EventsPage() {
  const events = await getEvents()

  const upcomingEvents = events.filter(event => 
    new Date(event.date) >= new Date() && event.status === 'upcoming'
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section - Addressing HOPE & DREAMS */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transformative
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Spiritual Events
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our carefully crafted experiences designed to deepen your faith, 
            build community, and bring you closer to God. Your journey to spiritual 
            fulfillment starts here.
          </p>
          
          {/* Quick Stats - Building TRUST */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-sm">
              <CardContent className="p-4 text-center">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{upcomingEvents.length}</div>
                <div className="text-sm text-gray-600">Upcoming Events</div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-sm">
              <CardContent className="p-4 text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">5K+</div>
                <div className="text-sm text-gray-600">Lives Touched</div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-sm">
              <CardContent className="p-4 text-center">
                <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Locations</div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-sm">
              <CardContent className="p-4 text-center">
                <Clock className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <EventGrid events={upcomingEvents} />
      </div>
    </div>
  )
}