// src/app/(main)/videos/page.tsx
import { VideoGrid } from '@/components/videos/video-grid'
import { getSampleVideos } from '@/lib/sample-data'

// This would be replaced with Sanity data later
async function getVideos() {
  // For now, using sample data
  return getSampleVideos()
}

export default async function VideosPage() {
  const videos = await getVideos()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <VideoGrid videos={videos} />
      </div>
    </div>
  )
}