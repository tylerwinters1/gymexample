import { Link } from "react-router-dom"
import { ArrowRight, Users, Target, Award, Clock } from "lucide-react"

export default function Home() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Expert Trainers",
      description: "Certified professionals dedicated to your success",
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Personalized Programs",
      description: "Tailored workouts designed for your goals",
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: "Proven Results",
      description: "Track record of transforming lives",
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "24/7 Access",
      description: "Train on your schedule, any time",
    },
  ]

  const services = [
    {
      title: "Personal Training",
      image: "/placeholder.svg?height=300&width=400",
      description: "One-on-one coaching tailored to your specific goals and fitness level.",
    },
    {
      title: "Group Classes",
      image: "/placeholder.svg?height=300&width=400",
      description: "High-energy group workouts that build community and motivation.",
    },
    {
      title: "Strength Training",
      image: "/placeholder.svg?height=300&width=400",
      description: "State-of-the-art equipment for building muscle and power.",
    },
    {
      title: "Recovery Services",
      image: "/placeholder.svg?height=300&width=400",
      description: "Professional recovery and rehabilitation services.",
    },
    {
      title: "Sports Performance",
      image: "/placeholder.svg?height=300&width=400",
      description: "Elite training programs for competitive athletes.",
    },
    {
      title: "Nutrition Coaching",
      image: "/placeholder.svg?height=300&width=400",
      description: "Expert guidance on nutrition and meal planning.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="The Armory Gym"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <p className="text-xl text-red-400 mb-4">"A health and wellness experience unlike any other"</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Forging Strength,
              <br />
              <span className="text-red-600">Building Community</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              THE ARMORY is a health and fitness hub, a nucleus, a center, a source for enhancing optimal health for
              all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/membership"
                className="bg-red-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
              >
                Join Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/classes"
                className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                View Classes
              </Link>
              <Link
                to="/contact"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">We are THE ARMORY</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                THE ARMORY is a health and fitness hub, a nucleus, a center, a source for enhancing optimal health for
                all. It aims to revolutionize the approach to healthcare in America by promoting proactive and
                comprehensive care, empowering individuals to lead a sustainable and healthy lifestyle. It is a health
                and wellness model for our time.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We consider all aspects of health and wellness, weaving them together to provide a complete picture of a
                person's overall health.
              </p>
              <Link
                to="/about"
                className="bg-gray-900 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose The Armory?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to achieve your fitness goals and maintain a healthy lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do:</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join The Armory community today and start your journey to optimal health and fitness.
          </p>
          <Link
            to="/membership"
            className="bg-white text-red-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
