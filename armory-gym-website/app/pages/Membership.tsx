"use client"

import type React from "react"

import { useState } from "react"
import { Check, Star } from "lucide-react"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"

const membershipPlans = [
  {
    name: "Drop-in",
    price: 25,
    period: "per visit",
    description: "Perfect for trying us out or occasional visits",
    features: ["Access to all equipment", "Basic facility access", "Locker room access", "Valid for single visit"],
    popular: false,
    priceId: "price_dropin",
  },
  {
    name: "Monthly",
    price: 89,
    period: "per month",
    description: "Great for regular gym-goers who want flexibility",
    features: [
      "Unlimited gym access",
      "All group classes included",
      "Locker room & amenities",
      "Guest pass (2 per month)",
      "Nutrition consultation",
      "Cancel anytime",
    ],
    popular: true,
    priceId: "price_monthly",
  },
  {
    name: "Annual",
    price: 799,
    period: "per year",
    description: "Best value for committed members",
    features: [
      "Everything in Monthly",
      "Save $269 per year",
      "Priority class booking",
      "Free personal training session",
      "Unlimited guest passes",
      "Exclusive member events",
      "Supplement discounts",
    ],
    popular: false,
    priceId: "price_annual",
  },
]

function CheckoutForm({ plan }: { plan: (typeof membershipPlans)[0] }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setLoading(true)
    setError(null)

    const cardElement = elements.getElement(CardElement)

    if (!cardElement) {
      setError("Card element not found")
      setLoading(false)
      return
    }

    try {
      // Create payment method
      const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      })

      if (paymentError) {
        setError(paymentError.message || "Payment failed")
        setLoading(false)
        return
      }

      // In a real app, you would send the payment method to your server
      // and create a subscription or payment intent
      console.log("Payment method created:", paymentMethod)

      // Simulate successful payment
      setTimeout(() => {
        setSuccess(true)
        setLoading(false)
      }, 2000)
    } catch (err) {
      setError("An unexpected error occurred")
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center p-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Payment Successful!</h3>
        <p className="text-gray-600 mb-4">Welcome to The Armory! You'll receive a confirmation email shortly.</p>
        <button onClick={() => setSuccess(false)} className="text-red-600 hover:text-red-700 font-medium">
          ← Back to plans
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.name} Membership</h3>
        <p className="text-2xl font-bold text-red-600">
          ${plan.price} <span className="text-sm text-gray-600">{plan.period}</span>
        </p>
      </div>

      <div className="border rounded-md p-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Card Information</label>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
            },
          }}
        />
      </div>

      {error && <div className="text-red-600 text-sm">{error}</div>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-red-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? "Processing..." : `Subscribe to ${plan.name}`}
      </button>

      <p className="text-xs text-gray-500 text-center">Your payment information is secure and encrypted.</p>
    </form>
  )
}

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState<(typeof membershipPlans)[0] | null>(null)

  if (selectedPlan) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <button onClick={() => setSelectedPlan(null)} className="text-red-600 hover:text-red-700 mb-4 font-medium">
              ← Back to plans
            </button>
            <CheckoutForm plan={selectedPlan} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your <span className="text-red-600">Membership</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join The Armory community and start your journey to optimal health and fitness. Choose the plan that works
            best for your lifestyle and goals.
          </p>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden relative ${
                  plan.popular ? "ring-2 ring-red-600 transform scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-red-600 mb-2">${plan.price}</div>
                    <p className="text-gray-600">{plan.period}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(plan)}
                    className={`w-full py-3 px-4 rounded-md font-semibold transition-colors ${
                      plan.popular
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {plan.name === "Drop-in" ? "Buy Day Pass" : "Subscribe Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Membership Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every membership includes access to our world-class facilities and expert support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="State-of-the-art Equipment"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">State-of-the-Art Equipment</h3>
              <p className="text-gray-600">
                Access to the latest fitness equipment and technology for optimal training results.
              </p>
            </div>

            <div className="text-center p-6">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Group Classes"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unlimited Group Classes</h3>
              <p className="text-gray-600">Join our high-energy group classes led by certified instructors.</p>
            </div>

            <div className="text-center p-6">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Expert Guidance"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Get personalized support from our team of certified trainers and specialists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel my membership anytime?</h3>
              <p className="text-gray-600">
                Yes, monthly memberships can be cancelled anytime with 30 days notice. Annual memberships have a
                12-month commitment but offer significant savings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer family discounts?</h3>
              <p className="text-gray-600">
                Yes! We offer family packages for 2 or more family members. Contact us for custom pricing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What's included in the personal training session?
              </h3>
              <p className="text-gray-600">
                Annual members receive one complimentary 60-minute personal training session that includes fitness
                assessment, goal setting, and customized workout plan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are there any additional fees?</h3>
              <p className="text-gray-600">
                No hidden fees! The membership price includes everything listed. Optional services like additional
                personal training sessions are available at member rates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
