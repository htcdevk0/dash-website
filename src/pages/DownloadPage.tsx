import { useState } from 'react'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { PopUpWindow } from '../components/PopUpWindow'

export function DownloadPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => setIsPopupOpen(true)
  const closePopup = () => setIsPopupOpen(false)

  return (
    <>
      <PageHero
        eyebrow="Download"
        title="Get the installer and repositories"
        summary={
          <p>
            The recommended path is to use dashtup. Clone the installer repository and run the
            installation command, or provide downloadable installer packages from this page in a
            production deployment.
          </p>
        }
      />

      <section className="band band--paper">
        <div className="container two-column-layout">
          <div>
            <SectionHeading title="Primary installation route" accent="gold" />
            <pre>{`git clone https://github.com/dashlng/dashtup.git
cd dashtup
./dashtup install`}</pre>
          </div>

          <div>
            <SectionHeading title="Recommended release links" accent="gold" />
            <div className="download-panel">
              <button type="button" className="button button--primary __download_button" onClick={openPopup}>
                dashtup repository
              </button>

              <button type="button" className="button button--secondary __download_button" onClick={openPopup}>
                dash repository
              </button>

              <button type="button" className="button button--secondary __download_button" onClick={openPopup}>
                standard library
              </button>
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

      <PopUpWindow
        isOpen={isPopupOpen}
        onClose={closePopup}
        content={
          <>
            <h2 style={{ marginTop: 0 }}>Release update</h2>

            <p>
              A new Dash release is coming soon. The currently accessible public version is an older
              deprecated release.
            </p>

            <p>
              It is still available for reference and access, but it is not the recommended version
              for evaluating the language today.
            </p>

            <p>
              A significant part of what is described across this website is not present in the older
              public release yet, including newer language behavior, tooling improvements, and broader
              project structure updates.
            </p>

            <p style={{ marginBottom: 0 }}>
              Please wait for the upcoming release if you want a version that better reflects the
              current state of Dash.
            </p>
          </>
        }
      />
    </>
  )
}