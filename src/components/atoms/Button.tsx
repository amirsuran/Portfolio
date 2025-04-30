"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

// Props for a regular button
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: undefined;
}

// Props for a link styled as a button
interface LinkButtonProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "type"> {
  variant?: ButtonVariant;
  href: string;
}

export default function Button(props: ButtonProps | LinkButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props;

  // Determine button class based on variant
  const buttonClass = `btn-${variant} ${className} transition transform hover:scale-105 active:scale-95`;

  // Render Link or Button based on href prop
  if ("href" in props && props.href) {
    const { href, ...linkRest } = props;
    return (
      <Link
        href={href}
        className={buttonClass}
        {...(linkRest as Omit<
          LinkButtonProps,
          "href" | "variant" | "className"
        >)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClass}
      {...(rest as Omit<ButtonProps, "variant" | "className">)}
    >
      {children}
    </button>
  );
}
