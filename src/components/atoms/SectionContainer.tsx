import { ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function SectionContainer({
  id,
  className = "",
  children,
}: SectionContainerProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  );
}
