// src/components/layout/admin-footer.tsx
export function AdminFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-sm text-gray-600">
            © 2024 Gospel Hospitality Admin • v1.0.0
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span>Welcome, Mr. Bob</span>
            <span className="hidden md:inline">•</span>
            <span>Last login: Today, 09:42 AM</span>
          </div>
        </div>
      </div>
    </footer>
  )
}