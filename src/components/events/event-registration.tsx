// src/components/events/event-registration.tsx
'use client'

import { useState } from 'react'
import { Event } from '@/types/event'
import { EventRegistrationForm } from './event-registration-form'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Shield } from 'lucide-react'

interface EventRegistrationProps {
  event: Event
  availableSpots: number
}

export function EventRegistration({ event, availableSpots }: EventRegistrationProps) {
  const [showForm, setShowForm] = useState(false)
  const isEarlyBird = new Date() < new Date(event.earlyBirdDeadline)
  const registrationOpen = availableSpots > 0

  const handleRegisterClick = () => {
    setShowForm(true)
  }

  if (showForm) {
  return (
    <EventRegistrationForm 
      event={event} 
      availableSpots={availableSpots}
      onBack={() => setShowForm(false)}  // Make sure this is passed
    />
  )
}

  return (
    <Card className="sticky top-8 border-0 shadow-xl">
      <CardContent className="p-6">
        {/* Pricing */}
        <div className="text-center mb-6">
          {isEarlyBird ? (
            <div className="space-y-2">
              <div className="text-3xl font-bold text-amber-600">
                ₦{event.earlyBirdPrice.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 line-through">
                ₦{event.price.toLocaleString()}
              </div>
              <Badge className="bg-green-500 text-white">
                🕊️ Early Bird Price
              </Badge>
              <div className="text-xs text-gray-500">
                Until {new Date(event.earlyBirdDeadline).toLocaleDateString()}
              </div>
            </div>
          ) : (
            <div className="text-3xl font-bold text-amber-600">
              ₦{event.price.toLocaleString()}
            </div>
          )}
        </div>

        {/* Scarcity Alert */}
        {availableSpots < 10 && registrationOpen && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 text-red-800">
              <Users className="h-4 w-4" />
              <span className="font-semibold">Almost Full!</span>
            </div>
            <p className="text-sm text-red-700 mt-1">
              Only {availableSpots} spots remaining. Register now to secure your place.
            </p>
          </div>
        )}

        {!registrationOpen && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 text-amber-800">
              <Users className="h-4 w-4" />
              <span className="font-semibold">Fully Booked</span>
            </div>
            <p className="text-sm text-amber-700 mt-1">
              This event is currently full. Join the waitlist to be notified if spots open up.
            </p>
          </div>
        )}

        {/* Key Information */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-sm">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className="h-4 w-4 text-gray-500" />
            <span>
              {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {' '}
              {new Date(event.endDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Users className="h-4 w-4 text-gray-500" />
            <span>{availableSpots} of {event.maxAttendees} spots available</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Shield className="h-4 w-4 text-green-500" />
            <span className="text-green-600">Secure payment with Paystack</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleRegisterClick}
          disabled={!registrationOpen}
          className={`w-full py-3 px-4 rounded-full font-semibold text-white transition-all ${
            registrationOpen
              ? 'bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {registrationOpen ? 'Register Now' : 'Join Waitlist'}
        </button>

        {/* Security Badge */}
        <div className="text-center mt-4">
          <div className="text-xs text-gray-500">
            🔒 Your information is secure and encrypted
          </div>
        </div>
      </CardContent>
    </Card>
  )
}