import axios, { AxiosResponse } from "axios";
import { Product, ProductsPagination } from "../types/products";

interface ProductListResponse {
  data: Product[];
  pagination: ProductsPagination;
}

export const fetchProductsList = async (collection: string) => {
  try {
    const response: AxiosResponse<ProductListResponse> = await axios.get(
      `https://www.greatfrontend.com/api/projects/challenges/e-commerce/products?collection=${collection}`,
    );
    const { data: products, pagination } = response.data;

    return { products, pagination };
  } catch (e) {
    console.error(e);
  }
};