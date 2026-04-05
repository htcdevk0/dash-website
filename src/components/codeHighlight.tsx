import React from 'react'

const KEYWORDS = new Set([
  'fn', 'let', 'const', 'return'
])

const DIRECTIVES = new Set([
  '@import'
])

const TYPES = new Set([
  'int', 'uint', 'float', 'double', 'void'
])

export function highlightLine(line: string): React.ReactNode[] {
  const tokens = line.split(/(\s+|\(|\)|\{|\}|:|;|,)/g)

  return tokens.map((token, i) => {
    if (KEYWORDS.has(token)) {
      return <span key={i} className="code-token code-token--keyword">{token}</span>
    }

    if (DIRECTIVES.has(token)) {
      return <span key={i} className="code-token code-token--directive">{token}</span>
    }

    if (TYPES.has(token)) {
      return <span key={i} className="code-token code-token--type">{token}</span>
    }

    if (/^".*"$/.test(token)) {
      return <span key={i} className="code-token code-token--string">{token}</span>
    }

    if (/^\d+$/.test(token)) {
      return <span key={i} className="code-token code-token--number">{token}</span>
    }

    return token
  })
}