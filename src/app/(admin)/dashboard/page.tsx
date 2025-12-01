// src/app/(admin)/dashboard/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Users,
  Video,
  Mail,
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Plus
} from 'lucide-react'
import Link from 'next/link'

// Mock data - will be replaced with real data later
const stats = [
  {
    name: 'Total Events',
    value: '24',
    change: '+12%',
    changeType: 'increase',
    icon: Calendar,
    color: 'bg-blue-500'
  },
  {
    name: 'Active Users',
    value: '1,234',
    change: '+8%',
    changeType: 'increase',
    icon: Users,
    color: 'bg-green-500'
  },
  {
    name: 'Videos',
    value: '156',
    change: '+23%',
    changeType: 'increase',
    icon: Video,
    color: 'bg-purple-500'
  },
  {
    name: 'Emails Sent',
    value: '2,847',
    change: '-2%',
    changeType: 'decrease',
    icon: Mail,
    color: 'bg-amber-500'
  },
]

const recentActivities = [
  { id: 1, action: 'New event registration', user: 'John Doe', time: '2 min ago', type: 'success' },
  { id: 2, action: 'Video uploaded', user: 'Mr. Bob', time: '1 hour ago', type: 'info' },
  { id: 3, action: 'Payment failed', user: 'Sarah Smith', time: '2 hours ago', type: 'error' },
  { id: 4, action: 'Newsletter sent', user: 'System', time: '4 hours ago', type: 'info' },
  { id: 5, action: 'New user registered', user: 'Mike Johnson', time: '5 hours ago', type: 'success' },
]

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, Mr. Bob. Here's what's happening today.</p>
        </div>
        <Button asChild className="bg-purple-600 hover:bg-purple-700">
          <Link href="/admin/events-manage/new" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Event
          </Link>
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className={`flex items-center mt-2 text-sm ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                    }`}>
                    {stat.changeType === 'increase' ? (
                      <ArrowUp className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDown className="h-4 w-4 mr-1" />
                    )}
                    {stat.change} from last month
                  </div>
                </div>
                <div className={`${stat.color} rounded-lg p-3`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${activity.type === 'success' ? 'bg-green-500' :
                        activity.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                      }`} />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.user}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button asChild variant="outline" className="h-16 flex-col gap-2">
                <Link href="/admin/events/new">
                  <Calendar className="h-5 w-5" />
                  <span>Create Event</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-16 flex-col gap-2">
                <Link href="/admin/videos/new">
                  <Video className="h-5 w-5" />
                  <span>Upload Video</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-16 flex-col gap-2">
                <Link href="/admin/emails">
                  <Mail className="h-5 w-5" />
                  <span>Send Email</span>
                </Link>
              </Button>

              <Button asChild variant="outline" className="h-16 flex-col gap-2">
                <Link href="/admin/analytics">
                  <TrendingUp className="h-5 w-5" />
                  <span>View Reports</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Upcoming Events</CardTitle>
          <Button asChild variant="outline" size="sm">
            <Link href="/admin/events">View All</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((event) => (
              <div key={event} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-900">Spiritual Renewal Retreat</h4>
                  <p className="text-sm text-gray-600">Feb 16, 2024 • Lagos Retreat Center</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">42/50 Registered</p>
                  <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}