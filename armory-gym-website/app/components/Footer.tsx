import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              THE <span className="text-red-600">ARMORY</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Forging Strength, Building Community. A health and wellness experience unlike any other.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-600 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-red-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/classes" className="text-gray-300 hover:text-red-600 transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-300 hover:text-red-600 transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-red-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-red-600" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-red-600" />
                <span className="text-gray-300">info@wearethearmory.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-red-600" />
                <span className="text-gray-300">123 Fitness St, City, ST 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} The Armory Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
