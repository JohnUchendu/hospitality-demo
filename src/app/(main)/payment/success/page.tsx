// src/app/(main)/payment/success/page.tsx
'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, Loader2, Mail, Calendar } from 'lucide-react'

// Create a separate component that uses useSearchParams
function PaymentSuccessContent() {
  const searchParams = useSearchParams()
  const reference = searchParams.get('reference')
  const trxref = searchParams.get('trxref')
  
  const [paymentStatus, setPaymentStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [paymentData, setPaymentData] = useState<any>(null)

  useEffect(() => {
    if (reference) {
      verifyPayment(reference)
    }
  }, [reference])

  const verifyPayment = async (paymentReference: string) => {
    try {
      const response = await fetch('/api/paystack/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reference: paymentReference }),
      })

      const data = await response.json()

      if (data.status && data.data.status === 'success') {
        setPaymentStatus('success')
        setPaymentData(data.data)
        
        // Send confirmation email
        await sendConfirmationEmail(data.data)
        
        console.log('Payment verified successfully:', data.data)
      } else {
        setPaymentStatus('error')
      }
    } catch (error) {
      console.error('Payment verification error:', error)
      setPaymentStatus('error')
    }
  }

  const sendConfirmationEmail = async (paymentData: any) => {
    try {
      // Extract customer info from payment data
      const email = paymentData.customer.email
      const firstName = paymentData.metadata?.firstName || 'Beloved'
      
      // You would fetch event details from your database here
      // For now, using placeholder data
      const eventDetails = {
        title: paymentData.metadata?.eventTitle || 'Your Registered Event',
        date: new Date().toLocaleDateString(),
        location: 'Event Location',
        time: 'Event Time'
      }

      await fetch('/api/emails/event-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          eventTitle: eventDetails.title,
          eventDate: eventDetails.date,
          eventLocation: eventDetails.location,
          eventTime: eventDetails.time,
          amountPaid: paymentData.amount / 100,
          transactionId: paymentData.reference,
          eventDetails: 'Thank you for registering! More details will be sent closer to the event date.'
        }),
      })

      console.log('Confirmation email sent to:', email)
    } catch (error) {
      console.error('Failed to send confirmation email:', error)
      // Don't show this error to the user - payment was successful
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="border-0 shadow-xl">
          <CardContent className="p-8 text-center">
            {paymentStatus === 'loading' && (
              <div className="space-y-6">
                <Loader2 className="h-16 w-16 text-blue-600 animate-spin mx-auto" />
                <h1 className="text-2xl font-bold text-gray-900">Verifying Your Payment</h1>
                <p className="text-gray-600">
                  Please wait while we confirm your payment details...
                </p>
                <div className="text-sm text-gray-500">
                  Reference: {reference}
                </div>
              </div>
            )}

            {paymentStatus === 'success' && (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="bg-green-100 rounded-full p-4">
                    <CheckCircle className="h-16 w-16 text-green-600" />
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900">Payment Successful! 🎉</h1>
                
                <p className="text-lg text-gray-700">
                  Thank you for registering! Your payment has been confirmed and your spot is reserved.
                </p>

                {/* Payment Details */}
                <div className="bg-gray-50 rounded-lg p-6 space-y-3 text-left">
                  <h3 className="font-semibold text-gray-900 mb-4">Registration Details</h3>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount Paid:</span>
                    <span className="font-semibold">
                      ₦{(paymentData?.amount / 100).toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transaction ID:</span>
                    <span className="font-mono text-sm">{reference}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span>{new Date(paymentData?.paid_at || Date.now()).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span>{paymentData?.customer?.email}</span>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    What Happens Next?
                  </h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>• You will receive a confirmation email with event details</li>
                    <li>• Event joining instructions will be sent 24 hours before the event</li>
                    <li>• Keep this transaction reference for your records</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
                    <Link href="/events" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      View More Events
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="/">
                      Return to Homepage
                    </Link>
                  </Button>
                </div>
              </div>
            )}

            {paymentStatus === 'error' && (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="bg-red-100 rounded-full p-4">
                    <XCircle className="h-16 w-16 text-red-600" />
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900">Payment Verification Failed</h1>
                
                <p className="text-lg text-gray-700">
                  We couldn't verify your payment. Please contact support with your transaction reference.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    Reference: <strong>{reference}</strong>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild variant="outline" className="flex-1">
                    <Link href="/events">
                      Back to Events
                    </Link>
                  </Button>
                  
                  <Button asChild className="flex-1">
                    <a href="mailto:support@gospelhospitality.com">
                      Contact Support
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Main page component with Suspense
export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <Loader2 className="h-16 w-16 text-blue-600 animate-spin mx-auto" />
              <h1 className="text-2xl font-bold text-gray-900 mt-6">Loading Payment Details...</h1>
              <p className="text-gray-600 mt-2">
                Please wait while we load your payment information...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  )
}