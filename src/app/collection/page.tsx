import Image from "next/image";
import { products, collections } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export const metadata = {
  title: "Collection ORIGINES — Ọkpụ Wear",
  description: "10 œuvres portables. Une collection inspirée du patrimoine africain.",
};

export default function CollectionPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0B0B0B] text-[#F7F4EE] py-20 md:py-28 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/patterns/geo-03.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "60px",
            opacity: 0.05,
          }}
          aria-hidden
        />
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/logo/icon.png"
            alt=""
            width={64}
            height={64}
            aria-hidden
            className="w-12 h-12 md:w-16 md:h-16 mb-6 opacity-90"
          />
          <Heading as="h1" eyebrow="Collection 001">
            <span className="text-[#F7F4EE]">ORIGINES</span>
          </Heading>
          <p className="mt-6 font-[family-name:var(--font-inter)] text-sm text-[#B7B2A9] max-w-sm mx-auto leading-relaxed">
            Des œuvres façonnées pour porter une histoire. Chaque pièce donne forme à un fragment d&apos;Afrique contemporaine.
          </p>
        </div>
      </section>

      {/* Grille */}
      <Section pattern>
        <Container>
          {collections.map((col) => (
            <div key={col}>
              <div className="flex items-center gap-4 mb-10">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B7B2A9] font-[family-name:var(--font-inter)]">
                  {col}
                </span>
                <div className="flex-1 h-px bg-[#E8E4DD]" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {products
                  .filter((p) => p.collection === col)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}
