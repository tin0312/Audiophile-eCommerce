type Accessory = {
    quantity: number,
    name:string
}

export default function Accessory({ quantity, name } : Accessory){
    return(
        <div className="flex gap-4">
            <span className = "text-sm font-bold text-primary-700">{quantity}x</span>
            <p className="opacity-50">{name}</p>
        </div>
    )
}