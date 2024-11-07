import { fetchProductsList } from "@/app/lib/data";
import { ProductsList } from "@/app/ui/products/ProductsList";

export default async function Page() {
  const data = await fetchProductsList();

  return (
    <main className="w-full">
      <ProductsList
        products={data?.products || []}
        headerTitle="Latest Arrivals"
      />
    </main>
  );
}
