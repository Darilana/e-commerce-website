import React from 'react';

import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { ProductImage } from '@/app/types/ProductImage';

interface ThumbnailsProps {
    images: ProductImage[];
    setActiveThumb: React.Dispatch<React.SetStateAction<SwiperClass | null>>;
}

export const Thumbnails: React.FC<ThumbnailsProps> = ({
    images,
    setActiveThumb,
}) => {
    return (
        <div>
            <Swiper
                onSwiper={setActiveThumb}
                spaceBetween={10}
                slidesPerView="auto"
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {images.map((image, index) => (
                    <SwiperSlide
                        key={index}
                        className="cursor-pointer rounded-lg"
                        style={{ width: '25%' }}
                    >
                        <Image
                            src={image.image_url}
                            className="object-cover rounded-lg"
                            alt={`Thumbnail ${index + 1}`}
                            height={190}
                            width={160}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
