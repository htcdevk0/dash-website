import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="band band--brown">
      <div className="container" style={{ paddingTop: '7rem', paddingBottom: '7rem' }}>
        <div style={{ maxWidth: '40rem' }}>
          <p
            style={{
              margin: 0,
              fontSize: '0.82rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              opacity: 0.7,
            }}
          >
            Error
          </p>

          <h1 style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>404 Not found</h1>

          <p style={{ marginBottom: '2rem', maxWidth: '32rem' }}>
            The page you requested could not be found.
          </p>

          <Link to="/" className="button button--primary">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}