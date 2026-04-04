import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'

export function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Download"
        title="Get the installer and repositories"
        summary={<p>The recommended path is to use dashtup. Clone the installer repository and run the installation command, or provide downloadable installer packages from this page in a production deployment.</p>}
      />

      <section className="band band--paper">
        <div className="container two-column-layout">
          <div>
            <SectionHeading title="Primary installation route" accent="gold" />
            <pre>{`git clone https://github.com/htcdevk0/dashtup.git
cd dashtup
./dashtup install`}</pre>
          </div>
          <div>
            <SectionHeading title="Recommended release links" accent="gold" />
            <div className="download-panel">
              <a href="https://github.com/htcdevk0/dashtup" className="button button--primary">dashtup repository</a>
              <a href="https://github.com/htcdevk0/dash" className="button button--secondary">dash repository</a>
              <a href="https://github.com/htcdevk0/Dash-Language-STDLIB" className="button button--secondary">standard library</a>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--green">
        <div className="container narrow-flow">
          <SectionHeading title="Deployment note" accent="blue" />
          <p className="lead-paragraph">
            This page is structured so production releases can later add direct downloadable assets,
            checksums, and platform-specific installer entries without changing the overall site
            architecture.
          </p>
        </div>
      </section>
    </>
  )
}
