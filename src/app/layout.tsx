import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { CTASection, Navbar, Footer } from "@/components";
import ReduxProvider from "@/provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shop.co",
  description: "Website displaying posts from a free and reliable fake API",
  openGraph: {
    title: "Rsa Stores",
    type: "website",
    locale: "en_US",
    siteName: "shop.co",
    url: "https://1732-rsa-stores.vercel.app/",
    description: "Website displaying posts from a free and reliable fake API",
    images:
      "https://aj1732.github.io/rsa-stores/public/favicon_io/android-chrome-192x192.png",
  },
  icons: {
    icon: ["/favicon_io/favicon.ico?v=4"],
    apple: ["/favicon_io/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon_io/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} content-grid font-satoshi`}>
        <NextTopLoader color="#000" easing="easeInOut" />
        <Navbar />
        <ReduxProvider>
          <main className="full-width content-grid mt-[3.5rem] md:mt-[4rem] lg:mt-[6rem]">
            {children}
          </main>
        </ReduxProvider>
        <CTASection />
        <Footer />
      </body>
    </html>
  );
}
