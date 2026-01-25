import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Hill Country Pressure Wash - JJ Vann',
}

export default function ProjectHillCountryPressureWash() {
  return (
    <section className="project-detail" style={{ paddingTop: '100px' }}>
      <div className="container">
        <Link href="/#selected-work" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Selected Work
        </Link>

        <div className="project-header">
          <Image 
            src="/images/hcpressurewash.png" 
            alt="Hill Country Pressure Wash Logo" 
            className="project-logo"
            width={200}
            height={200}
          />
          <h1>Hill Country Pressure Wash</h1>
          <p className="project-intro">A locally owned business providing residential exterior cleaning services, including pressure washing and fence and deck staining, throughout the Austin area.</p>
          <div className="project-links">
            <a href="https://www.instagram.com/hillcountrypressurewash/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> View on Instagram
            </a>
          </div>
        </div>

        <div className="project-content">
          <div className="project-section">
            <div className="project-text">
              <h2>What I Worked On</h2>
              <p>
                I started Hill Country Pressure Wash after noticing that many homeowners needed help maintaining fences, decks, and outdoor spaces, but did not have the time or equipment to do it properly. I focused on residential jobs and offered whatever exterior cleaning would make the biggest difference for the property.
              </p>
              
              <p>
                The work was hands-on from start to finish. Jobs typically involved pressure washing fences, porches, and concrete, letting everything dry for several days, sanding wood surfaces, and returning to stain using oil-based products.
              </p>
              
              <p>
                I handled everything myself, including branding, logos, scheduling, customer communication, equipment purchases and repairs, and the labor itself. I never spent money on advertising, and all of my clients came through referrals and word of mouth.
              </p>
              
              <p>
                There was a learning curve, and I made mistakes. One time I stained a deck without sanding it properly, so I redid the entire job for free until it was right. That experience shaped how I approach work now: take responsibility, fix problems fully, and leave people happy with the result.
              </p>
            </div>
            <div className="project-gallery">
              <div className="project-image-item">
                <Image 
                  src="/images/hcpw-pics/b&adeckstain.jpeg" 
                  alt="Before and After Deck Stain"
                  width={800}
                  height={600}
                />
              </div>
              <div className="project-image-item">
                <Image 
                  src="/images/hcpw-pics/b&aPW.jpeg" 
                  alt="Before and After Pressure Washing"
                  width={800}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

