export interface ProductInventory {
    color: string;
    discount: number | null;
    discount_percentage: number | null;
    list_price: number;
    sale_price: number;
    size: number | null;
    sku: string;
    sold: number;
    stock: number;
}
