import { Link } from 'react-router-dom'

type Props = {
  lesson: string
}

export function LearnNext({ lesson }: Props) {
  return (
    <div className="learn-next">
      <Link
        to={`/learn/${lesson}`}
        className="button button--primary"
      >
        Next
      </Link>
    </div>
  )
}