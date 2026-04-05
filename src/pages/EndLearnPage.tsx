import { Link } from 'react-router-dom'

export function EndLearnPage() {
  return (
    <>
      <section className="band band--brown">
        <div className="container">
          <div
            style={{
              minHeight: '48vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <div style={{ maxWidth: '42rem' }}>
              <div
                aria-hidden="true"
                style={{
                  fontSize: '4.5rem',
                  lineHeight: 1,
                  marginBottom: '1.25rem',
                }}
              >
                :(
              </div>

              <h2 style={{ marginBottom: '0.9rem' }}>
                It looks like you reached the end.
              </h2>

              <p
                style={{
                  margin: '0 auto 2rem auto',
                  maxWidth: '30rem',
                }}
              >
                Please wait for future updates.
              </p>

              <Link to="/" className="button button--primary">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}