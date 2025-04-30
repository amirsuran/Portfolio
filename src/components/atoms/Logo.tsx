import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`text-2xl font-bold tracking-tighter transition-colors hover:text-primary ${className}`}
    >
      <span className="text-primary">{"<"}</span>
      Developer
      <span className="text-primary">{"/>"}</span>
    </Link>
  );
}
