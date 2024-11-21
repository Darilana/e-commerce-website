'use client';

import { ImageCarousel } from '@/app/ui/ImageCarousel/ImageCarousel';
import { useProduct } from '@/app/contexts/ProductContext';
// import { Product } from '@/app/types/product';
import React from 'react';

export const ProductDetails: React.FC = () => {
    const { product } = useProduct();
    const { images } = product;

    // const [selectedColor, setSelectedColor] = useState(colors[0]);
    // const imagesBySelectedColor = images.filter(
    //     ({ color }) => color === selectedColor
    // );

    return (
        <section>
            <ImageCarousel images={images} />
        </section>
    );
};
