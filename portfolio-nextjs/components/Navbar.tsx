'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMenuOpen && !target.closest('.nav-menu') && !target.closest('.nav-toggle')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  // Update active nav link based on scroll position (only on homepage)
  useEffect(() => {
    if (pathname !== '/') return

    const updateActiveNavLink = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 150
        const sectionHeight = section.clientHeight

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || ''
        }
      })

      setActiveSection(current)
    }

    updateActiveNavLink()
    window.addEventListener('scroll', updateActiveNavLink)
    return () => window.removeEventListener('scroll', updateActiveNavLink)
  }, [pathname])

  // Handle smooth scroll for same-page links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      e.preventDefault()
      const hash = href.split('#')[1]
      
      if (isHomePage) {
        // Same page navigation
        const targetSection = document.querySelector(`#${hash}`)
        if (targetSection) {
          const offsetTop = (targetSection as HTMLElement).offsetTop - 70
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
          setIsMenuOpen(false)
        }
      } else {
        // Cross-page navigation - navigate first, then scroll
        window.location.href = `/#${hash}`
      }
    }
  }

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const isHomePage = pathname === '/'

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <Link href={isHomePage ? '#home' : '/'} className="nav-logo" onClick={isHomePage ? (e) => handleSmoothScroll(e, '#home') : undefined}>
          JV
        </Link>
        <div className="nav-left">
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
            <li className="nav-item">
              <Link 
                href={isHomePage ? '#selected-work' : '/#selected-work'} 
                className={`nav-link ${activeSection === 'selected-work' ? 'active' : ''}`}
                onClick={(e) => {
                  if (isHomePage) {
                    handleSmoothScroll(e, '#selected-work')
                  } else {
                    handleLinkClick()
                  }
                }}
              >
                Selected Work
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                href={isHomePage ? '#resume' : '/#resume'} 
                className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
                onClick={(e) => {
                  if (isHomePage) {
                    handleSmoothScroll(e, '#resume')
                  } else {
                    handleLinkClick()
                  }
                }}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item mobile-only">
              <Link 
                href={isHomePage ? '#contact' : '/#contact'} 
                className="nav-link nav-contact"
                onClick={(e) => {
                  if (isHomePage) {
                    handleSmoothScroll(e, '#contact')
                  } else {
                    handleLinkClick()
                  }
                }}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <Link 
            href={isHomePage ? '#contact' : '/#contact'} 
            className="nav-link nav-contact"
            onClick={(e) => {
              if (isHomePage) {
                handleSmoothScroll(e, '#contact')
              }
            }}
          >
            Contact Me
          </Link>
        </div>
        <div 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
          id="nav-toggle"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

