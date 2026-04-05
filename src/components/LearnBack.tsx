import { Link } from 'react-router-dom'

type props = {
    linkTo: string
}

export function LearnBack({linkTo}: props) {
  return (
    <div className="learn-back">
      <Link
        to={linkTo}
        className="button button--primary"
      >
        Back
      </Link>
    </div>
  )
}