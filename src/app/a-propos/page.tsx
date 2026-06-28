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
              <span className="font-[family-name:var(--font-cormorant)] text-[#0B0B0B] text-xl not-italic">Ọkpụ</span>
              {" "}— prononcé <em>Okpu</em> — est inspiré d&apos;un mot de la langue igbo évoquant{" "}
              <span className="font-[family-name:var(--font-cormorant)] text-[#0B0B0B] text-lg italic">le sculpteur</span>,
              celui qui révèle une œuvre en donnant forme à la matière.
            </p>

            <p>
              Cette idée est au cœur de notre marque.
            </p>

            <p>
              Comme le sculpteur façonne le bois ou la pierre, nous façonnons des histoires, des émotions
              et des fragments de la culture africaine pour leur donner une nouvelle vie à travers l&apos;art
              contemporain.
            </p>

            <p>
              Chaque création est pensée comme une œuvre à part entière. Inspirée par les traditions, les
              visages, les savoir-faire et les scènes de vie du continent africain, elle est réinterprétée
              avec une sensibilité moderne afin de créer des pièces intemporelles.
            </p>

            <p className="font-[family-name:var(--font-cormorant)] text-[#0B0B0B] text-xl leading-snug">
              Nous ne créons pas simplement des vêtements.<br />
              Nous créons des œuvres que l&apos;on porte.
            </p>

            <p>
              Chaque illustration est réalisée avec exigence, produite en quantité limitée et imprimée
              avec le plus grand soin afin de préserver sa qualité, son caractère et son authenticité.
            </p>

            <p>
              Porter une création{" "}
              <span className="font-[family-name:var(--font-cormorant)] text-[#0B0B0B] text-base not-italic">Ọkpụ</span>,
              c&apos;est porter une histoire, célébrer une culture et faire vivre un fragment de l&apos;Afrique
              contemporaine.
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
