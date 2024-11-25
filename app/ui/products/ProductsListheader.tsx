'use client';

import { AppButton } from '@/app/ui/AppButton';

interface ProductsListHeaderProps {
    title: string;
}

export const ProductsListHeader: React.FC<ProductsListHeaderProps> = ({
    title,
}) => {
    // make redirect to full products list with filter and sorting
    const onViewAllClick = () => {};

    return (
        <header
            className="flex gap-4 justify-between pb-5 w-full"
            id="product-list-heading"
        >
            <h1 className="font-semibold text-3xl text-neutral-900">{title}</h1>
            <AppButton title="View all" onClick={onViewAllClick} />
        </header>
    );
};
