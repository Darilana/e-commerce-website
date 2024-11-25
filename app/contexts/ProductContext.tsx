'use client';

import React, { createContext, useContext, useState } from 'react';
import { Product } from '@/app/types/product';

interface ProductContext {
    product: Product;
    setProduct: React.Dispatch<React.SetStateAction<Product>>;
}

const ProductContext = createContext<ProductContext | null>(null);

export const ProductProvider = ({
    product: initialProduct,
    children,
}: {
    product: Product;
    children: React.ReactNode;
}) => {
    const [product, setProduct] = useState(initialProduct);

    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    const product = useContext(ProductContext);

    if (!product) {
        throw new Error('useProduct must be used within a ProductProvider');
    }

    return product;
};
