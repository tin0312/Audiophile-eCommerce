import LabelProp from "@/types/global"

export default function ButtonSecondary( {label} : LabelProp){
        return (
            <button
            className= "hover:bg-dark-900 border border-dark-900 text-dark-850 font-bold hover:text-light-100 px-6 py-3"
            >
                {label}
            </button>
        )
}