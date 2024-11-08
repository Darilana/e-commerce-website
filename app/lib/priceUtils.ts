import { Product } from '../types/product';

export const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);

export const getPriceByColor = (product: Product, selectedColor: string) => {
    const inventoryByColor = product.inventory.filter(
        (item) => item.color === selectedColor
    );
    const salePrice = Math.min(
        ...inventoryByColor.map((item) => item.sale_price)
    );
    const listPrice = Math.min(
        ...inventoryByColor.map((item) => item.list_price)
    );

    return { salePrice, listPrice };
};
