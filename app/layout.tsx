import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import { CookieConsentRoot } from "@/components/cookies/CookieConsentRoot";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { buildSiteMetadata } from "@/lib/site-seo";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = buildSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${archivo.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col bg-surface-grey">
        <OrganizationJsonLd />
        <CookieConsentRoot>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </CookieConsentRoot>
      </body>
    </html>
  );
}
