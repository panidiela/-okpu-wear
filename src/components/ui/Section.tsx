type SectionProps = {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  pattern?: boolean;
};

export function Section({ children, className = "", dark = false, pattern = false }: SectionProps) {
  return (
    <section
      className={`relative py-24 md:py-32 overflow-hidden ${
        dark ? "bg-[#0B0B0B] text-[#F7F4EE]" : "bg-[#F7F4EE] text-[#0B0B0B]"
      } ${className}`}
    >
      {pattern && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/patterns/geo-01.svg)",
            backgroundRepeat: "repeat",
            backgroundSize: "120px",
            opacity: 0.03,
          }}
          aria-hidden
        />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
