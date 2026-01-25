import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Texas Lacrosse - JJ Vann',
}

export default function ProjectTexasLacrosse() {
  return (
    <section className="project-detail" style={{ paddingTop: '100px' }}>
      <div className="container">
        <Link href="/#selected-work" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Selected Work
        </Link>

        <div className="project-header">
          <Image 
            src="/images/longhorn.png" 
            alt="Texas Lacrosse Logo" 
            className="project-logo"
            width={200}
            height={200}
          />
          <h1>Texas Lacrosse</h1>
          <p className="project-intro">The official men&apos;s lacrosse team of The University of Texas at Austin, a 20-time LSA champion competing at the highest level of collegiate club lacrosse.</p>
          <div className="project-links">
            <a href="https://utlacrosse.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> Visit Website
            </a>
            <a href="https://www.instagram.com/texasmlax/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> View on Instagram
            </a>
          </div>
        </div>

        <div className="project-content">
          <div className="project-section">
            <div className="project-text">
              <h2>What I Worked On</h2>
              <p>
                As the Equipment Manager for Texas Men&apos;s Lacrosse, I handle the details that shape how the team looks and operates, especially when it comes to merchandise, gear, and overall presentation.
              </p>
              
              <p>
                I designed the logo and full merch lineup for our annual tournament, the Longhorn Shootout, and every item I designed for the tournament sold out. I have also designed team-issued apparel like sweats that players actually enjoy wearing, which helps build pride and consistency across the roster.
              </p>
              
              <p>
                One of the projects I am most proud of was being selected to design custom jerseys for both UT and our rival, Texas A&M, for our Military Appreciation game. The jerseys were military inspired and honored a specific alumni from each school who died in battle.
              </p>
              
              <p>
                I work directly with vendors like BSN to get gear produced and into our team store, and I help pursue partnerships with outside brands. Managing deadlines and quality has been one of the biggest challenges, especially when items come back incorrect and need to be fixed quickly.
              </p>
            </div>
            <div className="project-gallery">
              <div className="project-image-item project-image-side-by-side">
                <Image 
                  src="/images/lax-pics/laxmerch1.jpeg" 
                  alt="Front Merch Photo"
                  width={600}
                  height={400}
                />
                <Image 
                  src="/images/lax-pics/laxmerch2.jpeg" 
                  alt="Back Merch Photo"
                  width={600}
                  height={400}
                />
              </div>
              <div className="project-image-item">
                <Image 
                  src="/images/lax-pics/laxlhsc-collage.jpeg" 
                  alt="Shootout Collage"
                  width={800}
                  height={600}
                />
              </div>
              <div className="project-image-item project-image-stacked">
                <Image 
                  src="/images/lax-pics/final-ut-unis.jpeg" 
                  alt="UT Military Uniforms"
                  width={800}
                  height={600}
                />
                <Image 
                  src="/images/lax-pics/final-a&m-unis.jpeg" 
                  alt="A&M Military Uniforms"
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

