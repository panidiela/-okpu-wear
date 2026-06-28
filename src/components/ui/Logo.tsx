import Link from "next/link";

type LogoProps = {
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
};

export function Logo({ variant = "default", size = "md" }: LogoProps) {
  const color = variant === "light" ? "text-[#F7F4EE]" : "text-[#0B0B0B]";

  return (
    <Link
      href="/"
      className={`font-[family-name:var(--font-cormorant)] ${sizes[size]} ${color} font-light tracking-[0.08em] hover:text-[#C9A45C] transition-colors duration-300`}
      aria-label="Ọkpụ Wear — retour à l'accueil"
    >
      Ọkpụ
    </Link>
  );
}
