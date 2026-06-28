import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const price = new Intl.NumberFormat("fr-FR").format(product.price);

  return (
    <Link
      href={`/produit/${product.id}`}
      className="group block bg-[#F7F4EE] border border-[#E8E4DD] overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(11,11,11,0.08)] hover:-translate-y-0.5"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-[#E8E4DD] overflow-hidden">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-[family-name:var(--font-cormorant)] text-[#B7B2A9] text-sm italic">
              Photo à venir
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 border-t border-[#E8E4DD]">
        <p className="font-[family-name:var(--font-cormorant)] text-base font-light text-[#0B0B0B] leading-tight">
          {product.name}
        </p>
        <p className="mt-1 font-[family-name:var(--font-inter)] text-xs text-[#B7B2A9] tracking-[0.06em]">
          {price} FCFA
        </p>
      </div>
    </Link>
  );
}
