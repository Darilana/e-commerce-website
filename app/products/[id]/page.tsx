import { ProductProvider } from '@/app/contexts/ProductContext';
import { fetchProduct } from '@/app/api/products';
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
        <ProductProvider product={product}>
            <main className="w-full h-screen lg:p-24 p-10 font-sansr">
                <ProductDetails />
            </main>
        </ProductProvider>
    );
}
