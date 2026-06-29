import Image from "next/image";
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
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/logo/icon.png"
            alt=""
            width={64}
            height={64}
            aria-hidden
            className="w-12 h-12 md:w-16 md:h-16 mb-6 opacity-90"
          />
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
              <strong className="text-[#0B0B0B] font-semibold">Ọkpụ</strong>
              {" "}— prononcé <em>Okpu</em> — est inspiré d&apos;un mot de la langue igbo évoquant{" "}
              <strong className="text-[#0B0B0B] font-semibold">le sculpteur</strong>,
              celui qui révèle une œuvre en donnant forme à la matière.
            </p>

            <p>
              Depuis des siècles, le sculpteur occupe une place singulière dans de nombreuses cultures africaines.
              Il ne se contente pas de façonner le bois, la pierre ou le bronze. Il donne une forme visible aux
              croyances, aux émotions, aux récits et à la mémoire d&apos;un peuple. Chaque œuvre devient un
              témoignage transmis d&apos;une génération à l&apos;autre.
            </p>

            <p>
              C&apos;est cette vision qui inspire <strong className="text-[#0B0B0B] font-semibold">Ọkpụ</strong>.
            </p>

            <p>
              Nous croyons que l&apos;art est l&apos;une des plus belles façons de raconter l&apos;Afrique. Une
              Afrique riche de ses traditions, de ses peuples, de ses savoir-faire, de ses paysages et de ses
              histoires. Une Afrique authentique, vivante et résolument tournée vers l&apos;avenir.
            </p>

            <p>
              Nous ne cherchons pas à reproduire le passé.
            </p>

            <p>
              Nous cherchons à lui donner une nouvelle voix.
            </p>

            <p>
              Chaque création naît d&apos;une histoire. D&apos;un regard. D&apos;une émotion. D&apos;un instant
              de vie. Inspirées du patrimoine culturel africain, nos œuvres sont réinterprétées avec une direction
              artistique contemporaine afin de créer des pièces intemporelles qui traversent les modes et les
              générations.
            </p>

            {/* Bloc 1 — manifeste */}
            <p className="text-base md:text-lg text-[#0B0B0B] leading-snug font-medium">
              Chez <strong>Ọkpụ</strong>, nous ne créons pas simplement des vêtements.<br />
              Nous créons des œuvres que l&apos;on porte.<br />
              Le textile n&apos;est pas notre métier.<br />
              L&apos;art est notre métier.
            </p>

            <p>
              Chaque illustration est conçue avec le même niveau d&apos;exigence qu&apos;une œuvre destinée à
              être exposée dans une galerie. Le vêtement, l&apos;affiche ou la toile ne sont que des supports
              permettant à l&apos;œuvre de vivre et d&apos;accompagner ceux qui la choisissent.
            </p>

            <p>
              Notre ambition est de devenir l&apos;une des grandes références mondiales de l&apos;art africain
              contemporain, en créant des œuvres qui traversent les frontières, les générations et les supports,
              tout en restant fidèles à l&apos;âme du continent qui les inspire.
            </p>

            <p>
              Nous privilégions toujours la qualité à la quantité. Chaque création est produite avec le plus
              grand soin, en série limitée, afin de préserver son caractère, son authenticité et son émotion.
            </p>

            {/* Bloc 2 — porter */}
            <p className="text-base md:text-lg text-[#0B0B0B] leading-snug font-medium">
              Porter une création <strong>Ọkpụ</strong>, c&apos;est bien plus que porter un objet.<br />
              C&apos;est porter une histoire.<br />
              C&apos;est célébrer une culture.<br />
              C&apos;est faire vivre un fragment de l&apos;Afrique contemporaine.
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
