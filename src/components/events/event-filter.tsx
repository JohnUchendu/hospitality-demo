// src/components/events/event-filter.tsx
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, X } from 'lucide-react'

interface EventFilterProps {
  types: string[]
  locations: string[]
  selectedType: string
  selectedLocation: string
  onTypeChange: (type: string) => void
  onLocationChange: (location: string) => void
}

export function EventFilter({ 
  types, 
  locations, 
  selectedType, 
  selectedLocation, 
  onTypeChange, 
  onLocationChange 
}: EventFilterProps) {
  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      all: 'All Events',
      retreat: 'Retreats',
      workshop: 'Workshops',
      conference: 'Conferences',
      prayer: 'Prayer Sessions',
      special: 'Special Events'
    }
    return labels[type] || type
  }

  const getLocationLabel = (location: string) => {
    const labels: Record<string, string> = {
      all: 'All Locations',
      lagos: 'Lagos',
      abuja: 'Abuja',
      online: 'Online',
      'port-harcourt': 'Port Harcourt'
    }
    return labels[location] || location
  }

  const hasActiveFilters = selectedType !== 'all' || selectedLocation !== 'all'

  const clearFilters = () => {
    onTypeChange('all')
    onLocationChange('all')
  }

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filter Events</h3>
        </div>
        
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            Clear Filters
          </Button>
        )}
      </div>

      {/* Filter Chips */}
      <div className="space-y-4">
        {/* Event Type Filters */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Event Type</h4>
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => onTypeChange(type)}
                className={`rounded-full px-4 ${
                  selectedType === type 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'hover:bg-purple-50 hover:text-purple-700'
                }`}
              >
                {getTypeLabel(type)}
              </Button>
            ))}
          </div>
        </div>

        {/* Location Filters */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Location</h4>
          <div className="flex flex-wrap gap-2">
            {locations.map((location) => (
              <Button
                key={location}
                variant={selectedLocation === location ? "default" : "outline"}
                onClick={() => onLocationChange(location)}
                className={`rounded-full px-4 ${
                  selectedLocation === location 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                {getLocationLabel(location)}
                {location !== 'all' && (
                  <Badge 
                    variant="secondary" 
                    className={`ml-2 ${
                      selectedLocation === location 
                        ? 'bg-white text-blue-600' 
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {Math.floor(Math.random() * 8) + 2}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Showing events:</span>
          {selectedType !== 'all' && (
            <Badge variant="secondary" className="bg-purple-100 text-purple-700">
              {getTypeLabel(selectedType)}
            </Badge>
          )}
          {selectedLocation !== 'all' && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              {getLocationLabel(selectedLocation)}
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}