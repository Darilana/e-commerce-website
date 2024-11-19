'use client';

import { Product } from '@/app/types/product';
import React from 'react';

interface ProductDetailsProps {
    product: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    return <section>{product.name}</section>;
};
