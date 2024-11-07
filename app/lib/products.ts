import axios, { AxiosResponse } from 'axios';
import { Product } from '@/app/types/product';
import { ProductsPagination } from '@/app/types/productPagination';

export interface ProductListResponse {
    data: Product[];
    pagination: ProductsPagination;
}

export const fetchProductsList = async (
    collection: string
): Promise<{
    products: Product[];
    pagination: ProductsPagination;
}> => {
    try {
        const response: AxiosResponse<ProductListResponse> = await axios.get(
            `${process.env.hostURL}/products?collection=${collection}`
        );
        const { data: products, pagination } = response.data;

        return { products, pagination };
    } catch (e) {
        throw new Error('Failed to fetch the list of products.');
    }
};
