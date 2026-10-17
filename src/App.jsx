import Highlights from "./components/Highlights"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Model from "./components/Model"
import * as Sentry from '@sentry/react'
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"

const App = () => {

  // Add this button component to your app to test Sentry's error tracking
  function ErrorButton() {
    return (
      <button onClick={() => methodDoeswNotExist()}>
        Break the world
      </button>
    );
  }

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer/>
    </main>
  )
}

export default Sentry.withProfiler(App);
