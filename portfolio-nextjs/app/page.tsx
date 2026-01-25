'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [rotatingText, setRotatingText] = useState('UX/UI Designer')
  const [isFading, setIsFading] = useState(false)
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)
  const heroDescriptionRef = useRef<HTMLParagraphElement>(null)

  // Rotating text effect
  useEffect(() => {
    const texts = ['UX/UI Designer', 'Student-athlete', 'Longhorn']
    let currentIndex = 0
    let intervalId: NodeJS.Timeout | null = null

    const rotateText = () => {
      setIsFading(true)
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length
        setRotatingText(texts[currentIndex])
        setIsFading(false)
      }, 800)
    }

    // First rotation after 2 seconds, then regular 3-second intervals
    const firstTimeout = setTimeout(() => {
      rotateText()
      intervalId = setInterval(rotateText, 3000)
    }, 2000)

    return () => {
      clearTimeout(firstTimeout)
      if (intervalId) clearInterval(intervalId)
    }
  }, [])

  // Show hero description on scroll
  useEffect(() => {
    const updateNavbarState = () => {
      if (window.scrollY > 10) {
        setIsDescriptionVisible(true)
      } else {
        setIsDescriptionVisible(false)
      }
    }

    window.addEventListener('scroll', updateNavbarState)
    updateNavbarState() // Check initial state
    return () => window.removeEventListener('scroll', updateNavbarState)
  }, [])

  // Handle hash navigation on page load
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const targetSection = document.querySelector(window.location.hash)
        if (targetSection) {
          const offsetTop = (targetSection as HTMLElement).offsetTop - 70
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-image">
            <Image 
              src="/images/suit-pic.jpeg" 
              alt="JJ Vann profile picture" 
              width={415}
              height={415}
              priority
            />
          </div>
          <div className="hero-text">
            <p className="hero-rotating-text">
              <span className="rotating-text-wrapper">
                <span className={`rotating-text ${isFading ? 'fade-out' : ''}`}>
                  {rotatingText}
                </span>
              </span>
            </p>
            <p 
              ref={heroDescriptionRef}
              className={`hero-description ${isDescriptionVisible ? 'visible' : ''}`}
            >
              Hey, I&apos;m <span className="hero-name">JJ Vann.</span> Here you can check out what I&apos;m working on.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="image-gallery">
        <div className="gallery-container">
          <Image 
            src="/images/italy-pic.jpeg" 
            alt="Gallery Image 1" 
            className="gallery-image"
            width={400}
            height={350}
          />
          <Image 
            src="/images/lax-pic-1.jpeg" 
            alt="Gallery Image 2" 
            className="gallery-image"
            width={400}
            height={350}
          />
          <Image 
            src="/images/wurstfest.jpeg" 
            alt="Gallery Image 3" 
            className="gallery-image"
            width={400}
            height={350}
          />
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="selected-work" className="selected-work">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Selected Work</h2>
          </div>
          <div className="work-grid">
            <Link href="/project-hillcountrymargs" className="work-card">
              <div className="work-card-image">
                <Image 
                  src="/images/hcmargs.png" 
                  alt="Hill Country Margs Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="work-card-content">
                <h3>Hill Country Margs</h3>
                <p>Website, merch, and machine delivery</p>
                <span className="view-project-mobile">View project</span>
              </div>
            </Link>

            <Link href="/project-texaslacrosse" className="work-card">
              <div className="work-card-image">
                <Image 
                  src="/images/longhorn.png" 
                  alt="Texas Lacrosse Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="work-card-content">
                <h3>Texas Lacrosse</h3>
                <p>Merch design and equipment management</p>
                <span className="view-project-mobile">View project</span>
              </div>
            </Link>

            <Link href="/project-studio41" className="work-card">
              <div className="work-card-image">
                <Image 
                  src="/images/younglife.png" 
                  alt="Young Life Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="work-card-content">
                <h3>Young Life</h3>
                <p>Marketing, operations, and camp volunteering</p>
                <span className="view-project-mobile">View project</span>
              </div>
            </Link>

            <Link href="/project-hillcountrypressurewash" className="work-card">
              <div className="work-card-image">
                <Image 
                  src="/images/hcpressurewash.png" 
                  alt="Hill Country Pressure Wash Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="work-card-content">
                <h3>Hill Country Pressure Wash</h3>
                <p>Founder and operator of a local service business</p>
                <span className="view-project-mobile">View project</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Resume</h2>
            <a href="/Vann, Jacob - Resume.pdf" className="btn btn-primary" download="Vann, Jacob - Resume.pdf">
              <i className="fas fa-download"></i> Download PDF
            </a>
          </div>

          <div className="resume-content">
            <div className="resume-section">
              <h3>Education</h3>
              
              <div className="resume-item">
                <div className="resume-item-header">
                  <div className="resume-header-content">
                    <Image 
                      src="/images/ut-austin-logo.png" 
                      alt="UT Austin Logo" 
                      className="resume-logo"
                      width={40}
                      height={40}
                    />
                    <div>
                      <h4>The University of Texas at Austin</h4>
                      <p className="resume-org">Bachelor of Science in Informatics</p>
                    </div>
                  </div>
                  <span className="resume-date">2024 - 2027</span>
                </div>
                <p>Concentration in UX Design, Business minor. Focused on user-centered design, data analysis, and product thinking.</p>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div className="resume-header-content">
                    <Image 
                      src="/images/texas-state-logo.png" 
                      alt="Texas State Logo" 
                      className="resume-logo"
                      width={40}
                      height={40}
                    />
                    <div>
                      <h4>Texas State University</h4>
                      <p className="resume-org">Bachelor of Science in Computer Science</p>
                    </div>
                  </div>
                  <span className="resume-date">2023 - 2024</span>
                </div>
                <p>Completed freshman year with a 4.0 GPA. Built a strong foundation in programming, math, and problem-solving before transferring to UT Austin.</p>
              </div>
            </div>

            <div className="resume-section">
              <h3>Experience</h3>
              
              <div className="resume-item">
                <div className="resume-item-header">
                  <h4>Analytics Intern</h4>
                  <span className="resume-date">Dec 2024 - Aug 2025</span>
                </div>
                <p className="resume-org">Young Life Studio41</p>
                <p>Supported marketing and operations through data work in Google Sheets and Salesforce, helping staff stay organized and make clearer decisions across the Greater Austin region.</p>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <h4>Equipment Manager</h4>
                  <span className="resume-date">Spring 2025 - Present</span>
                </div>
                <p className="resume-org">Texas Men&apos;s Lacrosse</p>
                <p>Designed team merchandise and managed equipment logistics, working with vendors and partners to deliver high-quality gear on tight timelines for a nationally competitive program.</p>
              </div>
            </div>

            <div className="resume-section">
              <h3>Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Google Sheets</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Canva</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">I&apos;d love to hear from you</p>
          </div>
          <div className="contact-simple">
            <div className="contact-methods-simple">
              <a href="mailto:jjvann@utexas.edu" className="contact-method-simple">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>jjvann@utexas.edu</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/jj-vann" target="_blank" rel="noopener noreferrer" className="contact-method-simple">
                <i className="fab fa-linkedin"></i>
                <div>
                  <h4>LinkedIn</h4>
                  <p>Connect with me</p>
                </div>
              </a>
              <a href="https://www.instagram.com/jjvann/" target="_blank" rel="noopener noreferrer" className="contact-method-simple">
                <i className="fab fa-instagram"></i>
                <div>
                  <h4>Instagram</h4>
                  <p>Follow me</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

