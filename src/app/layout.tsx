import { Metadata } from "next";

import { Montserrat, Noto_Sans, Varela_Round } from "next/font/google";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela",
});

const noto_sans = Noto_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const metadata: Metadata = {
  // Base and General Info
  metadataBase: new URL("https://byronmoore.dev"),
  generator: "Next.js",
  applicationName: "Dev Portfolio | Byron Moore",
  title: "Dev Portfolio | Byron Moore",
  description:
    "Meet Byron, a prolific creator and developer specializing in Next.js, UI design, and web applications. Discover his unique blend of technical expertise and creativity, powering innovative digital solutions in the tech landscape.",
  category: "technology",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#e9e1d9",
  manifest: "/site.webmanifest",

  // Author Info
  authors: [{ name: "Byron Moore" }],
  creator: "Byron Moore",

  // SEO and Crawling
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  keywords:
    "developer, creator, application, indiehacker, builder, content creator, byron moore, byron, byron jaris moore, byron jaris",

  // Site Display & Appearance
  colorScheme: "light",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Icon Info
  icons: {
    icon: [
      "/favicon.ico",
      { type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      { type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    ],
    apple: "/apple-touch-icon.png",
    other: {
      url: "/safari-pinned-tab.svg",
    },
  },

  // Social Media Info
  openGraph: {
    title: "Portfolio | Byron Moore",
    description: "Meet Byron, a prolific creator and developer.",
    url: "https://byronmoore.dev",
    siteName: "Portfolio | Byron Moore",
    images: [
      {
        url: "https://s3.us-east-2.amazonaws.com/byronmoore.dev-photo-portfolio/misc/meta-image.jpg",
        width: 941,
        height: 627,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Byron Moore",
    description: "Meet Byron, a prolific creator and developer.",
    images: [
      "https://s3.us-east-2.amazonaws.com/byronmoore.dev-photo-portfolio/misc/meta-image.jpg",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans.variable} ${montserrat.variable}`}
        style={{ backgroundColor: "#e9e1d9" }}
      >
        {children}
      </body>
    </html>
  );
}
