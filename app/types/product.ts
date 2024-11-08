interface ProductInventory {
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

interface ProductImage {
    color: string;
    image_url: string;
}

interface ProductCategory {
    category_id: string;
    created_at: string;
    name: string;
}

interface ProductCollection {
    collection_id: string;
    created_at: string;
    description: string;
    image_url: string;
    name: string;
}

export interface Product {
    product_id: string;
    rating: number;
    reviews: number;
    size: number[];
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
}
