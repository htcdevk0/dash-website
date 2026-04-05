import { useEffect } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
  content: React.ReactNode
}

export function PopUpWindow({ isOpen, onClose, content }: Props) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="popup-window__backdrop" onClick={onClose}>
      <div
        className="popup-window"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="popup-window__content">
          {content}
        </div>

        <div className="popup-window__actions">
          <button
            type="button"
            className="button button--secondary __pop_up_window_button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}