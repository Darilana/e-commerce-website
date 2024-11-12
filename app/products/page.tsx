import { fetchProductsList } from '@/app/lib/products';
import { ProductsList } from '@/app/ui/products/ProductsList';
import {
    CollectionName,
    NUMBER_OF_LATEST_ARRIVAL,
} from '@/app/constants/products';

export default async function Page() {
    const { products } = await fetchProductsList(
        CollectionName.Latest,
        NUMBER_OF_LATEST_ARRIVAL
    );

    return (
        <main className="w-full h-screen p-24 font-sans flex flex-col items-center ">
            <ProductsList products={products} headerTitle="Latest Arrivals" />
        </main>
    );
}
