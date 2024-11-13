import { fetchProductsList } from '@/app/lib/products';
import { ProductsList } from '@/app/ui/products/ProductsList';
import {
    CollectionName,
    NUMBER_OF_LATEST_ARRIVAL,
} from '@/app/constants/products';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Products',
};

export default async function Page() {
    const { products } = await fetchProductsList(
        CollectionName.Latest,
        NUMBER_OF_LATEST_ARRIVAL
    );

    return (
        <main className="w-full h-screen lg:p-24 p-10 font-sans flex flex-col items-center">
            <ProductsList products={products} headerTitle="Latest Arrivals" />
        </main>
    );
}
