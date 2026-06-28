import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductById, products } from "@/data/products";

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};
  return {
    title: `${product.name} — Ọkpụ Wear`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const price = new Intl.NumberFormat("fr-FR").format(product.price);
  const waLink = `https://wa.me/22901000000?text=${encodeURIComponent(product.whatsappMessage)}`;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 mb-8">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-400 text-sm">
            Photo à venir
          </div>
        )}
      </div>

      {/* Info */}
      <p className="text-xs text-stone-400 uppercase tracking-widest mb-1">{product.category}</p>
      <h1 className="text-2xl font-bold text-stone-900 mb-2">{product.name}</h1>
      <p className="text-xl font-semibold text-stone-700 mb-6">{price} FCFA</p>
      <p className="text-stone-600 leading-relaxed mb-8">{product.description}</p>

      {/* CTA */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-center py-4 rounded-full transition-colors text-lg"
      >
        Commander via WhatsApp
      </a>
      <p className="text-center text-xs text-stone-400 mt-3">
        Tu seras redirigé(e) vers WhatsApp pour finaliser ta commande.
      </p>
    </div>
  );
}
