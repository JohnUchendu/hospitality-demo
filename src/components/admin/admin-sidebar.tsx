// src/components/admin/admin-sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Calendar, 
  Video, 
  Users, 
  Mail, 
  Settings,
  BookOpen,
  BarChart3
} from 'lucide-react'
import { cn } from '@/lib/utils'

 // In src/components/admin/admin-sidebar.tsx - UPDATE the navigation array
const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard }, // ← Updated path
  { name: 'Events', href: '/admin/events-manage', icon: Calendar },
  { name: 'Videos', href: '/admin/videos', icon: Video },
  { name: 'Teachings', href: '/admin/teachings', icon: BookOpen },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Emails', href: '/admin/emails', icon: Mail },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex flex-col flex-grow pt-5 bg-white border-r border-gray-200 overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 px-4 mb-8">
          <div className="bg-purple-600 rounded-lg p-2">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div className="ml-3">
            <h1 className="text-lg font-semibold text-gray-900">Gospel Hospitality</h1>
            <p className="text-sm text-gray-500">Admin Panel</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-grow flex flex-col">
          <nav className="flex-1 px-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'bg-purple-100 text-purple-700 border-r-2 border-purple-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <item.icon
                    className={cn(
                      'mr-3 flex-shrink-0 h-5 w-5',
                      isActive ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-500'
                    )}
                  />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* User Profile */}
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-white">MB</span>
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">Mr. Bob</p>
              <p className="text-xs font-medium text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}