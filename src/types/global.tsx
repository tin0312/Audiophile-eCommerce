export type LabelProp = {
    label: string
}
export type ProductTypes = {
    id: number,
    name: string,
    price: number,
    category: string,
    slug: string,
    new: boolean,
    description: string,
    features: string,
    includes: Array<{
        quantity: number,
        item: string
    }>
}

export type ProductProp = {
    product: ProductTypes,  
}
