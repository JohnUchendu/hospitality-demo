// src/emails/event-registration-confirmation.tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
  Button,
} from '@react-email/components'

interface EventRegistrationConfirmationProps {
  firstName: string
  eventTitle: string
  eventDate: string
  eventLocation: string
  eventTime: string
  amountPaid: number
  transactionId: string
  eventDetails?: string
}

export function EventRegistrationConfirmation({
  firstName = 'John',
  eventTitle = 'Spiritual Renewal Retreat',
  eventDate = 'February 16, 2024',
  eventLocation = 'Lagos Retreat Center',
  eventTime = '9:00 AM',
  amountPaid = 25000,
  transactionId = 'PSK_123456',
  eventDetails = 'Please arrive 30 minutes early for registration. Bring your Bible and notebook.'
}: EventRegistrationConfirmationProps) {
  const previewText = `Your registration for ${eventTitle} is confirmed!`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto py-8 px-4">
            {/* Header */}
            <Section className="text-center mb-8">
              <Heading className="text-3xl font-bold text-purple-600 mb-2">
                Gospel Hospitality
              </Heading>
              <Text className="text-lg text-gray-600">
                Transformative Spiritual Experiences
              </Text>
            </Section>

            {/* Confirmation Icon */}
            <Section className="text-center mb-8">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <span className="text-2xl">✨</span>
              </div>
            </Section>

            {/* Main Content */}
            <Section className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <Heading className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Registration Confirmed!
              </Heading>

              <Text className="text-lg text-gray-700 mb-6">
                Dear <strong>{firstName}</strong>,
              </Text>

              <Text className="text-gray-700 mb-6">
                Thank you for registering for <strong>{eventTitle}</strong>. 
                We're excited to have you join us for this transformative experience!
              </Text>

              {/* Event Details */}
              <Section className="bg-gray-50 rounded-lg p-4 mb-6">
                <Heading className="text-lg font-semibold text-gray-900 mb-3">
                  Event Details
                </Heading>
                <Text className="text-gray-700 mb-2">
                  <strong>Date:</strong> {eventDate}
                </Text>
                <Text className="text-gray-700 mb-2">
                  <strong>Time:</strong> {eventTime}
                </Text>
                <Text className="text-gray-700 mb-2">
                  <strong>Location:</strong> {eventLocation}
                </Text>
                <Text className="text-gray-700">
                  <strong>Amount Paid:</strong> ₦{amountPaid.toLocaleString()}
                </Text>
              </Section>

              {/* Transaction Details */}
              <Section className="mb-6">
                <Text className="text-sm text-gray-600">
                  <strong>Transaction ID:</strong> {transactionId}
                </Text>
              </Section>

              {/* Important Information */}
              {eventDetails && (
                <Section className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                  <Heading className="text-lg font-semibold text-amber-900 mb-2">
                    Important Information
                  </Heading>
                  <Text className="text-amber-800 text-sm">
                    {eventDetails}
                  </Text>
                </Section>
              )}

              {/* Call to Action */}
              <Section className="text-center">
                <Button
                  href="https://gospelhospitality.com/events"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-lg"
                >
                  View More Events
                </Button>
              </Section>
            </Section>

            {/* Footer */}
            <Section className="text-center text-gray-600 text-sm">
              <Text className="mb-2">
                Need help? Contact us at{' '}
                <Link href="mailto:support@gospelhospitality.com" className="text-purple-600">
                  support@gospelhospitality.com
                </Link>
              </Text>
              <Text>
                Gospel Hospitality Ministry • Bringing God's Love to Communities
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default EventRegistrationConfirmation