import { useState } from 'react'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'

export function ProjectPage() {
    const [open, setOpen] = useState(false)
    const [licenseText, setLicenseText] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const handleToggle = async () => {
        if (!open && !licenseText) {
            try {
                setLoading(true)
                const res = await fetch('/LICENSE')
                const text = await res.text()
                setLicenseText(text)
            } catch {
                setLicenseText('Failed to load license.')
            } finally {
                setLoading(false)
            }
        }

        setOpen(!open)
    }

    return (
        <>
            <PageHero
                eyebrow="Project"
                title="Project and licensing"
                summary={
                    <p>
                        This section describes licensing, distribution, and ownership of the
                        Dash Programming Language and its official resources.
                    </p>
                }
            />

            {/* LICENSE OVERVIEW */}
            <section className="band band--green">
                <div className="container">
                    <SectionHeading title="Licensing" accent="gold" />

                    <div className="two-column-layout">
                        <div>
                            <p>
                                The Dash Programming Language is licensed under the Apache License 2.0.
                                This allows broad usage, modification, and distribution while preserving
                                proper attribution and patent protection.
                            </p>

                            <p>
                                The official website is licensed under the GNU General Public License v3.0.
                            </p>
                        </div>

                        <div>
                            <p>
                                All original content related to Dash presented on this website is authored
                                and maintained by <strong>htcdevk0 (Pietro de Paiva)</strong>, the creator
                                of the language.
                            </p>

                            <p>
                                Licensing ensures both openness and long-term stability of the project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DISTRIBUTION */}
            <section className="band band--purple">
                <div className="container">
                    <SectionHeading title="Distribution" accent="gold" />

                    <div className="two-column-layout">
                        <div>
                            <p>
                                Dash is distributed through the official installer (<code>dashtup</code>).
                                The installer provides the compiler, standard libraries, and tooling in a
                                consistent and controlled environment.
                            </p>

                            <p>
                                Distribution is currently focused on Linux (64-bit) systems.
                            </p>
                        </div>

                        <div>
                            <p>
                                The project does not rely on external dependencies beyond its own standard
                                libraries and minimal system interfaces.
                            </p>

                            <p>
                                All components are designed to work together as a single, coherent toolchain.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FULL LICENSE */}
            <section className="band band--brown">
                <div className="container">
                    <SectionHeading title="Full license" accent="gold" />

                    <div style={{ maxWidth: '48rem' }}>
                        <p>
                            The complete Apache License 2.0 text is available below.
                        </p>

                        <button
                            className="button button--secondary"
                            onClick={handleToggle}
                            style={{ marginBottom: '1.5rem' }}
                        >
                            {open ? 'Hide license' : 'View full license'}
                        </button>

                        {open && (
                            <div
                                style={{
                                    maxHeight: '400px',
                                    overflow: 'auto',
                                    padding: '1rem',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '6px',
                                    background: 'rgba(0,0,0,0.2)',
                                }}
                            >
                                <pre style={{ whiteSpace: 'pre-wrap' }}>
                                    {loading ? 'Loading...' : licenseText}
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* NOTES */}
            <section className="band band--pink">
                <div className="container">
                    <SectionHeading title="Notes" accent="gold" />

                    <div style={{ maxWidth: '48rem' }}>
                        <p>
                            Dash is developed with a focus on clarity, control, and long-term
                            maintainability. Licensing and distribution reflect these principles.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}