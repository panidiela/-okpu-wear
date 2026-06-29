import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = {
  title: "À propos — Ọkpụ Wear",
  description: "L'histoire derrière la marque Ọkpụ Wear.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HEADER ──────────────────────────────────────────── */}
      <section className="bg-[#0B0B0B] text-[#F7F4EE] py-20 md:py-28 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/patterns/geo-01.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "80px",
            opacity: 0.03,
          }}
          aria-hidden
        />
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/logo/icon.svg"
            unoptimized
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

      {/* ── CORPS ───────────────────────────────────────────── */}
      <section className="relative bg-[#F7F4EE] py-12 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/patterns/geo-01.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "120px",
            opacity: 0.02,
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full px-5 md:px-8 max-w-[720px]">

          {/* ── SECTION A — Origine du nom ─────────────────── */}
          <div className="mb-8 md:mb-16">
            <p className="text-[11px] md:text-[12px] uppercase tracking-[0.28em] text-[#C9A45C] mb-4 md:mb-5 font-[family-name:var(--font-inter)]">
              Origine du nom
            </p>

            <div className="font-[family-name:var(--font-inter)] text-[16px] md:text-[17px] text-[#1A1A1A] leading-[1.6] md:leading-[1.7]">
              <p>
                <span className="text-[#C9A45C]">Ọkpụ</span>
                {" "}— prononcé <em>Okpu</em> — est inspiré d&apos;un mot de la langue igbo évoquant{" "}
                <span className="text-[#C9A45C]">le sculpteur</span>,
                celui qui révèle une œuvre en donnant forme à la matière.
              </p>

              <p className="mt-4 md:mt-5">
                Depuis des siècles, le sculpteur occupe une place singulière dans de nombreuses cultures africaines.
                Il ne se contente pas de façonner le bois, la pierre ou le bronze. Il donne une forme visible aux
                croyances, aux émotions, aux récits et à la mémoire d&apos;un peuple. Chaque <span className="text-[#C9A45C]">œuvre</span> devient un
                témoignage transmis d&apos;une génération à l&apos;autre.
              </p>

              <p className="mt-5 md:mt-6">
                C&apos;est cette vision qui inspire <span className="text-[#C9A45C]">Ọkpụ</span>.
              </p>
            </div>
          </div>

          {/* séparateur */}
          <div className="w-10 h-px bg-[#C9A45C] mb-8 md:mb-16" />

          {/* ── SECTION B — Notre vision artistique ────────── */}
          <div className="mb-8 md:mb-16">
            <p className="text-[11px] md:text-[12px] uppercase tracking-[0.28em] text-[#C9A45C] mb-4 md:mb-5 font-[family-name:var(--font-inter)]">
              Notre vision artistique
            </p>

            <div className="font-[family-name:var(--font-inter)] text-[16px] md:text-[17px] text-[#1A1A1A] leading-[1.6] md:leading-[1.7]">
              <p>
                Nous croyons que l&apos;<span className="text-[#C9A45C]">art</span> est l&apos;une des plus belles façons de raconter l&apos;Afrique. Une
                Afrique riche de ses traditions, de ses peuples, de ses savoir-faire, de ses paysages et de ses
                histoires. Une <span className="text-[#C9A45C]">Afrique contemporaine</span>, authentique, vivante et résolument tournée vers l&apos;avenir.
              </p>

              <p className="mt-5 md:mt-7">
                Nous ne cherchons pas à reproduire le passé.
              </p>

              <p className="mt-2 md:mt-2">
                Nous cherchons à lui donner une nouvelle voix.
              </p>

              <p className="mt-5 md:mt-6">
                Chaque création naît d&apos;une histoire. D&apos;un regard. D&apos;une émotion. D&apos;un instant
                de vie. Inspirées du patrimoine culturel africain, nos <span className="text-[#C9A45C]">œuvres</span> sont réinterprétées avec une direction
                artistique contemporaine afin de créer des pièces intemporelles qui traversent les modes et les
                générations.
              </p>
            </div>

            {/* citation 1 */}
            <blockquote className="mt-7 mb-7 md:mt-10 md:mb-10 bg-[#0B0B0B] border-l-2 border-[#C9A45C] px-5 md:px-8 py-5 md:py-7 rounded-sm">
              <p className="font-[family-name:var(--font-cormorant)] text-[19px] md:text-[22px] text-[#F7F4EE] leading-[1.65] md:leading-[1.75] italic">
                Chez <span className="not-italic text-[#C9A45C]">Ọkpụ</span>, nous ne créons pas simplement des vêtements.<br />
                Nous créons des <span className="not-italic text-[#C9A45C]">œuvres</span> que l&apos;on porte.<br />
                Le textile n&apos;est pas notre métier.<br />
                L&apos;<span className="not-italic text-[#C9A45C]">art</span> est notre métier.
              </p>
            </blockquote>

            <div className="font-[family-name:var(--font-inter)] text-[16px] md:text-[17px] text-[#1A1A1A] leading-[1.6] md:leading-[1.7]">
              <p>
                Chaque illustration est conçue avec le même niveau d&apos;exigence qu&apos;une œuvre destinée à
                être exposée dans une galerie. Le vêtement, l&apos;affiche ou la toile ne sont que des supports
                permettant à l&apos;œuvre de vivre et d&apos;accompagner ceux qui la choisissent.
              </p>

              <p className="mt-4 md:mt-5">
                Notre ambition est de devenir l&apos;une des grandes références mondiales de l&apos;<span className="text-[#C9A45C]">art africain
                contemporain</span>, en créant des œuvres qui traversent les frontières, les générations et les supports,
                tout en restant fidèles à l&apos;âme du continent qui les inspire.
              </p>

              <p className="mt-4 md:mt-5">
                Nous privilégions toujours la qualité à la quantité. Chaque création est produite avec le plus
                grand soin, en série limitée, afin de préserver son caractère, son authenticité et son émotion.
              </p>
            </div>
          </div>

          {/* séparateur */}
          <div className="w-10 h-px bg-[#C9A45C] mb-8 md:mb-16" />

          {/* ── SECTION C — Porter une œuvre ───────────────── */}
          <div className="mb-8 md:mb-12">
            <p className="text-[11px] md:text-[12px] uppercase tracking-[0.28em] text-[#C9A45C] mb-4 md:mb-5 font-[family-name:var(--font-inter)]">
              Porter une œuvre
            </p>

            {/* citation 2 */}
            <blockquote className="bg-[#0B0B0B] border-l-2 border-[#C9A45C] px-5 md:px-8 py-5 md:py-7 rounded-sm">
              <p className="font-[family-name:var(--font-cormorant)] text-[19px] md:text-[22px] text-[#F7F4EE] leading-[1.65] md:leading-[1.75] italic">
                Porter une création <span className="not-italic text-[#C9A45C]">Ọkpụ</span>, c&apos;est bien plus que porter un objet.<br />
                C&apos;est porter une histoire.<br />
                C&apos;est célébrer une culture.<br />
                C&apos;est faire vivre un fragment de l&apos;<span className="not-italic text-[#C9A45C]">Afrique contemporaine</span>.
              </p>
            </blockquote>
          </div>

          {/* ── CTA ─────────────────────────────────────────── */}
          <div className="border-t border-[#E8E4DD] pt-8 md:pt-12">
            <Heading as="h3" eyebrow="Commander" className="mb-6">
              Une question ?
            </Heading>
            <p className="font-[family-name:var(--font-inter)] text-[16px] md:text-[17px] text-[#1A1A1A] leading-[1.6] mb-8 max-w-md">
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

        </div>
      </section>
    </>
  );
}
