import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ParticlesBackground from "@/components/molecules/ParticlesBackground";

export const metadata = {
  title: "Suran Portfolio",
  description:
    "Professional portfolio showcasing my work as a frontend developer.",
  openGraph: {
    title: "Suran Portfolio",
    description:
      "Professional portfolio showcasing my work as a frontend developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ParticlesBackground />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
