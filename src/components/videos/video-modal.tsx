// src/components/videos/video-modal.tsx
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Video } from '@/types/video'
import { X, Share2, Download } from 'lucide-react'

interface VideoModalProps {
  video: Video | null
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  if (!video) return null

  const getVideoEmbedUrl = (url: string) => {
    // This would handle YouTube, Vimeo, etc. in real implementation
    // For now, we'll use a placeholder
    return url
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: video.description,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <h2 className="text-xl font-semibold pr-8">{video.title}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          {/* Video Player */}
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              src={getVideoEmbedUrl(video.videoUrl)}
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>

          {/* Video Actions */}
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleShare} className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share Blessing
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>

          {/* Video Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About This Video</h3>
            <p className="text-gray-700 leading-relaxed">{video.description}</p>
            
            <div className="flex gap-4 text-sm text-gray-600">
              <span>Category: <strong className="capitalize">{video.category}</strong></span>
              <span>Published: <strong>{new Date(video.publishedAt).toLocaleDateString()}</strong></span>
              {video.duration && (
                <span>Duration: <strong>{video.duration}</strong></span>
              )}
            </div>
          </div>

          {/* Call to Action - Inspiring FURTHER ENGAGEMENT */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border">
            <h4 className="font-semibold text-lg mb-2">Want to go deeper?</h4>
            <p className="text-gray-700 mb-4">
              Join our next live session or explore our training programs to continue 
              your spiritual journey.
            </p>
            <div className="flex gap-3">
              <Button className="bg-purple-600 hover:bg-purple-700">
                View Upcoming Events
              </Button>
              <Button variant="outline">
                Explore Teachings
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}