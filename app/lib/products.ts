import axios, { AxiosResponse } from 'axios';
import { Product } from '@/app/types/product';
import { ProductsPagination } from '@/app/types/productPagination';

export interface ProductListResponse {
    data: Product[];
    pagination: ProductsPagination;
}

export const fetchProductsList = async (
    collection: string,
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
    } catch (_e) {
        throw new Error('Failed to fetch the list of products.');
    }
};
