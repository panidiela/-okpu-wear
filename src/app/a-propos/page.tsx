import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "À propos — Ọkpụ Wear",
  description: "L'histoire derrière la marque Ọkpụ Wear.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0B0B0B] text-[#F7F4EE] py-20 md:py-28 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/patterns/geo-01.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "80px",
            opacity: 0.04,
          }}
          aria-hidden
        />
        <div className="relative z-10">
          <Heading as="h1" eyebrow="La marque">
            <span className="text-[#F7F4EE]">Notre histoire</span>
          </Heading>
        </div>
      </section>

      {/* Corps */}
      <Section pattern>
        <Container narrow>
          <div className="space-y-8 font-[family-name:var(--font-inter)] text-sm text-[#B7B2A9] leading-relaxed">
            <p>
              <span className="font-[family-name:var(--font-cormorant)] text-[#0B0B0B] text-xl not-italic">
                Ọkpụ
              </span>{" "}
              — prononcé <em>okpu</em> — signifie{" "}
              <span className="font-[family-name:var(--font-cormorant)] text-[#0B0B0B] text-lg italic">bonnet</span>{" "}
              en igbo, une langue parlée principalement au Nigeria. Ce mot simple porte en lui une richesse
              culturelle immense.
            </p>

            <p>
              La marque est née d&apos;un désir de créer des pièces qui honorent le patrimoine africain tout en
              s&apos;inscrivant dans une esthétique contemporaine. Chaque bonnet est pensé comme une œuvre à part
              entière — une rencontre entre la tradition et le streetwear d&apos;aujourd&apos;hui.
            </p>

            <p>
              Ici, pas de production de masse. Chaque pièce est fabriquée avec soin, en quantités limitées,
              pour garantir une qualité irréprochable et préserver l&apos;unicité de chaque création.
            </p>

            <p>
              Porter un bonnet Ọkpụ, c&apos;est choisir de porter une histoire — et de la réécrire à ta façon.
            </p>
          </div>

          {/* Séparateur or */}
          <div className="w-16 h-px bg-[#C9A45C] my-14" />

          {/* CTA contact */}
          <div>
            <Heading as="h3" eyebrow="Commander" className="mb-6">
              Une question ?
            </Heading>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#B7B2A9] leading-relaxed mb-8">
              Toutes les commandes se font directement via WhatsApp. Clique ci-dessous pour nous contacter.
            </p>
            <ButtonLink
              href="https://wa.me/22901000000"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Nous contacter
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
