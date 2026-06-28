import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
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
          <div className="w-full h-full flex items-center justify-center px-4 text-center">
            <span className="font-[family-name:var(--font-cormorant)] text-[#B7B2A9] text-sm italic leading-relaxed">
              {product.name}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 border-t border-[#E8E4DD]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#B7B2A9] mb-1.5 font-[family-name:var(--font-inter)]">
          {product.collection}
        </p>
        <p className="font-[family-name:var(--font-cormorant)] text-lg font-light text-[#0B0B0B] leading-tight mb-3">
          {product.name}
        </p>
        <div className="flex items-center justify-between">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#B7B2A9]">
            {product.price} {product.currency}
          </p>
          <span className="text-[10px] uppercase tracking-[0.14em] text-[#C9A45C] font-[family-name:var(--font-inter)] group-hover:text-[#0B0B0B] transition-colors duration-300">
            Découvrir →
          </span>
        </div>
      </div>
    </Link>
  );
}
