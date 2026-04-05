import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/SectionHeading'

export function LearnSection() {
  const [open, setOpen] = useState(false)
  const [lastLesson, setLastLesson] = useState<string | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('last-lesson')
    if (saved) setLastLesson(saved)
  }, [])

  const handleClick = (lesson: string) => {
    localStorage.setItem('last-lesson', lesson)
    setLastLesson(lesson)
  }

  return (
    <section className="band band--green">
      <div className="container">
        <SectionHeading title="Learn" accent="gold" />

        <div style={{ maxWidth: '48rem' }}>
          <p>
            Dash provides a structured learning path focused on clarity and
            real understanding of systems programming concepts.
          </p>

          <button
            className="button button--primary"
            onClick={() => setOpen(!open)}
            style={{ marginTop: '1.5rem' }}
          >
            {open ? 'Close' : 'Learn more'}
          </button>

          {open && (
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1.25rem',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                background: 'rgba(0,0,0,0.15)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  alignItems: 'flex-start'
                }}
              >
                <Link
                  to="/learn/get-started"
                  className={`button ${lastLesson === 'get-started'
                    ? 'button--rose'
                    : 'button--secondary'
                    }`}
                  onClick={() => handleClick('get-started')}
                >
                  Get started — 1
                </Link>

                <Link
                  to="/learn/variables"
                  className={`button ${lastLesson === 'variables'
                    ? 'button--rose'
                    : 'button--secondary'
                    }`}
                  onClick={() => handleClick('variables')}
                >
                  Variables — 2
                </Link>

                <Link
                  to="/learn/memory"
                  className={`button ${lastLesson === 'memory'
                    ? 'button--rose'
                    : 'button--secondary'
                    }`}
                  onClick={() => handleClick('memory')}
                >
                  Memory — 3
                </Link>

                <Link
                  to="/learn/vector"
                  className={`button ${lastLesson === 'vector'
                    ? 'button--rose'
                    : 'button--secondary'
                    }`}
                  onClick={() => handleClick('vector')}
                >
                  Vector — 4
                </Link>

                <Link
                  to="/learn/functions"
                  className={`button ${lastLesson === 'functions'
                    ? 'button--rose'
                    : 'button--secondary'
                    }`}
                  onClick={() => handleClick('functions')}
                >
                  Functions — 5
                </Link>

                <Link
                  to="/learn/classes"
                  className={`button ${lastLesson === 'classes'
                      ? 'button--rose'
                      : 'button--secondary'
                    }`}
                  onClick={() => handleClick('classes')}
                >
                  Classes — 6
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}