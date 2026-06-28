import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

type ButtonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type AnchorProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const base =
  "inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-[0.12em] uppercase transition-all duration-300 cursor-pointer select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#0B0B0B] text-[#F7F4EE] border border-[#0B0B0B] hover:bg-[#C9A45C] hover:border-[#C9A45C] hover:text-[#0B0B0B]",
  secondary:
    "bg-transparent text-[#0B0B0B] border border-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-[#F7F4EE]",
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ variant = "primary", className = "", children, href, ...props }: AnchorProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
