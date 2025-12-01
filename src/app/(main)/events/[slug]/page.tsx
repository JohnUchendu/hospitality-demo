// src/app/(main)/events/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { EventRegistration } from '@/components/events/event-registration'
import { EventDetails } from '@/components/events/event-details'
import { getSampleEvents } from '@/lib/sample-events-data'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  ArrowLeft,
  Shield,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

interface EventPageProps {
  params: {
    slug: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  const events = getSampleEvents()
  const event = events.find(e => e.slug === params.slug)

  if (!event) {
    notFound()
  }

  const availableSpots = event.maxAttendees - event.currentAttendees
  const isEarlyBird = new Date() < new Date(event.earlyBirdDeadline)
  const isAlmostFull = availableSpots < 10
  const registrationOpen = availableSpots > 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <Link 
          href="/events" 
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-200">
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </Badge>
                
                {isEarlyBird && (
                  <Badge className="bg-green-500 hover:bg-green-600 text-white animate-pulse">
                    🕊️ Early Bird Available
                  </Badge>
                )}
                
                {isAlmostFull && registrationOpen && (
                  <Badge variant="destructive" className="animate-pulse">
                    🔥 Only {availableSpots} spots left!
                  </Badge>
                )}

                {!registrationOpen && (
                  <Badge variant="secondary" className="bg-gray-500 text-white">
                    🎟️ Fully Booked
                  </Badge>
                )}
              </div>

              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                {event.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Event Details Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="text-sm text-gray-600">
                          {new Date(event.date).toLocaleTimeString('en-US', { 
                            hour: 'numeric', 
                            minute: '2-digit' 
                          })} - {new Date(event.endDate).toLocaleTimeString('en-US', { 
                            hour: 'numeric', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-semibold text-gray-900 capitalize">
                          {event.location}
                        </div>
                        <div className="text-sm text-gray-600">
                          {event.address}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {event.currentAttendees} / {event.maxAttendees} Registered
                        </div>
                        <div className="text-sm text-gray-600">
                          {registrationOpen ? `${availableSpots} spots available` : 'Waitlist only'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-purple-600" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          Secure Registration
                        </div>
                        <div className="text-sm text-gray-600">
                          Protected by Paystack
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Registration Progress</span>
                    <span className="font-semibold">
                      {Math.round((event.currentAttendees / event.maxAttendees) * 100)}% Full
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        isAlmostFull ? 'bg-red-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${(event.currentAttendees / event.maxAttendees) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Full Description */}
            <EventDetails event={event} />
          </div>

          {/* Registration Sidebar */}
          <div className="lg:col-span-1">
            <EventRegistration event={event} availableSpots={availableSpots} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for SSG
export async function generateStaticParams() {
  const events = getSampleEvents()
  
  return events.map((event) => ({
    slug: event.slug,
  }))
}