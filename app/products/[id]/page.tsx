import { fetchProduct } from '@/app/lib/products';
import { ProductDetails } from '@/app/ui/productDetails/ProductDetails';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Product details',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const product = await fetchProduct(id);

    if (!product) {
        notFound();
    }

    return (
        <main className="w-full h-screen lg:p-24 p-10 font-sans flex flex-col items-center">
            <ProductDetails product={product} />
        </main>
    );
}
