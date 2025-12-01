// src/components/forms/event-registration-form.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Event } from '@/types/event'
import { ArrowLeft, Loader2 } from 'lucide-react' // Import ArrowLeft

const formSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phone: z.string().min(10)
})

interface EventRegistrationFormProps {
  event: Event
  availableSpots: number
  onBack: () => void  // Add this
}

export function EventRegistrationForm({ event, availableSpots, onBack }: EventRegistrationFormProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: ""
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (availableSpots === 0) {
      setError('This event is fully booked. Please join the waitlist.')
      return
    }

    setIsProcessing(true)
    setError('')

    try {
      const isEarlyBird = new Date() < new Date(event.earlyBirdDeadline)
      const amount = isEarlyBird ? event.earlyBirdPrice : event.price

      const response = await fetch('/api/paystack/initialize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: values.email,
          amount: amount,
          eventId: event.id,
          metadata: values
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to initialize payment')
      }

      // Redirect to Paystack checkout
      if (data.data?.authorization_url) {
        window.location.href = data.data.authorization_url
      } else {
        throw new Error('No payment URL received')
      }
    } catch (error) {
      console.error('Payment error:', error)
      setError(error instanceof Error ? error.message : 'Failed to process registration. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Back Button Header */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="p-0 h-8 w-8"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h3 className="font-semibold text-lg">Complete Registration</h3>
          <p className="text-sm text-gray-600">Secure your spot at this event</p>
        </div>
      </div>

      {/* Scarcity Badge */}
      {availableSpots < 10 && (
        <div className="bg-red-100 border border-red-300 text-red-800 px-4 py-3 rounded">
          <strong>Hurry!</strong> Only {availableSpots} spots remaining
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+234 800 000 0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isProcessing || availableSpots === 0}
          >
            {isProcessing ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Processing...
              </>
            ) : availableSpots === 0 ? (
              'Join Waitlist'
            ) : (
              `Register Now - ₦${event.price}`
            )}
          </Button>

          {availableSpots === 0 && (
            <p className="text-sm text-red-600 text-center">
              This event is fully booked. Please check other upcoming events.
            </p>
          )}
        </form>
      </Form>
    </div>
  )
}