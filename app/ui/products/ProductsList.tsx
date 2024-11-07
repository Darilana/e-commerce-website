import { Product } from "@/app/types/products";
import { ProductCard } from "@/app/ui/products/ProductCard";

interface ProductsListProps {
  headerTitle: string;
  products: Product[];
}

export const ProductsList: React.FC<ProductsListProps> = ({
  products,
  headerTitle,
}) => {
  if (!products.length) {
    return <div>No products to display</div>;
  }

  return (
    <section className="flex flex-col">
      <header>{headerTitle}</header>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </section>
  );
};
