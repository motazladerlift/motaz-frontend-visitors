import { useEffect, useState, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Components
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import WhatsAppButton from './components/common/WhatsAppButton'
import BackToTopButton from './components/common/BackToTopButton'
import WorkInProgress from './components/common/WorkInProgress'
import LoadingMessage from './components/ui/LoadingMessage'
import FloatingDarkModeToggle from './components/common/FloatingDarkModeToggle'

// Import all styles
import './assets/styles/index.js'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const LadderliftPage = lazy(() => import('./pages/LadderliftPage'))
const VerhuizenPage = lazy(() => import('./pages/VerhuizenPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const FAQPage = lazy(() => import('./pages/FAQPage'))

function App() {
  const [loading, setLoading] = useState(true)
  const [showWorkInProgress, setShowWorkInProgress] = useState(false)

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })

    // Check for saved theme preference and apply it immediately
    const initializeTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      }
    };
    
    initializeTheme();

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingMessage />
  }

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="app-container">
        {showWorkInProgress ? (
          <WorkInProgress />
        ) : (
          <>
            <FloatingDarkModeToggle />
            <Header />
            <main>
              <Suspense fallback={<LoadingMessage />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/ladder-lift" element={<LadderliftPage />} />
                  <Route path="/verhuizen" element={<VerhuizenPage />} />
                  <Route path="/prijzen" element={<PricingPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <WhatsAppButton />
            <BackToTopButton />
          </>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
