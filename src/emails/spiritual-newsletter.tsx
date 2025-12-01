// src/emails/spiritual-newsletter.tsx
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
  Img,
} from '@react-email/components'

interface SpiritualNewsletterProps {
  firstName?: string
  featuredEvent?: {
    title: string
    date: string
    description: string
    slug: string
  }
  featuredVideo?: {
    title: string
    description: string
    url: string
  }
  spiritualTip?: string
}

export function SpiritualNewsletter({
  firstName = 'Beloved',
  featuredEvent = {
    title: 'Monthly Prayer & Worship Night',
    date: 'March 15, 2024',
    description: 'Join us for an evening of powerful prayer, anointed worship, and spiritual renewal.',
    slug: 'monthly-prayer-worship-night'
  },
  featuredVideo = {
    title: 'Finding Peace in Turbulent Times',
    description: 'A powerful teaching on maintaining inner peace through faith during challenging seasons.',
    url: 'https://gospelhospitality.com/videos/peace-in-turbulent-times'
  },
  spiritualTip = 'Start each day with 5 minutes of gratitude prayer. Write down three things you\'re thankful for and watch how it transforms your perspective.'
}: SpiritualNewsletterProps) {
  const previewText = `Your Monthly Spiritual Nourishment from Gospel Hospitality`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gradient-to-br from-purple-50 to-blue-50 font-sans">
          <Container className="mx-auto py-8 px-4 max-w-2xl">
            {/* Header */}
            <Section className="text-center mb-8">
              <Heading className="text-4xl font-bold text-purple-600 mb-2">
                🙏 Gospel Hospitality
              </Heading>
              <Text className="text-lg text-gray-600">
                Your Monthly Spiritual Nourishment
              </Text>
            </Section>

            {/* Personal Greeting */}
            <Section className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <Text className="text-xl text-gray-700 mb-4">
                Hello <strong>{firstName}</strong>,
              </Text>
              <Text className="text-gray-700 leading-relaxed">
                This month, we're focusing on spiritual growth and community connection. 
                Here are some blessings we've prepared for you:
              </Text>
            </Section>

            {/* Featured Event */}
            <Section className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <Heading className="text-2xl font-bold text-gray-900 mb-4">
                🎯 Upcoming Event
              </Heading>
              <Text className="text-lg font-semibold text-purple-700 mb-2">
                {featuredEvent.title}
              </Text>
              <Text className="text-gray-600 mb-2">
                📅 {featuredEvent.date}
              </Text>
              <Text className="text-gray-700 mb-4">
                {featuredEvent.description}
              </Text>
              <Button
                href={`https://gospelhospitality.com/events/${featuredEvent.slug}`}
                className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Register Now
              </Button>
            </Section>

            {/* Featured Teaching */}
            <Section className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <Heading className="text-2xl font-bold text-gray-900 mb-4">
                📺 This Month's Featured Teaching
              </Heading>
              <Text className="text-lg font-semibold text-blue-700 mb-2">
                {featuredVideo.title}
              </Text>
              <Text className="text-gray-700 mb-4">
                {featuredVideo.description}
              </Text>
              <Button
                href={featuredVideo.url}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
              >
                Watch Teaching
              </Button>
            </Section>

            {/* Spiritual Tip */}
            <Section className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-6 mb-6 border border-green-200">
              <Heading className="text-xl font-bold text-green-800 mb-3">
                💫 Spiritual Growth Tip
              </Heading>
              <Text className="text-green-800 leading-relaxed">
                {spiritualTip}
              </Text>
            </Section>

            {/* Bible Verse */}
            <Section className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-6 mb-6 text-center">
              <Text className="text-purple-800 italic text-lg mb-2">
                "For I know the plans I have for you, declares the Lord, 
                plans to prosper you and not to harm you, plans to give you hope and a future."
              </Text>
              <Text className="text-purple-700 font-semibold">
                - Jeremiah 29:11
              </Text>
            </Section>

            {/* Community Update */}
            <Section className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <Heading className="text-2xl font-bold text-gray-900 mb-4">
                👥 Community Spotlight
              </Heading>
              <Text className="text-gray-700 mb-4">
                This month, we welcomed <strong>127 new members</strong> to our community 
                and witnessed <strong>15 baptisms</strong>. God is moving powerfully!
              </Text>
              <Text className="text-gray-600 text-sm">
                Join our community prayer every Wednesday at 6 PM.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="text-center text-gray-600 text-sm">
              <Text className="mb-4">
                You're receiving this email because you're part of the Gospel Hospitality family.
              </Text>
              <Text className="mb-2">
                <Link 
                  href="https://gospelhospitality.com/unsubscribe" 
                  className="text-purple-600"
                >
                  Unsubscribe
                </Link>
                {' • '}
                <Link 
                  href="https://gospelhospitality.com/preferences" 
                  className="text-purple-600"
                >
                  Email Preferences
                </Link>
              </Text>
              <Text>
                Gospel Hospitality Ministry • Lagos, Nigeria
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}