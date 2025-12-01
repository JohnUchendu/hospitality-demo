// src/app/api/emails/event-confirmation/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { resend, emailConfig } from '@/lib/resend'
import EventRegistrationConfirmation from '@/emails/event-registration-confirmation'

export async function POST(request: NextRequest) {
  try {
    const { 
      email, 
      firstName, 
      eventTitle, 
      eventDate, 
      eventLocation, 
      eventTime, 
      amountPaid, 
      transactionId,
      eventDetails 
    } = await request.json()

    if (!email || !firstName || !eventTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: emailConfig.from,
      to: [email],
      replyTo: emailConfig.replyTo,
      subject: `Registration Confirmed: ${eventTitle}`,
      react: EventRegistrationConfirmation({
        firstName,
        eventTitle,
        eventDate,
        eventLocation,
        eventTime,
        amountPaid,
        transactionId,
        eventDetails
      }),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('Event confirmation email sent:', data?.id)
    return NextResponse.json({ success: true, emailId: data?.id })

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}