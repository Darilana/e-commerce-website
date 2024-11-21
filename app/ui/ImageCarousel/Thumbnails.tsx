import React from 'react';

import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';

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
        <div className="box-border">
            <Swiper
                onSwiper={setActiveThumb}
                spaceBetween={20}
                slidesPerView="auto"
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                // className="h-full relative"
                className="mySwiper w-full h-full"
            >
                {images.map((image, index) => (
                    <SwiperSlide
                        key={index}
                        className="cursor-pointer border-[3px] border-solid border-transparent overflow-hidden rounded-lg w-1/4"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={image.image_url}
                                className="object-cover rounded-lg"
                                alt={`Thumbnail ${index + 1}`}
                                height={190}
                                width={160}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
