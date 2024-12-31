import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { CTASection, Navbar, Footer } from "@/components";
import { ReduxProvider } from "@/provider/redux";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "Website displaying posts from dummyjson",
  openGraph: {
    title: "SHOP.CO",
    type: "website",
    locale: "en_US",
    siteName: "shop.co",
    url: "https://1732-shopco.netlify.app/",
    description: "Website displaying store items from dummyjson",
    images:
      "https://aj1732.github.io/shop.co/public/favicon_io/android-chrome-192x192.png",
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
        <ReduxProvider>
          <NextTopLoader color="#000" easing="easeInOut" />
          <Navbar />
          <main className="full-width content-grid mt-[3.5rem] min-h-[calc(100dvh-10rem)] md:mt-[4rem] lg:mt-[6rem]">
            {children}
          </main>
          <CTASection />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
