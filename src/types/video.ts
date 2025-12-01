// src/types/video.ts
export interface Video {
  _id: string
  title: string
  videoUrl: string
  description: string
  category: 'sermon' | 'testimonial' | 'teaching' | 'interview'
  featured: boolean
  duration?: string
  thumbnail?: string
  publishedAt: string
  _createdAt: string
}