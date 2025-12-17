import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DIY Quest - Your Journey to Creative DIY Projects",
  description:
    "Discover inspiring DIY projects, tutorials, and creative ideas for makers of all skill levels. From woodworking to home decor, electronics to outdoor projects - join our community of DIY enthusiasts!",
  generator: "Next.js",
  applicationName: "DIY Quest",
  referrer: "origin-when-cross-origin",
  keywords: [
    "DIY projects", "woodworking", "home decor", "crafts", "tutorials", 
    "macrame", "industrial design", "fiber arts", "organization", 
    "electronics", "maker", "handmade", "creative projects"
  ],
  authors: [{ name: "DIY Quest Team" }],
  creator: "DIY Quest",
  publisher: "DIY Quest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://diyquest.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://diyquest.xyz",
    title: "DIY Quest - Your Journey to Creative DIY Projects",
    description: "Discover inspiring DIY projects, tutorials, and creative ideas for makers of all skill levels.",
    siteName: "DIY Quest",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIY Quest - Your Journey to Creative DIY Projects",
    description: "Discover inspiring DIY projects, tutorials, and creative ideas for makers of all skill levels.",
    creator: "@diyquest",
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
  verification: {
    google: "your-google-verification-code-here",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
