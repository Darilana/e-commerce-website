import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { ProductImage } from '@/app/types/productImage';

interface SliderProps {
    images: ProductImage[];
    activeThumb: SwiperClass | null;
}

export const Slider: React.FC<SliderProps> = ({ images, activeThumb }) => {
    return (
        <div>
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: activeThumb }}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="rounded-lg">
                        <Image
                            src={image.image_url}
                            className="object-cover rounded-lg"
                            alt={`Slide ${index + 1}`}
                            height={600}
                            width={800}
                            priority={index === 0}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
