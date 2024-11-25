'use client';

import React, { useState } from 'react';

import { SwiperClass } from 'swiper/react';

import { ProductImage } from '../../../types/productImage';
import { Slider } from './Slider';
import { Thumbnails } from './Thumbnails';

interface ImageCarouselProps {
    images: ProductImage[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [activeThumb, setActiveThumb] = useState<SwiperClass | null>(null);

    return (
        <div className="lg:w-1/2 w-full h-screen flex flex-col gap-4">
            <Slider images={images} activeThumb={activeThumb} />
            {images.length > 1 && (
                <Thumbnails images={images} setActiveThumb={setActiveThumb} />
            )}
        </div>
    );
};
