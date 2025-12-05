"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+234 802 345 6789", "+234 803 456 7890"],
    action: "tel:+2348023456789",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@gospelhospitality.ng", "events@gospelhospitality.ng"],
    action: "mailto:info@gospelhospitality.ng",
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: ["123 Faith Avenue, Victoria Island", "Lagos, Nigeria"],
    action: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM"],
    action: null,
  },
];

const socialMedia = [
  { icon: Facebook, name: "Facebook", url: "https://facebook.com", color: "bg-blue-600" },
  { icon: Instagram, name: "Instagram", url: "https://instagram.com", color: "bg-pink-600" },
  { icon: Twitter, name: "Twitter", url: "https://twitter.com", color: "bg-sky-500" },
  { icon: Youtube, name: "YouTube", url: "https://youtube.com", color: "bg-red-600" },
];

const inquiryTypes = [
  "General Inquiry",
  "Event Registration",
  "Partnership Opportunity",
  "Prayer Request",
  "Volunteer Interest",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 bg-white/20 text-white backdrop-blur-sm border-0 px-4 py-2"
            >
              📬 Get In Touch
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              We'd Love to{" "}
              <span className="block bg-gradient-to-r from-amber-300 to-amber-100 bg-clip-text text-transparent">
                Hear From You
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Have questions? Need prayer? Want to get involved? Our team is here to connect with you 
              and help you find your place in our community.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                      <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We'll respond to your message shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name and Email Row */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      {/* Phone and Inquiry Type Row */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                            placeholder="+234 xxx xxx xxxx"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Inquiry Type *
                          </label>
                          <select
                            name="inquiryType"
                            required
                            value={formData.inquiryType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition bg-white"
                          >
                            <option value="">Select an option</option>
                            {inquiryTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition resize-none"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>

                      <p className="text-sm text-gray-500 text-center">
                        By submitting this form, you agree to our privacy policy.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar - Takes 1 column */}
            <div className="space-y-6">
              {/* Quick Contact Cards */}
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-lg flex-shrink-0">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-gray-600 mb-1">
                              {info.action ? (
                                <a
                                  href={info.action}
                                  className="hover:text-purple-600 transition-colors"
                                >
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              {/* Social Media Card */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-blue-50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                    Connect With Us
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {socialMedia.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${social.color} hover:opacity-90 text-white p-3 rounded-full transition-all hover:scale-110`}
                          aria-label={social.name}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
              📍 Find Us
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our Location
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Come experience worship and fellowship with us. We're located in the heart of Lagos.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="h-[500px] bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                {/* Replace this with actual Google Maps embed */}
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">
                    Google Maps integration goes here
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    123 Faith Avenue, Victoria Island, Lagos
                  </p>
                  <Button
                    asChild
                    className="mt-4 bg-purple-600 hover:bg-purple-700 rounded-full"
                  >
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-amber-50 text-amber-700 border-amber-200">
              ❓ Quick Questions
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  What are your service times?
                </h3>
                <p className="text-gray-600">
                  We have services every Sunday at 8:00 AM and 10:30 AM, with midweek services on Wednesdays at 6:00 PM.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  How do I register for events?
                </h3>
                <p className="text-gray-600">
                  You can register for our events online through our Events page or contact our office directly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Is there parking available?
                </h3>
                <p className="text-gray-600">
                  Yes, we have ample parking space available for all attendees. Our parking lot opens 30 minutes before services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Can I volunteer?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We welcome volunteers. Select "Volunteer Interest" in the contact form above to get started.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Community?
            </h2>
            
            <p className="text-xl opacity-90 mb-8">
              Don't wait—join us at our next event or service. Your spiritual family is waiting!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-amber-500 hover:bg-amber-600 px-8"
              >
                <a href="/events">View Upcoming Events</a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white text-black hover:bg-white hover:text-purple-900 px-8"
              >
                <a href="/about">Learn More About Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}