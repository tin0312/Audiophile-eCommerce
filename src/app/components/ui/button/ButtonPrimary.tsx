type ButtonPrimaryProps = {
    type: "button" | "submit",
    style: string,
    label: string,
    onClick?: () => void
}


export default function ButtonPrimary({type, style, onClick, label} : ButtonPrimaryProps){
    return (
        <button
        type = {type}
        className = {`px-6 py-3 text-light-100 bg-primary-700 hover:bg-primary-500 ${style}`}
        onClick = {onClick}
        >
            {label}
        </button>
    )
}