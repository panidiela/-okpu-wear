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
      <section className="relative bg-[#F7F4EE] py-24 md:py-32 overflow-hidden">
        {/* motif très discret */}
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
          <div className="mb-20 md:mb-28">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C] mb-8 font-[family-name:var(--font-inter)]">
              Origine du nom
            </p>

            <div className="space-y-7 font-[family-name:var(--font-inter)] text-[16px] md:text-[17px] text-[#1A1A1A] leading-[1.8]">
              <p>
                <strong className="font-semibold">Ọkpụ</strong>
                {" "}— prononcé <em>Okpu</em> — est inspiré d&apos;un mot de la langue igbo évoquant{" "}
                <strong className="font-semibold">le sculpteur</strong>,
                celui qui révèle une œuvre en donnant forme à la matière.
              </p>

              <p>
                Depuis des siècles, le sculpteur occupe une place singulière dans de nombreuses cultures africaines.
                Il ne se contente pas de façonner le bois, la pierre ou le bronze. Il donne une forme visible aux
                croyances, aux émotions, aux récits et à la mémoire d&apos;un peuple. Chaque œuvre devient un
                témoignage transmis d&apos;une génération à l&apos;autre.
              </p>

              <p>
                C&apos;est cette vision qui inspire <strong className="font-semibold">Ọkpụ</strong>.
              </p>
            </div>
          </div>

          {/* séparateur */}
          <div className="w-12 h-px bg-[#C9A45C] mb-20 md:mb-28" />

          {/* ── SECTION B — Notre vision artistique ────────── */}
          <div className="mb-20 md:mb-28">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C] mb-8 font-[family-name:var(--font-inter)]">
              Notre vision artistique
            </p>

            <div className="space-y-7 font-[family-name:var(--font-inter)] text-[16px] md:text-[17px] text-[#1A1A1A] leading-[1.8]">
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
            </div>

            {/* citation 1 */}
            <blockquote className="my-12 md:my-16 bg-[#0B0B0B] border-l-2 border-[#C9A45C] px-8 md:px-10 py-10 md:py-12 rounded-sm">
              <p className="font-[family-name:var(--font-cormorant)] text-[20px] md:text-[22px] text-[#F7F4EE] leading-[1.75] italic">
                Chez <span className="not-italic font-semibold">Ọkpụ</span>, nous ne créons pas simplement des vêtements.<br />
                Nous créons des <span className="not-italic font-semibold">œuvres que l&apos;on porte</span>.<br />
                Le textile n&apos;est pas notre métier.<br />
                L&apos;<span className="not-italic font-semibold">art</span> est notre métier.
              </p>
            </blockquote>

            <div className="space-y-7 font-[family-name:var(--font-inter)] text-[16px] md:text-[17px] text-[#1A1A1A] leading-[1.8]">
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
            </div>
          </div>

          {/* séparateur */}
          <div className="w-12 h-px bg-[#C9A45C] mb-20 md:mb-28" />

          {/* ── SECTION C — Porter une œuvre ───────────────── */}
          <div className="mb-20 md:mb-28">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C] mb-8 font-[family-name:var(--font-inter)]">
              Porter une œuvre
            </p>

            {/* citation 2 */}
            <blockquote className="bg-[#0B0B0B] border-l-2 border-[#C9A45C] px-8 md:px-10 py-10 md:py-12 rounded-sm">
              <p className="font-[family-name:var(--font-cormorant)] text-[20px] md:text-[22px] text-[#F7F4EE] leading-[1.75] italic">
                Porter une création <span className="not-italic font-semibold">Ọkpụ</span>, c&apos;est bien plus que porter un objet.<br />
                C&apos;est porter une histoire.<br />
                C&apos;est célébrer une culture.<br />
                C&apos;est faire vivre un fragment de l&apos;Afrique contemporaine.
              </p>
            </blockquote>
          </div>

          {/* ── CTA ─────────────────────────────────────────── */}
          <div className="border-t border-[#E8E4DD] pt-16">
            <Heading as="h3" eyebrow="Commander" className="mb-6">
              Une question ?
            </Heading>
            <p className="font-[family-name:var(--font-inter)] text-[16px] md:text-[17px] text-[#1A1A1A] leading-[1.8] mb-8 max-w-md">
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
