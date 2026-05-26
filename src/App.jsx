import { useState, useEffect } from 'react'
import Navbar  from './components/Navbar'
import Hero    from './components/Hero'
import About   from './components/About'
import Projects from './components/Projects'
import Skills  from './components/Skills'
import Resume  from './components/Resume'
import Contact from './components/Contact'
import Footer  from './components/Footer'

export default function App() {
  const [dark, setDark] = useState(false)
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 })

  // Apply theme attribute to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  // Track mouse for cursor glow
  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  // Intersection observer for .reveal elements
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    }, 100)
    return () => { clearTimeout(timer); obs.disconnect() }
  }, [])

  const glowStyle = {
    left: mousePos.x,
    top: mousePos.y,
    background: dark
      ? 'radial-gradient(circle, rgba(41,151,255,0.09) 0%, transparent 65%)'
      : 'radial-gradient(circle, rgba(0,113,227,0.07) 0%, transparent 65%)',
  }

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', position: 'relative' }}>
      {/* Cursor Glow */}
      <div className="cursor-glow" style={glowStyle} />

      <Navbar dark={dark} onToggle={() => setDark(!dark)} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}