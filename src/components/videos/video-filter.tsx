// src/components/videos/video-filter.tsx
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface VideoFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function VideoFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: VideoFilterProps) {
  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      all: 'All Content',
      sermon: 'Sermons',
      testimonial: 'Testimonies',
      teaching: 'Teachings',
      interview: 'Interviews'
    }
    return labels[category] || category
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-4 ${
            selectedCategory === category 
              ? 'bg-purple-600 text-white hover:bg-purple-700' 
              : 'hover:bg-purple-50 hover:text-purple-700'
          }`}
        >
          {getCategoryLabel(category)}
          {category !== 'all' && (
            <Badge 
              variant="secondary" 
              className={`ml-2 ${
                selectedCategory === category 
                  ? 'bg-white text-purple-600' 
                  : 'bg-purple-100 text-purple-700'
              }`}
            >
              {/* This would be dynamic count in real implementation */}
              {Math.floor(Math.random() * 20) + 5}
            </Badge>
          )}
        </Button>
      ))}
    </div>
  )
}