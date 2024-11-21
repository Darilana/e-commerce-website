import React, { useState } from 'react';

import { SwiperClass } from 'swiper/react';

import { ProductImage } from '../../types/ProductImage';
import { Slider } from './Slider';
import { Thumbnails } from './Thumbnails';

interface ImageCarouselProps {
    images: ProductImage[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [activeThumb, setActiveThumb] = useState<SwiperClass | null>(null);

    return (
        <div className="w-2/4 h-4/5 flex flex-col gap-4">
            <Slider images={images} activeThumb={activeThumb} />
            <Thumbnails images={images} setActiveThumb={setActiveThumb} />
        </div>
    );
};
