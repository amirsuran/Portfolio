"use client";

import React from "react";
import "./GlitchText.css";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function GlitchText({ children, className = "" }: Props) {
  return (
    <span
      className={`glitch relative inline-block ${className}`}
      aria-hidden={false}
      data-text={children}
    >
      <span className="glitch__base">{children}</span>
      <span className="glitch__top" aria-hidden>
        {children}
      </span>
      <span className="glitch__bottom" aria-hidden>
        {children}
      </span>
    </span>
  );
}
