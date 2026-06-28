import { ButtonLink } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-5 text-center">
      <p className="font-[family-name:var(--font-cormorant)] text-[8rem] font-light leading-none text-[#E8E4DD] select-none">
        404
      </p>
      <Heading as="h1" className="mt-4 mb-3">
        Page introuvable
      </Heading>
      <p className="font-[family-name:var(--font-inter)] text-sm text-[#B7B2A9] mb-10">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <ButtonLink href="/" variant="primary">
        Retour à l&apos;accueil
      </ButtonLink>
    </div>
  );
}
