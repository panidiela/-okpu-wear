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
    description: product.shortStory,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const waLink = `https://wa.me/237657767577?text=${encodeURIComponent(product.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <Container className="py-12 md:py-20">

        {/* Retour */}
        <Link
          href="/collection"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#B7B2A9] hover:text-[#0B0B0B] transition-colors duration-300 font-[family-name:var(--font-inter)] mb-14"
        >
          ← Collection ORIGINES
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

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
              <div className="w-full h-full flex items-center justify-center px-8 text-center">
                <span className="font-[family-name:var(--font-cormorant)] text-[#B7B2A9] text-2xl italic leading-relaxed">
                  {product.name}
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">

            {/* Collection + titre */}
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#B7B2A9] mb-3 font-[family-name:var(--font-inter)]">
              Collection {product.collection}
            </p>
            <Heading as="h1">{product.name}</Heading>

            {/* Prix */}
            <p className="mt-5 font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#C9A45C]">
              {product.price} {product.currency}
            </p>

            {/* Séparateur */}
            <div className="w-12 h-px bg-[#C9A45C] my-8" />

            {/* Histoire courte */}
            <p className="font-[family-name:var(--font-cormorant)] text-xl font-light italic text-[#0B0B0B] leading-relaxed mb-4">
              &ldquo;{product.shortStory}&rdquo;
            </p>

            {/* Description */}
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#B7B2A9] leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Tailles */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#B7B2A9] mb-3 font-[family-name:var(--font-inter)]">
                Tailles disponibles
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="border border-[#E8E4DD] text-[#0B0B0B] text-xs font-[family-name:var(--font-inter)] px-3 py-1.5 tracking-[0.08em]"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <ButtonLink
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full justify-center"
            >
              Commander sur WhatsApp
            </ButtonLink>

            <p className="mt-4 text-center text-[11px] text-[#B7B2A9] font-[family-name:var(--font-inter)] leading-relaxed">
              Tu seras redirigé(e) vers WhatsApp. Précise ta taille dans le message.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
