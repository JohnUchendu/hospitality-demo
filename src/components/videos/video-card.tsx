// src/components/videos/video-card.tsx
import { Video } from '@/types/video'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock } from 'lucide-react'

interface VideoCardProps {
  video: Video
  onClick: () => void
}

export function VideoCard({ video, onClick }: VideoCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      sermon: 'bg-blue-100 text-blue-800',
      testimonial: 'bg-green-100 text-green-800',
      teaching: 'bg-purple-100 text-purple-800',
      interview: 'bg-orange-100 text-orange-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getCategoryLabel = (category: string) => {
    const labels = {
      sermon: 'Sermon',
      testimonial: 'Testimony',
      teaching: 'Teaching',
      interview: 'Interview'
    }
    return labels[category as keyof typeof labels] || category
  }

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
      onClick={onClick}
    >
      {/* Video Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-purple-400 to-blue-600 rounded-t-lg overflow-hidden">
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white bg-opacity-90 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="h-8 w-8 text-purple-600 fill-current" />
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className={getCategoryColor(video.category)}>
            {getCategoryLabel(video.category)}
          </Badge>
        </div>

        {/* Duration */}
        {video.duration && (
          <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {video.duration}
          </div>
        )}

        {/* Featured Badge */}
        {video.featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="default" className="bg-amber-500 text-white">
              Featured
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-purple-700 transition-colors">
          {video.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {video.description}
        </p>
        
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>Published {new Date(video.publishedAt).toLocaleDateString()}</span>
          <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
            Watch Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}