export interface Item {
    id: string,
    title: string,
    price: {
        currency: string,
        amount: number,
        decimals: string
    },
    picture: string,
    condition: string,
    free_shipping: boolean,
    sold_quantity: number,
    description: string,
    address: {
        state_name: string
    }
}
