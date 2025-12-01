// src/components/events/event-details.tsx
import { Event } from '@/types/event'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, MapPin, Users } from 'lucide-react'

interface EventDetailsProps {
  event: Event
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <div className="space-y-6">
      {/* Full Description */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {event.fullDescription}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* What's Included */}
      {event.includes && event.includes.length > 0 && (
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Included</h2>
            <div className="grid gap-3">
              {event.includes.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Requirements */}
      {event.requirements && event.requirements.length > 0 && (
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Bring</h2>
            <div className="grid gap-3">
              {event.requirements.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Important Notes */}
      <Card className="border-0 shadow-lg bg-amber-50 border-amber-200">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-amber-900 mb-4">Important Information</h2>
          <div className="space-y-3 text-amber-800">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Arrival Time:</strong> Please arrive 30 minutes before the event starts for registration and seating.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Location Details:</strong> Specific venue details and parking information will be sent via email after registration.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Refund Policy:</strong> Full refunds available up to 7 days before the event. Contact support for cancellations.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}