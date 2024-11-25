import { ProductCategory } from './productCategory';
import { ProductCollection } from './productCollection';
import { ProductImage } from './productImage';
import { ProductInfo } from './productInfo';
import { ProductInventory } from './productInventory';

export interface Product {
    product_id: string;
    rating: number;
    reviews: number;
    sold: number;
    sizes: number[];
    priceRange: {
        highest: number;
        lowest: number;
    };
    name: string;
    inventory: ProductInventory[];
    images: ProductImage[];
    description: string;
    created_at: string;
    colors: string[];
    category: ProductCategory;
    collection: ProductCollection;
    info?: ProductInfo[];
}
