// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip middleware for login page
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next()
    }

    // Check for admin authentication
    const authToken = request.cookies.get('admin-auth')?.value
    const sessionToken = request.headers.get('authorization')

    // In a real app, you would verify JWT tokens here
    // For demo purposes, we'll allow access but you can add proper auth
    
    // Example: Redirect to login if not authenticated
    // if (!authToken) {
    //   return NextResponse.redirect(new URL('/admin/login', request.url))
    // }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}