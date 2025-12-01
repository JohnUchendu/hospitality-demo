// src/types/event.ts
export interface Event {
  id: string
  title: string
  slug: string
  description: string
  fullDescription: string
  date: string
  endDate: string
  location: string
  address: string
  price: number
  earlyBirdPrice: number
  earlyBirdDeadline: string
  maxAttendees: number
  currentAttendees: number
  type: 'retreat' | 'workshop' | 'conference' | 'prayer' | 'special'
  image: string
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
  includes: string[]
  requirements?: string[]
  _createdAt: string
}

export interface Registration {
  eventId: string
  email: string
  firstName: string
  lastName: string
  phone: string
  amount: number
  status: 'pending' | 'completed' | 'failed'
  paystackReference: string
}