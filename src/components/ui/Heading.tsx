type Level = "h1" | "h2" | "h3" | "h4";

type HeadingProps = {
  as?: Level;
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  gold?: boolean;
};

const sizes: Record<Level, string> = {
  h1: "text-5xl md:text-7xl font-light leading-[1.05] tracking-[-0.02em]",
  h2: "text-3xl md:text-5xl font-light leading-[1.1]  tracking-[-0.01em]",
  h3: "text-2xl md:text-3xl font-light leading-[1.2]",
  h4: "text-lg   md:text-xl  font-medium leading-[1.3] tracking-[0.02em]",
};

export function Heading({ as: Tag = "h2", children, className = "", eyebrow, gold = false }: HeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-[#B7B2A9] mb-4 font-[family-name:var(--font-inter)]">
          {eyebrow}
        </p>
      )}
      <Tag
        className={`font-[family-name:var(--font-cormorant)] ${sizes[Tag]} ${
          gold ? "text-[#C9A45C]" : ""
        }`}
      >
        {children}
      </Tag>
    </div>
  );
}
