"use client"
type FormInputProps = {
    label: string;
    id: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormInput({ label, type, value,id, onChange} : FormInputProps){
    return (
        <label htmlFor={id}>
            {label}
            <input
                id ={id}
                type={type}
                value={value}
                onChange={onChange}
                className="border border-gray-300 rounded-md px-4 py-3 w-full"
                placeholder= {`Your ${label} here`}
                />
        </label>
    )
}