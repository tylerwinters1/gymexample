import { Clock, Users, MapPin } from "lucide-react"

export default function Classes() {
  const classTypes = [
    {
      name: "Strength Training",
      description: "Build muscle and increase power with our structured strength programs.",
      duration: "60 min",
      intensity: "High",
      image: "/placeholder.svg?height=200&width=300",
      benefits: ["Muscle building", "Bone density", "Metabolism boost", "Functional strength"],
    },
    {
      name: "HIIT Conditioning",
      description: "High-intensity interval training for maximum calorie burn and cardiovascular fitness.",
      duration: "45 min",
      intensity: "Very High",
      image: "/placeholder.svg?height=200&width=300",
      benefits: ["Fat burning", "Cardio fitness", "Time efficient", "Metabolic boost"],
    },
    {
      name: "Yoga & Mobility",
      description: "Improve flexibility, balance, and mindfulness through guided yoga practice.",
      duration: "60 min",
      intensity: "Low-Medium",
      image: "/placeholder.svg?height=200&width=300",
      benefits: ["Flexibility", "Stress relief", "Balance", "Mind-body connection"],
    },
    {
      name: "Olympic Lifting",
      description: "Learn proper technique for Olympic lifts with expert coaching.",
      duration: "75 min",
      intensity: "High",
      image: "/placeholder.svg?height=200&width=300",
      benefits: ["Power development", "Technique mastery", "Athletic performance", "Coordination"],
    },
    {
      name: "Bootcamp",
      description: "Military-inspired workouts combining strength and cardio challenges.",
      duration: "50 min",
      intensity: "High",
      image: "/placeholder.svg?height=200&width=300",
      benefits: ["Full body workout", "Team motivation", "Varied exercises", "Mental toughness"],
    },
    {
      name: "Recovery & Stretch",
      description: "Active recovery sessions focusing on mobility and muscle restoration.",
      duration: "45 min",
      intensity: "Low",
      image: "/placeholder.svg?height=200&width=300",
      benefits: ["Muscle recovery", "Injury prevention", "Relaxation", "Improved mobility"],
    },
  ]

  const weeklySchedule = [
    {
      day: "Monday",
      classes: [
        { name: "Strength Training", time: "6:00 AM", instructor: "Mike Rodriguez", spots: 8 },
        { name: "Yoga & Mobility", time: "9:00 AM", instructor: "Emily Chen", spots: 12 },
        { name: "HIIT Conditioning", time: "6:00 PM", instructor: "Sarah Johnson", spots: 15 },
        { name: "Olympic Lifting", time: "7:30 PM", instructor: "Mike Rodriguez", spots: 6 },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        { name: "Bootcamp", time: "6:00 AM", instructor: "Sarah Johnson", spots: 12 },
        { name: "Recovery & Stretch", time: "10:00 AM", instructor: "Emily Chen", spots: 10 },
        { name: "Strength Training", time: "6:00 PM", instructor: "Mike Rodriguez", spots: 8 },
        { name: "Yoga & Mobility", time: "7:30 PM", instructor: "Emily Chen", spots: 12 },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        { name: "HIIT Conditioning", time: "6:00 AM", instructor: "Sarah Johnson", spots: 15 },
        { name: "Olympic Lifting", time: "9:00 AM", instructor: "Mike Rodriguez", spots: 6 },
        { name: "Bootcamp", time: "6:00 PM", instructor: "Sarah Johnson", spots: 12 },
        { name: "Recovery & Stretch", time: "7:30 PM", instructor: "Emily Chen", spots: 10 },
      ],
    },
    {
      day: "Thursday",
      classes: [
        { name: "Strength Training", time: "6:00 AM", instructor: "Mike Rodriguez", spots: 8 },
        { name: "Yoga & Mobility", time: "9:00 AM", instructor: "Emily Chen", spots: 12 },
        { name: "HIIT Conditioning", time: "6:00 PM", instructor: "Sarah Johnson", spots: 15 },
        { name: "Olympic Lifting", time: "7:30 PM", instructor: "Mike Rodriguez", spots: 6 },
      ],
    },
    {
      day: "Friday",
      classes: [
        { name: "Bootcamp", time: "6:00 AM", instructor: "Sarah Johnson", spots: 12 },
        { name: "Recovery & Stretch", time: "10:00 AM", instructor: "Emily Chen", spots: 10 },
        { name: "Strength Training", time: "6:00 PM", instructor: "Mike Rodriguez", spots: 8 },
        { name: "Yoga & Mobility", time: "7:30 PM", instructor: "Emily Chen", spots: 12 },
      ],
    },
    {
      day: "Saturday",
      classes: [
        { name: "HIIT Conditioning", time: "8:00 AM", instructor: "Sarah Johnson", spots: 15 },
        { name: "Olympic Lifting", time: "10:00 AM", instructor: "Mike Rodriguez", spots: 6 },
        { name: "Yoga & Mobility", time: "11:30 AM", instructor: "Emily Chen", spots: 12 },
      ],
    },
    {
      day: "Sunday",
      classes: [
        { name: "Recovery & Stretch", time: "9:00 AM", instructor: "Emily Chen", spots: 10 },
        { name: "Bootcamp", time: "10:30 AM", instructor: "Sarah Johnson", spots: 12 },
        { name: "Yoga & Mobility", time: "5:00 PM", instructor: "Emily Chen", spots: 12 },
      ],
    },
  ]

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Low":
        return "bg-green-100 text-green-800"
      case "Low-Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Medium":
        return "bg-orange-100 text-orange-800"
      case "High":
        return "bg-red-100 text-red-800"
      case "Very High":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fitness <span className="text-red-600">Classes</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our expert-led classes designed to challenge, motivate, and help you achieve your fitness goals. From
            strength training to yoga, we have something for every fitness level.
          </p>
        </div>
      </section>

      {/* Class Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Class Offerings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our diverse range of fitness classes, each designed to target specific goals and fitness levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classTypes.map((classType, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={classType.image || "/placeholder.svg"}
                  alt={classType.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{classType.name}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getIntensityColor(classType.intensity)}`}
                    >
                      {classType.intensity}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{classType.description}</p>

                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    {classType.duration}
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {classType.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Weekly Schedule</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plan your week with our comprehensive class schedule. All classes are included with your membership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
            {weeklySchedule.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-red-600 text-white p-4 text-center">
                  <h3 className="font-semibold text-lg">{day.day}</h3>
                </div>
                <div className="p-4 space-y-3">
                  {day.classes.map((classItem, classIndex) => (
                    <div key={classIndex} className="border-l-4 border-red-600 pl-3 py-2">
                      <div className="font-medium text-gray-900 text-sm">{classItem.name}</div>
                      <div className="text-xs text-gray-600 mt-1">
                        <div className="flex items-center mb-1">
                          <Clock className="w-3 h-3 mr-1" />
                          {classItem.time}
                        </div>
                        <div className="flex items-center mb-1">
                          <Users className="w-3 h-3 mr-1" />
                          {classItem.instructor}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {classItem.spots} spots
                        </div>
                      </div>
                      <button className="mt-2 bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700 transition-colors">
                        Reserve Spot
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Gym Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Open Gym Hours</h2>
              <p className="text-lg text-gray-600 mb-6">
                Prefer to work out on your own schedule? Our open gym hours give you access to all equipment and
                facilities for self-directed training.
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Monday - Friday</span>
                  <span className="text-gray-600">5:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Saturday</span>
                  <span className="text-gray-600">6:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-600">7:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-4">
                  * Open gym access is included with all memberships. Some equipment may be reserved during class times.
                </p>
                <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors">
                  View Equipment List
                </button>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Open Gym"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Class Policies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Class Policies</h2>
            <p className="text-lg text-gray-600">
              Please review our class policies to ensure the best experience for all members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reservations & Cancellations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Classes can be reserved up to 7 days in advance</li>
                <li>• Cancel at least 2 hours before class start time</li>
                <li>• Late cancellations may result in a no-show fee</li>
                <li>• Walk-ins welcome if space is available</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Class Etiquette</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Arrive 5-10 minutes early for setup</li>
                <li>• Bring a water bottle and towel</li>
                <li>• Clean equipment after use</li>
                <li>• Follow instructor guidance at all times</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Bring</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Comfortable workout attire</li>
                <li>• Athletic shoes (no sandals or bare feet)</li>
                <li>• Water bottle</li>
                <li>• Yoga mat (for yoga classes)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Guidelines</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Inform instructor of any injuries</li>
                <li>• Work within your fitness level</li>
                <li>• Stop if you feel pain or discomfort</li>
                <li>• Stay hydrated throughout class</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join a Class?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your fitness journey today with our expert-led classes and supportive community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors">
              Reserve Your First Class
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              View Membership Options
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
