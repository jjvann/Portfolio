import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Young Life Studio 41 - JJ Vann',
}

export default function ProjectStudio41() {
  return (
    <section className="project-detail" style={{ paddingTop: '100px' }}>
      <div className="container">
        <Link href="/#selected-work" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Selected Work
        </Link>

        <div className="project-header">
          <Image 
            src="/images/younglife.png" 
            alt="Studio 41 Logo" 
            className="project-logo"
            width={200}
            height={200}
          />
          <h1>Young Life</h1>
          <p className="project-intro">A volunteer-driven Christian organization that builds relationships with high school students through mentorship, camps, and community leadership, supported by marketing and operational efforts behind the scenes.</p>
          <div className="project-links">
            <a href="https://www.younglife.org" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> Visit Website
            </a>
            <a href="https://www.instagram.com/younglife/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> View on Instagram
            </a>
          </div>
        </div>

        <div className="project-content">
          <div className="project-section">
            <div className="project-text">
              <h2>What I Worked On</h2>
              <p>
                I spent nine months as an Analytics Intern at Young Life Studio 41, working under Kelsey Hjalmquist and supporting the Greater Austin region. My role focused on helping the organization make better use of its data so staff and volunteers could stay organized and make clearer decisions.
              </p>
              
              <p>
                Most of my work involved tools like Google Sheets and Salesforce. I helped manage and clean data, support regional operations, and contribute to systems that needed to be simple and reliable for a largely volunteer-based organization.
              </p>
              
              <p>
                Outside of the analytics role, I was involved in leadership and service. During the summer, I participated in a UTYL intern group focused on leadership development and Bible study.
              </p>
              
              <p>
                Later, I volunteered at LoneHollow Ranch during Work Crew, where I worked early mornings in the kitchen preparing meals and cleaning. It was physically demanding but meaningful, and it gave me time to step away from campus life and reconnect with faith and community.
              </p>
            </div>
            <div className="project-gallery">
              <div className="project-image-item">
                <Image 
                  src="/images/yl-pics/yllhrgroup1.jpeg" 
                  alt="LoneHollow Ranch Work Crew"
                  width={800}
                  height={600}
                />
              </div>
              <div className="project-image-item project-image-side-by-side">
                <Image 
                  src="/images/yl-pics/campclub.jpeg" 
                  alt="LoneHollow Ranch Club"
                  width={600}
                  height={400}
                />
                <Image 
                  src="/images/yl-pics/camptable.jpeg" 
                  alt="LoneHollow Ranch Table"
                  width={600}
                  height={400}
                />
              </div>
              <div className="project-image-item">
                <Image 
                  src="/images/yl-pics/f1-pic.jpeg" 
                  alt="F1 Kelsey Pic"
                  width={800}
                  height={600}
                />
              </div>
              <div className="project-image-item">
                <Image 
                  src="/images/yl-pics/utylsummersquad.jpeg" 
                  alt="UTYL Summer Squad"
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

