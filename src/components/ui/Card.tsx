type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-[#F7F4EE] border border-[#E8E4DD] overflow-hidden ${
        hover
          ? "transition-all duration-500 hover:shadow-[0_8px_40px_rgba(11,11,11,0.08)] hover:-translate-y-0.5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
