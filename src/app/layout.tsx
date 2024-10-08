import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/nav";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  // metadataBase: new URL(baseUrl),
  title: {
    default: "Giorgi's Portfolio",
    template: "%s | Giorgi's Portfolio",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    // url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
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
};

const inter = Inter({ subsets: ["latin"] });
const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto  h-screen">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 h-screen">
          <Navbar />
          {children}
          <Footer />
          {/* <Analytics />
          <SpeedInsights /> */}
        </main>
      </body>
    </html>
  );
}
