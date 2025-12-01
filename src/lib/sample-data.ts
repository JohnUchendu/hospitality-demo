// src/lib/sample-data.ts
import { Video } from '@/types/video'

export function getSampleVideos(): Video[] {
  return [
    {
      _id: '1',
      title: 'Finding Hope in Difficult Times',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'A powerful message about discovering hope and purpose even when facing life\'s greatest challenges. Learn how to transform your perspective and find strength in faith.',
      category: 'sermon',
      featured: true,
      duration: '45:23',
      publishedAt: '2024-01-15',
      _createdAt: '2024-01-15'
    },
    {
      _id: '2',
      title: 'Miracle Healing Testimony',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'An incredible story of healing and transformation that will strengthen your faith and remind you of God\'s power to change any situation.',
      category: 'testimonial',
      featured: true,
      duration: '18:45',
      publishedAt: '2024-01-12',
      _createdAt: '2024-01-12'
    },
    {
      _id: '3',
      title: 'The Power of Gospel Hospitality',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Learn how to practice gospel hospitality in your daily life and create spaces where people can encounter God\'s love and transformation.',
      category: 'teaching',
      featured: false,
      duration: '32:10',
      publishedAt: '2024-01-10',
      _createdAt: '2024-01-10'
    },
    {
      _id: '4',
      title: 'Interview with Pastor John',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'An inspiring conversation about ministry, leadership, and the future of gospel work in our communities.',
      category: 'interview',
      featured: false,
      duration: '52:34',
      publishedAt: '2024-01-08',
      _createdAt: '2024-01-08'
    },
    {
      _id: '5',
      title: 'Walking in Purpose',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'Discover how to align your life with God\'s purpose and walk confidently in the calling He has for you.',
      category: 'sermon',
      featured: false,
      duration: '38:17',
      publishedAt: '2024-01-05',
      _createdAt: '2024-01-05'
    },
    {
      _id: '6',
      title: 'From Addiction to Freedom',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      description: 'A raw and powerful testimony of how God\'s grace can break every chain and bring complete restoration.',
      category: 'testimonial',
      featured: true,
      duration: '25:42',
      publishedAt: '2024-01-03',
      _createdAt: '2024-01-03'
    }
  ]
}