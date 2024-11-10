'use client';

interface ProductsListHeaderProps {
    title: string;
}

export const ProductsListHeader: React.FC<ProductsListHeaderProps> = ({
    title,
}) => {
    // make redirect to full products list with filter and sorting
    const onViewAllClick = () => {};

    return (
        <div className="flex gap-4 justify-between pb-5 w-full">
            <h1 className="font-semibold text-3xl text-neutral-900">{title}</h1>
            <button
                className="font-medium text-neutral-900 text-sm bg-white rounded-lg border-[1px] border-solid border-neutral-200 px-4 py-2.5 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                onClick={onViewAllClick}
            >
                View all
            </button>
        </div>
    );
};
