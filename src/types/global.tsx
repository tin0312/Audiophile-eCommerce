export type LabelProp = {
    label: string
}
export type ProductTypes = {
    productID: number,
    productName: string,
    productPrice: number,
    productCategory: string,
    productDescription: string,
    productFeatures: string,
    productIncludes: Array<{
        quantity: number,
        item: string
    }>
}

export type ProductProp = {
    product: ProductTypes,  
}
