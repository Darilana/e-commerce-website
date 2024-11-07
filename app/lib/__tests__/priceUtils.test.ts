import { Product } from '@/app/types/product'
import '@testing-library/jest-dom'
import { getPriceByColor } from '../priceUtils';

describe('priceUtils', () => {
    describe('getPriceByColor', () => {
        const product = {
            inventory: [
                { color: 'green', list_price: 20, sale_price: 15 },
                { color: 'black', list_price: 30, sale_price: 20 },
                { color: 'red', list_price: 45, sale_price: 40 }
            ]
        } as Product;

        it('should return correct list price and sale price', () => {
            expect(getPriceByColor(product, 'black')).toEqual({ salePrice: 20, listPrice: 30 });
        });
    })
})