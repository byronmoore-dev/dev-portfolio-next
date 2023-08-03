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
  title: "Byron Jaris Development",
  description: "GM",
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
