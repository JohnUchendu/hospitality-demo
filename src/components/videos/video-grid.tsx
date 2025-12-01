
// src/components/videos/video-grid.tsx
'use client'

import { useState } from 'react'
import { Video } from '@/types/video'
import { VideoCard } from './video-card'
import { VideoFilter } from './video-filter'
import { VideoModal } from './video-modal'

interface VideoGridProps {
  videos: Video[]
}

export function VideoGrid({ videos }: VideoGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  const categories = ['all', 'sermon', 'testimonial', 'teaching', 'interview']
  
  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory)

  return (
    <div className="space-y-8">
      {/* Emotional Header - Addressing HOPE */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Spiritual Nourishment</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Find hope, inspiration, and transformation through our collection of teachings, 
          testimonies, and sermons that will uplift your spirit.
        </p>
      </div>

      {/* Filter - Providing CLARITY */}
      <VideoFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Video Grid - Delivering INSPIRATION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <VideoCard
            key={video._id}
            video={video}
            onClick={() => setSelectedVideo(video)}
          />
        ))}
      </div>

      {/* Empty State - Maintaining HOPE */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🎬</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No videos found
          </h3>
          <p className="text-gray-600">
            We're constantly adding new content to inspire and uplift.
          </p>
        </div>
      )}

      {/* Video Modal - Fulfilling DESIRE */}
      <VideoModal
        video={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  )
}