import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById, products } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";

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
    <div className="min-h-screen bg-[#F7F4EE]">
      <Container className="py-12 md:py-20">
        {/* Retour */}
        <Link
          href="/collection"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#B7B2A9] hover:text-[#0B0B0B] transition-colors duration-300 font-[family-name:var(--font-inter)] mb-12"
        >
          ← Collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Image */}
          <div className="relative aspect-[3/4] bg-[#E8E4DD] overflow-hidden">
            {product.images[0] ? (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-[family-name:var(--font-cormorant)] text-[#B7B2A9] text-lg italic">
                  Photo à venir
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[#B7B2A9] mb-4 font-[family-name:var(--font-inter)]">
              {product.category}
            </p>

            <Heading as="h1">{product.name}</Heading>

            <p className="mt-4 font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#C9A45C]">
              {price} FCFA
            </p>

            {/* Séparateur or */}
            <div className="w-12 h-px bg-[#C9A45C] my-8" />

            <p className="font-[family-name:var(--font-inter)] text-sm text-[#B7B2A9] leading-relaxed mb-10">
              {product.description}
            </p>

            <ButtonLink
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full justify-center"
            >
              Commander via WhatsApp
            </ButtonLink>

            <p className="mt-4 text-center text-xs text-[#B7B2A9] font-[family-name:var(--font-inter)]">
              Tu seras redirigé(e) vers WhatsApp pour finaliser ta commande.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
