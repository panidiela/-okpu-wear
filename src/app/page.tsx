import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";

const WHATSAPP_NUMBER = "22901000000";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section
        className="relative min-h-[90vh] flex flex-col items-center justify-center text-center bg-[#0B0B0B] text-[#F7F4EE] px-5 overflow-hidden"
      >
        {/* Motif fond */}
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

        {/* Ligne décorative or */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#C9A45C]" aria-hidden />

        <div className="relative z-10 flex flex-col items-center gap-6 animate-[fade-up_0.9s_ease_forwards]">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] font-[family-name:var(--font-inter)]">
            Art africain contemporain
          </p>

          <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(5rem,18vw,10rem)] font-light leading-none tracking-[-0.02em]">
            Ọkpụ
          </h1>

          <p className="font-[family-name:var(--font-inter)] text-[#B7B2A9] text-sm leading-relaxed max-w-xs">
            Des bonnets uniques, tricotés à la main,<br />
            nés du patrimoine africain.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <ButtonLink href="/collection" variant="secondary"
              className="border-[#F7F4EE] text-[#F7F4EE] hover:bg-[#F7F4EE] hover:text-[#0B0B0B]">
              Voir la collection
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

        {/* Ligne bas */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-transparent to-[#C9A45C]" aria-hidden />
      </section>

      {/* ── PRODUITS VEDETTES ──────────────────────────────── */}
      <Section pattern>
        <Container>
          <div className="flex items-end justify-between mb-12 gap-4">
            <Heading as="h2" eyebrow="Sélection">
              Nos pièces
            </Heading>
            <Link
              href="/collection"
              className="text-xs uppercase tracking-[0.16em] text-[#B7B2A9] hover:text-[#0B0B0B] transition-colors duration-300 font-[family-name:var(--font-inter)] whitespace-nowrap"
            >
              Tout voir →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── MARQUE ─────────────────────────────────────────── */}
      <Section dark pattern>
        <Container narrow>
          <div className="text-center">
            <Heading as="h2" eyebrow="Notre histoire" gold>
              Ọkpụ, c&apos;est quoi ?
            </Heading>
            <p className="mt-6 text-[#B7B2A9] font-[family-name:var(--font-inter)] text-sm leading-relaxed">
              Ọkpụ signifie <em className="text-[#F7F4EE] not-italic font-light font-[family-name:var(--font-cormorant)] text-base">bonnet</em> en
              igbo. Une marque née de la fierté culturelle africaine et du désir de créer des pièces ancrées dans
              une identité forte.
            </p>
            <div className="mt-10">
              <ButtonLink href="/a-propos" variant="secondary"
                className="border-[#F7F4EE] text-[#F7F4EE] hover:bg-[#F7F4EE] hover:text-[#0B0B0B]">
                En savoir plus
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
