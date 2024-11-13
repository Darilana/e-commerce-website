'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Product } from '@/app/types/product';
import { formatPrice, getPriceByColor } from '@/app/lib/priceUtils';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

    const getSelectedImageUrl = (color: string): string =>
        product.images.find((image) => image.color === color)?.image_url || '';

    const handleColorChange = (color: string) => {
        if (color !== selectedColor) {
            setSelectedColor(color);
        }
    };

    const { salePrice, listPrice } = getPriceByColor(product, selectedColor);
    const formattedListPrice = formatPrice(listPrice);
    const formattedSalePrice = formatPrice(salePrice);

    return (
        <article
            className="flex flex-col pb-5"
            role="listitem"
            aria-labelledby="product-name"
        >
            <div className="w-[280px] h-[300px] relative">
                <Image
                    className="object-cover rounded-lg"
                    src={getSelectedImageUrl(selectedColor)}
                    fill
                    alt={product.description}
                    priority={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </div>
            <div className="flex flex-col gap-3 py-4">
                <div className="flex flex-col py-4 gap-0.5">
                    <p className="text-xs text-neutral-600">{selectedColor}</p>
                    <p id="product-name" className="text-lg text-neutral-900">
                        {product.name}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span
                    className="text-lg text-neutral-500"
                    aria-label="Current price"
                >
                    {formattedSalePrice}
                </span>
                {salePrice !== listPrice && (
                    <span
                        className="text-xs text-neutral-600"
                        aria-label="Old price"
                    >
                        <s>{formattedListPrice}</s>
                    </span>
                )}
            </div>
            <div className="flex gap-2 pt-4" aria-label="Choose a color">
                {product.colors.map((color) => {
                    return (
                        <button
                            key={color}
                            aria-pressed={selectedColor === color}
                            aria-label={`Switch to color: ${color}`}
                            onClick={() => handleColorChange(color)}
                            style={{ backgroundColor: color }}
                            className={clsx(
                                'w-4 h-4 rounded-full focus:outline focus:outline-2 focus:outline-blue-600 focus:outline-offset-2',
                                color === 'white' && 'border border-gray-400',
                                selectedColor === color &&
                                    `outline outline-1 outline-gray-400 outline-offset-2`
                            )}
                        />
                    );
                })}
            </div>
        </article>
    );
};
