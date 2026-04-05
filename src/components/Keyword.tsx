// components/Keyword.tsx

type Props = {
  children: React.ReactNode
}

export function Keyword({ children }: Props) {
  return <span className="keyword">{children}</span>
}