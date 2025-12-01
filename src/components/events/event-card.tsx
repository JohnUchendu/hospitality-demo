// src/components/events/event-card.tsx
import { Event } from '@/types/event'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const availableSpots = event.maxAttendees - event.currentAttendees
  const isEarlyBird = new Date() < new Date(event.earlyBirdDeadline)
  const isAlmostFull = availableSpots < (event.maxAttendees * 0.2) // 20% spots left
  const isFillingFast = availableSpots < (event.maxAttendees * 0.5) // 50% spots left
  
  const getTypeColor = (type: string) => {
    const colors = {
      retreat: 'bg-green-100 text-green-800 border-green-200',
      workshop: 'bg-blue-100 text-blue-800 border-blue-200',
      conference: 'bg-purple-100 text-purple-800 border-purple-200',
      prayer: 'bg-amber-100 text-amber-800 border-amber-200',
      special: 'bg-red-100 text-red-800 border-red-200'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getTypeLabel = (type: string) => {
    const labels = {
      retreat: 'Retreat',
      workshop: 'Workshop',
      conference: 'Conference',
      prayer: 'Prayer',
      special: 'Special Event'
    }
    return labels[type as keyof typeof labels] || type
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden h-full flex flex-col">
      {/* Scarcity Badges */}
      <div className="absolute top-4 right-4 z-10 space-y-2">
        {isEarlyBird && (
          <Badge className="bg-green-500 hover:bg-green-600 text-white animate-pulse">
            🕊️ Early Bird
          </Badge>
        )}
        {isAlmostFull && availableSpots > 0 && (
          <Badge variant="destructive" className="animate-pulse">
            🔥 {availableSpots} left!
          </Badge>
        )}
        {isFillingFast && !isAlmostFull && (
          <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
            ⚡ Filling fast
          </Badge>
        )}
      </div>

      {/* Event Image */}
      <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity"></div>
        <div className="absolute bottom-4 left-4">
          <Badge variant="secondary" className={getTypeColor(event.type)}>
            {getTypeLabel(event.type)}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6 flex-1 flex flex-col">
        {/* Price & Date */}
        <div className="flex justify-between items-start mb-3">
          <div className="text-sm text-gray-500">
            {new Date(event.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric',
              year: 'numeric'
            })}
          </div>
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

        {/* Title & Description */}
        <h3 className="font-bold text-xl mb-3 group-hover:text-purple-700 transition-colors line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2 flex-1">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4" />
            {new Date(event.date).toLocaleDateString('en-US', { 
              weekday: 'short', 
              month: 'short', 
              day: 'numeric' 
            })}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="capitalize">{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            {new Date(event.date).toLocaleTimeString('en-US', { 
              hour: 'numeric', 
              minute: '2-digit' 
            })}
          </div>
        </div>

        {/* Progress Bar - SCARCITY VISUAL */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Spots filled</span>
            <span className="font-semibold">
              {event.currentAttendees}/{event.maxAttendees}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${
                isAlmostFull ? 'bg-red-500' : 
                isFillingFast ? 'bg-orange-500' : 'bg-green-500'
              }`}
              style={{ width: `${(event.currentAttendees / event.maxAttendees) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* CTA Button */}
      {/* // In src/components/events/event-card.tsx - UPDATE THE BUTTON */}
<Button asChild className="w-full rounded-full group/btn">
  <Link href={`/events/${event.slug}`} className="flex items-center justify-center gap-2">
    {availableSpots === 0 ? (
      <>
        <Users className="h-4 w-4" />
        Join Waitlist
      </>
    ) : (
      <>
        Register Now
        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
      </>
    )}
  </Link>
</Button>
      </CardContent>
    </Card>
  )
}