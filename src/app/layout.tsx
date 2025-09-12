import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Portfolio | Your Name",
  description:
    "Professional portfolio showcasing my work as a frontend developer.",
  openGraph: {
    title: "Portfolio | Your Name",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
