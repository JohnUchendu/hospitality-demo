// src/components/admin/user-dropdown.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  User, 
  Settings, 
  LogOut, 
  HelpCircle,
  Shield
} from 'lucide-react'
import { Button } from "@/components/ui/button"

export function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    // In a real app, you would:
    // 1. Clear authentication tokens
    // 2. Clear user data from storage
    // 3. Call logout API endpoint
    
    console.log('Logging out...')
    
    // Simulate logout process
    localStorage.removeItem('admin-auth')
    sessionStorage.removeItem('admin-session')
    
    // Redirect to login page
    router.push('/admin/login')
  }

  const handleProfile = () => {
    router.push('/admin/profile')
  }

  const handleSettings = () => {
    router.push('/admin/settings')
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <div className="h-8 w-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-white">MB</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Mr. Bob</p>
            <p className="text-xs leading-none text-gray-600">
              mr.bob@gospelhospitality.com
            </p>
            <div className="flex items-center gap-1 mt-1">
              <Shield className="h-3 w-3 text-green-500" />
              <span className="text-xs text-green-600">Administrator</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleProfile} className="cursor-pointer">
          <User className="h-4 w-4 mr-2" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSettings} className="cursor-pointer">
          <Settings className="h-4 w-4 mr-2" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <HelpCircle className="h-4 w-4 mr-2" />
          <span>Help & Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={handleLogout}
          className="cursor-pointer text-red-600 focus:text-red-600"
        >
          <LogOut className="h-4 w-4 mr-2" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}