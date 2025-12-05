"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  BookOpen,
  Sparkles,
  Target,
  Globe,
  ArrowRight,
  Quote,
} from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "Love & Compassion",
    description:
      "We believe in showing God's unconditional love to everyone who walks through our doors, creating a safe space where all feel welcomed and valued.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Building authentic relationships and fostering a family atmosphere where believers can grow together in faith and support one another.",
  },
  {
    icon: BookOpen,
    title: "Biblical Teaching",
    description:
      "Grounding every message, event, and interaction in sound biblical principles that transform lives and deepen spiritual understanding.",
  },
  {
    icon: Sparkles,
    title: "Transformative Growth",
    description:
      "Creating experiences and teachings that inspire real change, helping individuals discover their purpose and reach their spiritual potential.",
  },
];

const timeline = [
  {
    year: "2015",
    title: "The Beginning",
    description:
      "Started with a small prayer group of 12 people, united by a vision to practice radical gospel hospitality in our community.",
  },
  {
    year: "2017",
    title: "First Major Event",
    description:
      "Hosted our inaugural retreat with 50 attendees, marking the start of our transformative events ministry.",
  },
  {
    year: "2020",
    title: "Digital Expansion",
    description:
      "Launched online teachings and virtual events, extending our reach across Nigeria and beyond during challenging times.",
  },
  {
    year: "2024",
    title: "Growing Impact",
    description:
      "Now serving 5,000+ members across 50+ communities, hosting 200+ events annually with a 98% satisfaction rate.",
  },
];

const leadership = [
  {
    name: "Pastor David Okonkwo",
    role: "Founder & Lead Pastor",
    image: "/leader-1.jpg",
    bio: "With 15+ years in ministry, Pastor David leads with a heart for hospitality and discipleship.",
  },
  {
    name: "Pastor Grace Adeleke",
    role: "Ministry Director",
    image: "/leader-2.jpg",
    bio: "Passionate about creating welcoming spaces and empowering the next generation of believers.",
  },
  {
    name: "Evangelist John Eze",
    role: "Events Coordinator",
    image: "/leader-3.jpg",
    bio: "Dedicated to crafting transformative experiences that bring people closer to God.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-4 md:mb-6 bg-white/20 text-white backdrop-blur-sm border-0 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm"
            >
              ✨ Our Story
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Where Faith Meets{" "}
              <span className="block bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text text-transparent">
                Hospitality
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed px-4">
              Gospel Hospitality Ministries exists to create welcoming spaces where
              people experience the transformative power of God's love, grow in
              their faith, and discover their divine purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-blue-50">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="bg-purple-600 p-2.5 md:p-3 rounded-full">
                    <Target className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                  To demonstrate the gospel through radical hospitality, creating
                  transformative experiences that inspire spiritual growth, foster
                  authentic community, and equip believers to live out their faith
                  with confidence and purpose.
                </p>
                
                <Button asChild className="rounded-full bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                  <Link href="/mission" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="bg-amber-600 p-2.5 md:p-3 rounded-full">
                    <Globe className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                  To be a beacon of hope and transformation across Nigeria and
                  beyond, where every person encounters God's love through
                  exceptional hospitality, discovers their spiritual family, and
                  becomes empowered to impact their world.
                </p>
                
                <div className="flex items-center gap-2 text-amber-700 font-semibold text-sm md:text-base">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
                  <span>Reaching 50+ Communities & Growing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 bg-blue-50 text-blue-700 border-blue-200 text-xs md:text-sm">
              📖 Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
              A Story of Faith & Growth
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              From humble beginnings to a thriving community touching thousands of lives
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-amber-600 hidden md:block"></div>

              {timeline.map((milestone, index) => (
                <div key={index} className="relative mb-8 md:mb-12 md:ml-20">
                  {/* Year Dot */}
                  <div className="absolute -left-[4.5rem] top-2 hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full border-4 border-purple-600 font-bold text-purple-600">
                    <span className="text-xs">{milestone.year}</span>
                  </div>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-5 md:p-6">
                      <div className="flex items-center gap-3 mb-3 md:hidden">
                        <Badge className="bg-purple-600 text-xs">{milestone.year}</Badge>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 bg-purple-50 text-purple-700 border-purple-200 text-xs md:text-sm">
              💎 What We Stand For
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              The principles that guide everything we do and shape who we are as a community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-2.5 md:p-3 rounded-lg flex-shrink-0">
                        <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                          {value.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="outline" className="mb-3 md:mb-4 bg-green-50 text-green-700 border-green-200 text-xs md:text-sm">
              👥 Meet Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
              Led by Faith, Driven by Purpose
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Dedicated leaders committed to serving God and our community with excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Leader Image with Next.js Image */}
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-200">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>

                <CardContent className="p-5 md:p-6 text-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-3 md:mb-4 text-sm md:text-base">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-purple-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 md:mb-6 opacity-50" />
            
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-4 md:mb-6 px-4">
              "Gospel Hospitality Ministries didn't just teach me about God's love—they
              showed me. The warmth, acceptance, and genuine care I experienced here
              transformed my life and gave me a spiritual family I never knew I needed."
            </blockquote>
            
            <div>
              <p className="font-bold text-lg md:text-xl">Sarah Adeyemi</p>
              <p className="text-purple-200 text-sm md:text-base">Member since 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
              Become Part of Our Story
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 px-4">
              Whether you're seeking spiritual growth, authentic community, or a place
              to call home, we welcome you with open arms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-amber-500 hover:bg-amber-600 px-8 w-full sm:w-auto"
              >
                <Link href="/events">Join an Event</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-50 px-8 w-full sm:w-auto"
              >
                <Link href="/videos">Watch Our Teachings</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}