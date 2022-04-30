export interface Product {
    id: string,
    title: string,
    price: number,
    rating: {
        rate: number,
        count: number
    },
    image: string,
    description: string
}