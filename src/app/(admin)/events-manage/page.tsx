// src/app/(admin)/events/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Calendar, 
  MapPin, 
  Users, 
  Search, 
  Plus,
  Edit,
  MoreVertical
} from 'lucide-react'
import { getSampleEvents } from '@/lib/sample-events-data'

export default function EventsManagementPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const events = getSampleEvents()

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusBadge = (event: any) => {
    const now = new Date()
    const eventDate = new Date(event.date)
    
    if (eventDate < now) {
      return <Badge variant="secondary">Completed</Badge>
    } else if (event.currentAttendees >= event.maxAttendees) {
      return <Badge variant="destructive">Full</Badge>
    } else {
      return <Badge className="bg-green-500">Active</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Events Management</h1>
          <p className="text-gray-600">Create and manage your events and registrations</p>
        </div>
        <Button asChild className="bg-purple-600 hover:bg-purple-700">
          <Link href="/admin/events/new" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Event
          </Link>
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">All Events</Button>
              <Button variant="outline" size="sm">Active</Button>
              <Button variant="outline" size="sm">Upcoming</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Events Grid */}
      <div className="grid gap-6">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    {getStatusBadge(event)}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="capitalize">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{event.currentAttendees} / {event.maxAttendees} registered</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

                  {/* Progress Bar */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Registration Progress</span>
                      <span className="font-semibold">
                        {Math.round((event.currentAttendees / event.maxAttendees) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(event.currentAttendees / event.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold text-amber-600">
                      ₦{event.price.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/admin/events/${event.id}/edit`} className="flex items-center gap-1">
                          <Edit className="h-3 w-3" />
                          Edit
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <Card className="border-0 shadow-sm text-center py-12">
          <CardContent>
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm ? 'Try adjusting your search terms' : 'Get started by creating your first event'}
            </p>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="/admin/events/new" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create Event
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}