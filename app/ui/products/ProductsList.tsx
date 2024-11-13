'use client';

import { Product } from '@/app/types/product';
import { ProductCard } from '@/app/ui/products/ProductCard';
import { ProductsListHeader } from '@/app/ui/products/ProductsListheader';
import { EmptyProductList } from '@/app/ui/products/EmptyProductList';

interface ProductsListProps {
    products: Product[];
    headerTitle: string;
}

export const ProductsList: React.FC<ProductsListProps> = ({
    products,
    headerTitle,
}) => {
    if (!products.length) {
        return <EmptyProductList />;
    }

    return (
        <section
            className="flex flex-col gap-8 w-full 2xl:max-w-[1280px]"
            aria-labelledby="product-list-heading"
        >
            <ProductsListHeader title={headerTitle} />
            <div
                className="grid xl:grid-cols-4 xl:gap-12 md:grid-cols-3 md:gap-8 gap-4"
                role="list"
            >
                {products.map((product) => (
                    <ProductCard key={product.product_id} product={product} />
                ))}
            </div>
        </section>
    );
};
