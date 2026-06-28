import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const price = new Intl.NumberFormat("fr-FR").format(product.price);

  return (
    <Link
      href={`/produit/${product.id}`}
      className="group block rounded-2xl overflow-hidden border border-stone-200 hover:shadow-md transition-shadow bg-white"
    >
      <div className="relative aspect-square bg-stone-100">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs">
            Photo à venir
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="font-semibold text-stone-900 text-sm leading-tight">{product.name}</p>
        <p className="text-stone-500 text-xs mt-1">{price} FCFA</p>
      </div>
    </Link>
  );
}
