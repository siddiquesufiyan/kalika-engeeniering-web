import { Manrope, Open_Sans } from "next/font/google";
import "./globals.css";

import ThemeProvider from "./component/ThemeProvider";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  title: "Kalika Engineering",
  description:
    "Plastic, Rubber & Compounds Manufacturing Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${openSans.variable}`}
    >
      <body className="font-body antialiased">
        <ThemeProvider>
          <Navbar />

          <main className="min-h-screen pt-[68px] sm:pt-[72px]">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}