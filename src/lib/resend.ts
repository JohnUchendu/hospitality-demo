// src/lib/resend.ts
import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

// Email sender configuration
export const emailConfig = {
  from: 'Gospel Hospitality <notifications@gospelhospitality.com>',
  replyTo: 'support@gospelhospitality.com',
}