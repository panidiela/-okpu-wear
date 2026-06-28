import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export const metadata = {
  title: "Collection — Ọkpụ Wear",
  description: "Découvrez tous les bonnets et accessoires Ọkpụ.",
};

export default function CollectionPage() {
  return (
    <>
      {/* Header page */}
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
        <div className="relative z-10">
          <Heading as="h1" eyebrow="Ọkpụ Wear">
            <span className="text-[#F7F4EE]">Collection</span>
          </Heading>
        </div>
      </section>

      {/* Grille */}
      <Section pattern>
        <Container>
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#B7B2A9] tracking-[0.1em] mb-10">
            {products.length} pièce{products.length > 1 ? "s" : ""}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
