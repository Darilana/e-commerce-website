import axios, { AxiosError, AxiosResponse } from 'axios';
import { Product } from '@/app/types/product';
import { ProductsPagination } from '@/app/types/productPagination';
import { CollectionName } from '@/app/constants/products';

export interface ProductListResponse {
    data: Product[];
    pagination: ProductsPagination;
}

export const fetchProductsList = async (
    collection: CollectionName,
    numberOfProductsToFetch: number = 9
): Promise<{
    products: Product[];
    pagination: ProductsPagination;
}> => {
    try {
        const url = new URL(`${process.env.hostURL}/products`);
        const params = new URLSearchParams();
        params.set('collection', collection);
        params.set('per_page', String(numberOfProductsToFetch));
        url.search = params.toString();

        const response: AxiosResponse<ProductListResponse> = await axios.get(
            url.href
        );
        const { data: products, pagination } = response.data;

        return { products, pagination };
    } catch {
        throw new Error('Failed to fetch the list of products.');
    }
};

export const fetchProduct = async (
    productId: string
): Promise<Product | null> => {
    try {
        const response: AxiosResponse<Product> = await axios.get(
            `${process.env.hostURL}/products/${productId}`
        );

        return response.data;
    } catch (e) {
        if (e instanceof AxiosError && e.status === 404) {
            return null;
        }

        throw new Error('Failed to fetch requested product.');
    }
};
