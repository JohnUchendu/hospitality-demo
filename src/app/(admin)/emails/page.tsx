// src/app/(admin)/emails/page.tsx
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Users, Mail } from 'lucide-react'

export default function EmailAdminPage() {
  const [emails, setEmails] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [result, setResult] = useState<any>(null)

  const sendBulkEmail = async () => {
    if (!emails || !subject || !message) {
      alert('Please fill all fields')
      return
    }

    setIsSending(true)
    setResult(null)

    try {
      const emailList = emails.split('\n').filter(email => email.trim())
      
      const response = await fetch('/api/emails/broadcast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emails: emailList,
          subject,
          message
        }),
      })

      const data = await response.json()
      setResult(data)
      
      if (data.success) {
        setEmails('')
        setSubject('')
        setMessage('')
      }
    } catch (error) {
      console.error('Email sending error:', error)
      setResult({ error: 'Failed to send emails' })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3">
        <Mail className="h-8 w-8 text-purple-600" />
        <h1 className="text-3xl font-bold">Email Management</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Send Newsletter */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5" />
              Send Spiritual Newsletter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={async () => {
                setIsSending(true)
                const response = await fetch('/api/emails/newsletter', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    emails: ['subscribers@example.com'], // Would come from your database
                    spiritualTip: 'Start each morning with a prayer of gratitude for three specific blessings in your life.'
                  }),
                })
                const data = await response.json()
                setResult(data)
                setIsSending(false)
              }}
              disabled={isSending}
              className="w-full"
            >
              {isSending ? 'Sending...' : 'Send Monthly Newsletter'}
            </Button>
            <p className="text-sm text-gray-600">
              Send the monthly spiritual nourishment newsletter to all subscribers.
            </p>
          </CardContent>
        </Card>

        {/* Bulk Email */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Send Custom Message
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Textarea
              placeholder="Email addresses (one per line)"
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
              rows={4}
            />
            <Textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
            />
            <Button 
              onClick={sendBulkEmail}
              disabled={isSending}
              className="w-full"
            >
              {isSending ? 'Sending...' : 'Send Emails'}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Results */}
      {result && (
        <Card className={result.error ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'}>
          <CardContent className="p-4">
            <pre className="text-sm whitespace-pre-wrap">
              {JSON.stringify(result, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  )
}