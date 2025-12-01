// src/app/api/emails/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { resend, emailConfig } from '@/lib/resend'
import { SpiritualNewsletter } from '@/emails/spiritual-newsletter'

export async function POST(request: NextRequest) {
  try {
    const { 
      emails,
      firstName = 'Beloved',
      featuredEvent,
      featuredVideo,
      spiritualTip
    } = await request.json()

    if (!emails || !Array.isArray(emails)) {
      return NextResponse.json(
        { error: 'Emails array is required' },
        { status: 400 }
      )
    }

    // Send to multiple recipients
    const emailPromises = emails.map((email: string) =>
      resend.emails.send({
        from: emailConfig.from,
        to: [email],
        replyTo: emailConfig.replyTo,
        subject: '✨ Your Monthly Spiritual Nourishment',
        react: SpiritualNewsletter({
          firstName,
          featuredEvent,
          featuredVideo,
          spiritualTip
        }),
      })
    )

    const results = await Promise.allSettled(emailPromises)

    const successful = results.filter(result => result.status === 'fulfilled').length
    const failed = results.filter(result => result.status === 'rejected').length

    console.log(`Newsletter sent: ${successful} successful, ${failed} failed`)

    return NextResponse.json({
      success: true,
      sent: successful,
      failed: failed,
      total: emails.length
    })

  } catch (error) {
    console.error('Newsletter sending error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}