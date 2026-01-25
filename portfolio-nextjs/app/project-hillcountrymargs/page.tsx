import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Hill Country Margs - JJ Vann',
}

export default function ProjectHillCountryMargs() {
  return (
    <section className="project-detail" style={{ paddingTop: '100px' }}>
      <div className="container">
        <Link href="/#selected-work" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Selected Work
        </Link>

        <div className="project-header">
          <Image 
            src="/images/hcmargs.png" 
            alt="Hill Country Margs Logo" 
            className="project-logo"
            width={200}
            height={200}
          />
          <h1>Hill Country Margs</h1>
          <p className="project-intro">An Austin-based company that rents out restaurant-grade margarita machines, combining quality service with a fun local vibe to make any event better.</p>
          <div className="project-links">
            <a href="https://hillcountrymargaritas.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> Visit Website
            </a>
            <a href="https://www.instagram.com/hillcountrymargs/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> View on Instagram
            </a>
          </div>
        </div>

        <div className="project-content">
          <div className="project-section">
            <div className="project-text">
              <h2>What I Worked On</h2>
              <p>
                I joined Hill Country Margaritas as part of the operations team, originally hired to handle deliveries and pickups for events. That meant loading machines and mix, driving to events, setting everything up, and showing customers how to use the machines so they felt comfortable once we left.
              </p>
              
              <p>
                As I got more involved, I started looking for ways to help beyond deliveries. I took the initiative to design merch mockups, including a hoodie, multiple shirts, hats, and a novelty item, to help the brand feel more recognizable and consistent.
              </p>
              
              <p>
                I am currently planning a full redesign of the website. The goal is to rebuild it from the ground up so it looks better, loads faster, and works cleanly on mobile, while also simplifying checkout and improving how customer data and analytics are handled for the owners.
              </p>
            </div>
            <div className="project-gallery">
              <div className="project-image-item project-image-side-by-side">
                <Image 
                  src="/images/marg-pics/margmerch1.jpeg" 
                  alt="Margarita Merch 1"
                  width={600}
                  height={400}
                />
                <Image 
                  src="/images/marg-pics/margmerch2.jpeg" 
                  alt="Margarita Merch 2"
                  width={600}
                  height={400}
                />
              </div>
              <div className="project-image-item">
                <Image 
                  src="/images/marg-pics/margmachine.jpeg" 
                  alt="Margarita Machine"
                  width={800}
                  height={600}
                />
              </div>
              <div className="project-image-item">
                <Image 
                  src="/images/marg-pics/marghat.jpeg" 
                  alt="Margarita Hat"
                  width={800}
                  height={600}
                />
              </div>
              <div className="project-image-item">
                <Image 
                  src="/images/margteam.jpeg" 
                  alt="Margarita Team"
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

