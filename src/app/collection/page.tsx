import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Collection — Ọkpụ Wear",
  description: "Découvrez tous les bonnets et accessoires Ọkpụ.",
};

export default function CollectionPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-stone-900 mb-2">Collection</h1>
      <p className="text-stone-500 mb-8">
        {products.length} pièce{products.length > 1 ? "s" : ""} disponible
        {products.length > 1 ? "s" : ""}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
