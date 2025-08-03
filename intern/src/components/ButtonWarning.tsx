import { Link } from "react-router-dom"

type prop = {
    Label: string;
    ButtonLabel: string;
}

export const ButtonWarning = ({Label, ButtonLabel}: prop) => {
     return (
        <p className="text-center mb-5 font-semibold pt-4 text-neutral-700">{Label}<Link to={'/login'} className=" underline text-neutral-900">{ButtonLabel}</Link></p>
     )
}