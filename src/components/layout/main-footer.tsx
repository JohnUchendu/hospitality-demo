// src/components/layout/main-footer.tsx
import Link from 'next/link'
import { 
  BookOpen, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  MapPin,
  Phone
} from 'lucide-react'

const footerSections = [
  {
    title: 'Ministry',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/mission' },
      { name: 'Beliefs', href: '/beliefs' },
      { name: 'Leadership', href: '/leadership' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Events', href: '/events' },
      { name: 'Videos', href: '/videos' },
      { name: 'Teachings', href: '/teachings' },
      { name: 'Prayer Requests', href: '/prayer' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Get Involved', href: '/volunteer' },
      { name: 'Donate', href: '/donate' },
      { name: 'Prayer Groups', href: '/groups' },
    ],
  },
]

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'YouTube', href: '#', icon: Youtube },
]

export function MainFooter() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-white rounded-lg p-2">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Gospel</span>
                <span className="text-xl font-bold text-amber-400">Hospitality</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming lives through gospel hospitality, inspiring teachings, 
              and a welcoming community that reflects God's love and grace.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+234 800 000 0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@gospelhospitality.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="bg-white/10 hover:bg-white/20 rounded-lg p-2 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Gospel Hospitality Ministry. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}