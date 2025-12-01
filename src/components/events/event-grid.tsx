// src/components/events/event-grid.tsx
'use client'

import { useState } from 'react'
import { Event } from '@/types/event'
import { EventCard } from './event-card'
import { EventFilter } from './event-filter'

interface EventGridProps {
  events: Event[]
}

export function EventGrid({ events }: EventGridProps) {
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedLocation, setSelectedLocation] = useState<string>('all')

  const types = ['all', 'retreat', 'workshop', 'conference', 'prayer', 'special']
  const locations = ['all', 'lagos', 'abuja', 'online', 'port-harcourt']

  const filteredEvents = events.filter(event => {
    const typeMatch = selectedType === 'all' || event.type === selectedType
    const locationMatch = selectedLocation === 'all' || 
      event.location.toLowerCase().includes(selectedLocation)
    return typeMatch && locationMatch
  })

  return (
    <div className="space-y-8">
      {/* Filter Section - Providing CLARITY & PEACE */}
      <EventFilter
        types={types}
        locations={locations}
        selectedType={selectedType}
        selectedLocation={selectedLocation}
        onTypeChange={setSelectedType}
        onLocationChange={setSelectedLocation}
      />

      {/* Events Grid - Delivering INSPIRATION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Empty State - Maintaining HOPE */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 text-6xl mb-4">📅</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            No events found
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            We're constantly planning new transformative experiences. 
            Check back soon or browse our video teachings while you wait.
          </p>
        </div>
      )}
    </div>
  )
}