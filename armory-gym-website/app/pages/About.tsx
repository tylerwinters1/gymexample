import { Award, Users, Target, Heart } from "lucide-react"

export default function About() {
  const trainers = [
    {
      name: "Sarah Johnson",
      title: "Head Trainer & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years of experience, Sarah founded The Armory with a vision to revolutionize fitness and wellness.",
      certifications: ["NASM-CPT", "Precision Nutrition", "FMS Level 2"],
    },
    {
      name: "Mike Rodriguez",
      title: "Strength & Conditioning Coach",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former collegiate athlete specializing in strength training and sports performance enhancement.",
      certifications: ["CSCS", "USAW Level 1", "TRX Certified"],
    },
    {
      name: "Emily Chen",
      title: "Yoga & Recovery Specialist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Certified yoga instructor and recovery specialist focused on mobility and mindfulness.",
      certifications: ["RYT-500", "NASM-CES", "Graston Technique"],
    },
    {
      name: "David Thompson",
      title: "Nutrition Coach",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Registered dietitian helping members achieve their goals through personalized nutrition plans.",
      certifications: ["RD", "CSSD", "Precision Nutrition Level 2"],
    },
  ]

  const testimonials = [
    {
      name: "Jessica Martinez",
      text: "The Armory completely transformed my approach to fitness. The community here is incredible, and the trainers genuinely care about your success.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Robert Kim",
      text: "I've been a member for 2 years and have never felt stronger. The personalized approach and attention to detail sets The Armory apart.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Amanda Foster",
      text: "From nutrition coaching to strength training, The Armory provides everything I need. It's more than a gym - it's a lifestyle.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Community First",
      description: "We believe in building a supportive community where everyone feels welcome and motivated.",
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      title: "Goal-Oriented",
      description: "Every program is designed with specific, measurable goals to ensure your success.",
    },
    {
      icon: <Award className="h-8 w-8 text-red-600" />,
      title: "Excellence",
      description: "We maintain the highest standards in equipment, training, and member experience.",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Inclusive",
      description: "Fitness is for everyone. We welcome all fitness levels and backgrounds.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=400&width=1200"
            alt="The Armory Team"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-red-600">The Armory</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            More than just a gym - we're a community dedicated to transforming lives through fitness, wellness, and
            support.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
              <p className="text-lg text-gray-600 mb-6">
                At The Armory, we believe that true fitness goes beyond physical strength. We focus on creating a
                holistic approach to health that encompasses physical fitness, mental wellness, proper nutrition, and
                community support.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to revolutionize the approach to healthcare by promoting proactive and comprehensive
                care, empowering individuals to lead sustainable and healthy lifestyles. We consider all aspects of
                health and wellness, weaving them together to provide a complete picture of overall health.
              </p>
              <p className="text-lg text-gray-600">
                Every member's journey is unique, and we're here to support you every step of the way with personalized
                programs, expert guidance, and a community that celebrates your victories.
              </p>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Our Philosophy"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the experience for every member of The Armory
              community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certified trainers and specialists are passionate about helping you achieve your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{trainer.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{trainer.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{trainer.bio}</p>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-2">Certifications:</p>
                    <div className="flex flex-wrap gap-1">
                      {trainer.certifications.map((cert, certIndex) => (
                        <span key={certIndex} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the amazing people who make up The Armory community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Armory Member</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facility</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look inside The Armory and see our state-of-the-art equipment and welcoming spaces.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "/placeholder.svg?height=300&width=400",
              "/placeholder.svg?height=300&width=400",
              "/placeholder.svg?height=300&width=400",
              "/placeholder.svg?height=300&width=400",
              "/placeholder.svg?height=300&width=400",
              "/placeholder.svg?height=300&width=400",
            ].map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Facility ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
