import { LearnBack } from "./LearnBack"
import { LearnNext } from "./LearnNext"

type props = {
    linkTo: string,
    backTo: string
}

export const LearnNav = ({linkTo, backTo}: props) => {
    return (
        <div className="learn-nav">
            <LearnBack linkTo={backTo}/>
            <LearnNext lesson={linkTo} />
        </div>
    )
}