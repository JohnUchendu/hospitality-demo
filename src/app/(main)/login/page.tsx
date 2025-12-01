import Link from "next/link";

// src/app/(main)/login/page.tsx
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 py-12">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h1>
          <p className="text-gray-600 text-center mb-6">Admin login available at /admin</p>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
            <Link href="/admin/dashboard">
              Sign In
            </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}