import '@testing-library/jest-dom';
import axios from 'axios';
import { fetchProductsList, ProductListResponse } from '../products';
import { Product } from '@/app/types/product';
import { ProductsPagination } from '@/app/types/productPagination';
import {
    CollectionName,
    NUMBER_OF_LATEST_ARRIVAL,
} from '@/app/constants/products';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchProductsList', () => {
    it('should return products and pagination when the API call is successful', async () => {
        const mockProducts = [
            { product_id: 'product_id_1' } as Product,
            { product_id: 'product_id_2' } as Product,
        ];
        const mockPagination: ProductsPagination = {
            has_more: false,
            page: 1,
            per_page: 10,
            total: 1,
        };
        const mockResponse: ProductListResponse = {
            data: mockProducts,
            pagination: mockPagination,
        };

        mockedAxios.get.mockResolvedValue({ data: mockResponse });

        const result = await fetchProductsList(
            CollectionName.Latest,
            NUMBER_OF_LATEST_ARRIVAL
        );

        expect(result.products).toEqual(mockProducts);
        expect(result.pagination).toEqual(mockPagination);
        expect(mockedAxios.get).toHaveBeenCalledWith(
            `https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?collection=${CollectionName.Latest}&per_page=${NUMBER_OF_LATEST_ARRIVAL}`
        );
    }),
        it('should throw an error when the API call fails', async () => {
            mockedAxios.get.mockRejectedValue(new Error('API error'));

            await expect(
                fetchProductsList(CollectionName.Latest)
            ).rejects.toThrow('Failed to fetch the list of products.');
        });
});
