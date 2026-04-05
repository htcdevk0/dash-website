import { useState } from 'react'

type Props = {
  command: string
  output: string
}

export function RunArea({ command, output }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="run-area-wrapper">
      <button
        className="button button--secondary"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Hide output' : 'Run example'}
      </button>

      {open && (
        <div className="run-area">
          <div className="run-area__line">
            <span className="run-area__prompt">user@dash$</span>
            <span className="run-area__command">{command}</span>
          </div>

          <div className="run-area__output">
            <pre>{output}</pre>
          </div>
        </div>
      )}
    </div>
  )
}