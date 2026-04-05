import { useEffect, useState } from 'react'

export function GotoButton() {
  const [goUp, setGoUp] = useState(false)

  useEffect(() => {
    const updateDirection = () => {
      const scrollTop = window.scrollY
      const documentHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight
      const maxScroll = documentHeight - windowHeight
      const halfway = maxScroll / 2

      setGoUp(scrollTop > halfway)
    }

    updateDirection()
    window.addEventListener('scroll', updateDirection, { passive: true })
    window.addEventListener('resize', updateDirection)

    return () => {
      window.removeEventListener('scroll', updateDirection)
      window.removeEventListener('resize', updateDirection)
    }
  }, [])

  const handleClick = () => {
    const documentHeight = document.documentElement.scrollHeight
    const windowHeight = window.innerHeight
    const maxScroll = documentHeight - windowHeight

    window.scrollTo({
      top: goUp ? 0 : maxScroll,
      behavior: 'smooth',
    })
  }

  return (
    <button
      type="button"
      className="goto-button"
      onClick={handleClick}
      aria-label={goUp ? 'Go to top' : 'Go to bottom'}
      title={goUp ? 'Go to top' : 'Go to bottom'}
    >
      <svg
        className={goUp ? 'goto-button__icon goto-button__icon--up' : 'goto-button__icon goto-button__icon--down'}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M8 5l8 7-8 7" />
      </svg>
    </button>
  )
}