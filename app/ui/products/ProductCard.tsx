"use client";

import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Product } from "@/app/types/product";
import { formatPrice, getPriceByColor } from "@/app/lib/priceUtils";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const getSelectedImageUrl = (color: string): string =>
    product.images.find((image) => image.color === color)?.image_url || "";

  const handleColorChange = (color: string) => {
    if (color !== selectedColor) {
      setSelectedColor(color);
    }
  };

  const { salePrice, listPrice } = getPriceByColor(product, selectedColor);
  const formattedListPrice = formatPrice(listPrice);
  const formattedSalePrice = formatPrice(salePrice);

  return (
    <div className="lg:w-[280px] lg:h-[470px] flex flex-col">
      <div className="lg:h-[300px]">
        <Image
          className="lg:w-[280px] lg:h-[300px] object-cover rounded-lg"
          src={getSelectedImageUrl(selectedColor)}
          width={280}
          height={300}
          alt={product.description}
          priority={true}
        />
      </div>
      <div className="flex flex-col gap-3 py-4">
        <div className="flex flex-col gap-0.5">
          <p className="font-normal text-xs text-neutral-600">
            {selectedColor}
          </p>
          <p className="font-normal text-lg text-neutral-900">{product.name}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-normal text-lg text-neutral-500">
          {formattedListPrice}
        </span>
        {salePrice !== listPrice && (
          <span className="font-normal text-xs line-through text-neutral-600">
            {formattedSalePrice}
          </span>
        )}
      </div>
      <div className="flex gap-1">
        {product.colors.map((c) => {
          return (
            <div key={c} className="flex justify-center items-center gap-2 p-1">
              <button
                onClick={() => handleColorChange(c)}
                style={{ backgroundColor: c }}
                className={clsx(
                  "w-4 h-4 rounded-full",
                  c === "white" && "border border-gray-400",
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
