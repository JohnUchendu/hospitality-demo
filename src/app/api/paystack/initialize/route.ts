// src/app/api/paystack/initialize/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, amount, eventId, metadata } = await request.json()

    console.log('Payment initialization request:', { email, amount, eventId })

    if (!email || !amount || !eventId) {
      return NextResponse.json(
        { error: 'Missing required fields: email, amount, eventId' },
        { status: 400 }
      )
    }

    // Validate Paystack secret key
    const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY
    if (!paystackSecretKey) {
      console.error('PAYSTACK_SECRET_KEY is not set')
      return NextResponse.json(
        { error: 'Payment configuration error' },
        { status: 500 }
      )
    }

    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${paystackSecretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Convert to kobo
        metadata: {
          eventId,
          ...metadata,
          custom_fields: [
            {
              display_name: "Event ID",
              variable_name: "event_id",
              value: eventId
            },
            {
              display_name: "Full Name",
              variable_name: "full_name", 
              value: `${metadata.firstName} ${metadata.lastName}`
            }
          ]
        },
        // UPDATED: Correct callback URL to success page
        callback_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/payment/success`,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Paystack API error:', data)
      return NextResponse.json(
        { error: data.message || 'Failed to initialize payment' },
        { status: response.status }
      )
    }

    if (!data.status) {
      console.error('Paystack returned false status:', data)
      return NextResponse.json(
        { error: data.message || 'Payment initialization failed' },
        { status: 400 }
      )
    }

    console.log('Payment initialized successfully:', {
      reference: data.data.reference,
      eventId,
      email,
      amount,
      authorization_url: data.data.authorization_url
    })

    // Here you would save to your database
    // await savePaymentRecord(data.data.reference, email, amount, eventId, metadata)

    return NextResponse.json(data)

  } catch (error) {
    console.error('Payment initialization error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}