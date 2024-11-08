import { fetchProductsList } from '@/app/lib/products';
import { ProductsList } from '@/app/ui/products/ProductsList';

export default async function Page() {
    const { products } = await fetchProductsList('latest');

    return (
        <main className="w-full h-screen">
            <ProductsList products={products} headerTitle="Latest Arrivals" />
        </main>
    );
}
