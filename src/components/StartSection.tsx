import { SectionHeading } from "./SectionHeading"
import { Link } from "react-router-dom"

const StartSection = () => {
    return (
        <section className="band band--rose">
        <div className="container two-column-equal">
          <div>
            <SectionHeading title="Start learning" accent="blue" />
            <p>
              Begin with the language tour, type system, functions, collections, modules, and the
              synchronized reference chapters prepared from the current compiler snapshot.
            </p>
            <Link to="/learn" className="button button--secondary">Read the guides</Link>
          </div>
          <div>
            <SectionHeading title="Get the toolchain" accent="blue" />
            <p>
              Install Dash through dashtup, review the CLI commands, and use the download page for
              the current installation flow and repository entry points.
            </p>
            <Link to="/download" className="button button--secondary">Open downloads</Link>
          </div>
        </div>
      </section>
    )
}

export default StartSection;