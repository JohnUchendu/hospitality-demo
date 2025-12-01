// src/lib/sample-events-data.ts
import { Event } from '@/types/event'

export function getSampleEvents(): Event[] {
  return [
    {
      id: '1',
      title: 'Spiritual Renewal Weekend Retreat',
      slug: 'spiritual-renewal-weekend-retreat',
      description: 'A transformative weekend of prayer, teaching, and deep connection with God in a peaceful natural setting.',
      fullDescription: 'This weekend retreat is designed to help you disconnect from the busyness of life and reconnect with God. Through guided prayer sessions, inspiring teachings, and quiet reflection time, you\'ll experience spiritual renewal and leave feeling refreshed and empowered in your faith journey.',
      date: '2024-02-16T09:00:00Z',
      endDate: '2024-02-18T17:00:00Z',
      location: 'Lagos',
      address: 'Lagos Retreat Center, Lekki Phase 1, Lagos',
      price: 25000,
      earlyBirdPrice: 20000,
      earlyBirdDeadline: '2024-01-31T23:59:59Z',
      maxAttendees: 50,
      currentAttendees: 42,
      type: 'retreat',
      image: '/retreat.jpg',
      status: 'upcoming',
      includes: [
        '2 nights accommodation',
        'All meals (breakfast, lunch, dinner)',
        'Teaching sessions',
        'Prayer workshops',
        'Welcome package',
        'Certificate of participation'
      ],
      requirements: [
        'Comfortable clothing',
        'Bible and notebook',
        'Open heart for spiritual growth'
      ],
      _createdAt: '2024-01-10T00:00:00Z'
    },
    {
      id: '2',
      title: 'Gospel Hospitality Master Workshop',
      slug: 'gospel-hospitality-master-workshop',
      description: 'Learn to create welcoming spaces that truly reflect God\'s love and transform your community interactions.',
      fullDescription: 'This hands-on workshop will teach you the principles of gospel hospitality and how to apply them in your home, church, and community. You\'ll learn practical skills for creating welcoming environments that make people feel valued and loved.',
      date: '2024-02-08T10:00:00Z',
      endDate: '2024-02-08T16:00:00Z',
      location: 'Online',
      address: 'Virtual Event - Link will be provided after registration',
      price: 15000,
      earlyBirdPrice: 12000,
      earlyBirdDeadline: '2024-01-25T23:59:59Z',
      maxAttendees: 30,
      currentAttendees: 28,
      type: 'workshop',
      image: '/workshop.jpg',
      status: 'upcoming',
      includes: [
        '6-hour intensive workshop',
        'Practical workbook',
        'Certificate of completion',
        'Access to recording',
        'Community support group access'
      ],
      _createdAt: '2024-01-08T00:00:00Z'
    },
    {
      id: '3',
      title: 'Annual Family Prayer Conference',
      slug: 'annual-family-prayer-conference',
      description: 'Strengthen your family bonds through the power of prayer and spiritual connection in this life-changing conference.',
      fullDescription: 'Join hundreds of families for a day of powerful prayer, inspiring teachings, and practical workshops designed to strengthen family relationships through faith. Learn to build a prayer-centered home that stands strong through life\'s challenges.',
      date: '2024-02-22T08:00:00Z',
      endDate: '2024-02-22T18:00:00Z',
      location: 'Abuja',
      address: 'Abuja International Conference Center, Central Area, Abuja',
      price: 35000,
      earlyBirdPrice: 30000,
      earlyBirdDeadline: '2024-02-08T23:59:59Z',
      maxAttendees: 100,
      currentAttendees: 67,
      type: 'conference',
      image: '/conference.jpg',
      status: 'upcoming',
      includes: [
        'Full day conference access',
        'Lunch and refreshments',
        'Conference materials',
        'Family prayer guide',
        'Children\'s program (ages 5-12)'
      ],
      _createdAt: '2024-01-05T00:00:00Z'
    },
    {
      id: '4',
      title: 'Night of Miracles Prayer Session',
      slug: 'night-of-miracles-prayer-session',
      description: 'Experience the power of corporate prayer as we seek God for miracles, healing, and breakthrough together.',
      fullDescription: 'Join us for an intense night of prayer where we believe God for miracles in every area of life. This powerful prayer session will include worship, prophetic prayer, and corporate intercession for healing, breakthrough, and transformation.',
      date: '2024-02-29T19:00:00Z',
      endDate: '2024-02-29T22:00:00Z',
      location: 'Port Harcourt',
      address: 'Grace Cathedral, GRA Phase 2, Port Harcourt',
      price: 5000,
      earlyBirdPrice: 0, // Free early bird
      earlyBirdDeadline: '2024-02-22T23:59:59Z',
      maxAttendees: 200,
      currentAttendees: 156,
      type: 'prayer',
      image: '/prayer.jpg',
      status: 'upcoming',
      includes: [
        '3-hour prayer session',
        'Prayer booklet',
        'Anointed worship',
        'Prayer teams available'
      ],
      _createdAt: '2024-01-12T00:00:00Z'
    },
    {
      id: '5',
      title: 'Leadership in Ministry Special Training',
      slug: 'leadership-in-ministry-special-training',
      description: 'Advanced training for church leaders and ministry workers on effective leadership based on biblical principles.',
      fullDescription: 'This special training is designed for current and emerging leaders in ministry. Learn practical leadership skills, team building strategies, and spiritual principles that will help you lead effectively and make a lasting impact in your ministry.',
      date: '2024-03-07T09:00:00Z',
      endDate: '2024-03-07T17:00:00Z',
      location: 'Lagos',
      address: 'Leadership Center, Victoria Island, Lagos',
      price: 40000,
      earlyBirdPrice: 35000,
      earlyBirdDeadline: '2024-02-21T23:59:59Z',
      maxAttendees: 40,
      currentAttendees: 22,
      type: 'special',
      image: '/training.jpg',
      status: 'upcoming',
      includes: [
        'Full day training',
        'Leadership manual',
        'Lunch and refreshments',
        'Certificate of leadership',
        'Mentorship session'
      ],
      _createdAt: '2024-01-15T00:00:00Z'
    }
  ]
}