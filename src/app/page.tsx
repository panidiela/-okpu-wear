import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";

const WHATSAPP_NUMBER = "237657767577";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center bg-[#0B0B0B] text-[#F7F4EE] px-5 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/patterns/geo-02.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "160px",
            opacity: 0.04,
          }}
          aria-hidden
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#C9A45C]" aria-hidden />

        <div className="relative z-10 flex flex-col items-center gap-6 animate-[fade-up_0.9s_ease_forwards]">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A45C] font-[family-name:var(--font-inter)]">
            Collection 001 — ORIGINES
          </p>
          <Image
            src="/logo/logo-hero.svg"
            alt="Ọkpụ"
            width={400}
            height={220}
            className="w-auto h-[110px] sm:h-[160px] md:h-[200px] lg:h-[220px]"
            priority
          />
          <p className="font-[family-name:var(--font-inter)] text-[#B7B2A9] text-sm leading-relaxed max-w-xs">
            Dix œuvres portables.<br />
            Chacune raconte quelque chose que les mots ne suffisent pas à dire.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <ButtonLink href="/collection" variant="secondary"
              className="border-[#F7F4EE] text-[#F7F4EE] hover:bg-[#F7F4EE] hover:text-[#0B0B0B]">
              Découvrir les œuvres
            </ButtonLink>
            <ButtonLink
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="bg-[#C9A45C] border-[#C9A45C] text-[#0B0B0B] hover:bg-[#F7F4EE] hover:border-[#F7F4EE]"
            >
              Commander
            </ButtonLink>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent to-[#C9A45C]" aria-hidden />
      </section>

      {/* ── SÉLECTION ────────────────────────────────────── */}
      <Section pattern>
        <Container>
          <div className="flex items-end justify-between mb-12 gap-4">
            <Heading as="h2" eyebrow="Collection ORIGINES">
              Les œuvres
            </Heading>
            <Link
              href="/collection"
              className="text-[10px] uppercase tracking-[0.2em] text-[#B7B2A9] hover:text-[#0B0B0B] transition-colors duration-300 font-[family-name:var(--font-inter)] whitespace-nowrap"
            >
              Voir les 10 →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── MANIFESTE ────────────────────────────────────── */}
      <Section dark pattern>
        <Container narrow>
          <div className="text-center">
            <Heading as="h2" eyebrow="Notre approche" gold>
              Des œuvres, pas des T-shirts.
            </Heading>
            <p className="mt-6 text-[#B7B2A9] font-[family-name:var(--font-inter)] text-sm leading-relaxed">
              Ọkpụ crée des pièces qui portent une histoire, une intention, une mémoire.
              Chaque création de la collection ORIGINES est pensée comme une œuvre d&apos;art portée —
              ancrée dans le patrimoine africain, faite pour aujourd&apos;hui.
            </p>
            <div className="mt-10">
              <ButtonLink href="/a-propos" variant="secondary"
                className="border-[#F7F4EE] text-[#F7F4EE] hover:bg-[#F7F4EE] hover:text-[#0B0B0B]">
                Notre histoire
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
