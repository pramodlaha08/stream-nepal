import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// NOTE: I inferred your primary site domain as https://streamnepal.com for canonical/OG URLs.
// If your site uses a different domain (for example a subdomain or .np), please update metadataBase
// and the canonical URLs below. For best social cards, add a dedicated OG image to `/public/og-image.png`
// sized ~1200x630 and update the `openGraph.images` entry.
export const metadata: Metadata = {
  metadataBase: new URL("https://streamnepal.stream"),
  title: {
    default: "StreamNepal — Nepal's Premier Esports Tournaments",
    template: "%s | StreamNepal",
  },
  description:
    "StreamNepal organizes competitive PUBG Mobile and Free Fire tournaments in Nepal with live streaming, prizes, and community events.",
  applicationName: "StreamNepal",
  authors: [{ name: "Pramod Laha", url: "https://pramodlaha.com.np" }],
  creator: "StreamNepal",
  publisher: "StreamNepal",
  keywords: [
    "esports",
    "gaming",
    "tournaments",
    "PUBG Mobile",
    "Free Fire",
    "live streaming",
    "Nepal",
  ],
  openGraph: {
    title: "StreamNepal — Nepal's Premier Esports Tournaments",
    description:
      "Join competitive PUBG Mobile and Free Fire tournaments in Nepal with live streams, prizes, and community events.",
    url: "https://streamnepal.stream",
    siteName: "StreamNepal",
    images: [
      {
        // fallback to logo.png; replace with /og-image.png (1200x630) for best results
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "StreamNepal — esports tournaments in Nepal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamNepal — Nepal's Premier Esports Tournaments",
    description:
      "Join competitive PUBG Mobile and Free Fire tournaments in Nepal with live streams, prizes, and community events.",
    images: ["/logo.png"],
    creator: "@StreamNepal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  icons: {
    // Keep favicon in public root (or update paths if you use different files)
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "mask-icon", url: "/android-chrome-192x192.png", color: "#0ea5a4" },
    ],
  },
  alternates: {
    canonical: "https://streamnepal.stream",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
