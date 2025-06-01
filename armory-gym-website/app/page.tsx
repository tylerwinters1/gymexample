import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Membership from "./pages/Membership"
import Classes from "./pages/Classes"
import Contact from "./pages/Contact"

// Initialize Stripe (use your publishable key)
const stripePromise = loadStripe("pk_test_51234567890abcdef...")

export default function App() {
  return (
    <Elements stripe={stripePromise}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Elements>
  )
}
