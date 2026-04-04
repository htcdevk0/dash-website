import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'

export function InstallPage() {
  return (
    <>
      <PageHero
        eyebrow="Install"
        title="Install Dash with dashtup"
        summary={<p>The supported installation flow is centered on dashtup. Clone the repository or use the downloadable installer package, then run the installation command from the project directory.</p>}
        actions={<div className="hero-callout"><Link to="/download" className="button button--primary">Open download options</Link></div>}
      />

      <section className="band band--paper">
        <div className="container two-column-layout">
          <div>
            <SectionHeading title="Repository-based installation" accent="gold" />
            <pre>{`git clone https://github.com/htcdevk0/dashtup.git
cd dashtup
./dashtup install`}</pre>
            <p>
              This mirrors the main installation path described for the site: get dashtup, enter the
              repository directory, and run the installer.
            </p>
          </div>
          <div>
            <SectionHeading title="What the toolchain exposes" accent="gold" />
            <ul className="feature-list">
              <li><code>dash main.ds</code></li>
              <li><code>dash build main.ds</code></li>
              <li><code>dash run main.ds</code></li>
              <li><code>--emit-llvm</code>, <code>-c</code>, <code>--shared</code>, <code>-o</code></li>
              <li><code>-I</code>, <code>-W&lt;name&gt;</code>, <code>-Werror</code>, <code>-L=&lt;profile&gt;</code></li>
              <li><code>-cl</code>, <code>-ld</code>, <code>-l</code>, <code>-d</code>, <code>-sl</code></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="band band--rose">
        <div className="container narrow-flow">
          <SectionHeading title="Next steps after install" accent="blue" />
          <p className="lead-paragraph">
            After installation, move into the language tour and the build guide. Dash keeps the build
            model explicit, so the learning path is strongest when the language chapters and CLI
            chapters are read together.
          </p>
          <div className="button-row">
            <Link to="/learn" className="button button--secondary">Read the guides</Link>
            <Link to="/tools" className="button button--secondary">Review the toolchain</Link>
          </div>
        </div>
      </section>
    </>
  )
}
