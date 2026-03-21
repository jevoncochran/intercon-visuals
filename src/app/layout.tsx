import type { Metadata } from "next";
import { Montserrat, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { ProjectProvider } from "../context/ProjectContext";

export const metadata: Metadata = {
  title: "Intercon Visuals",
  description: "Video production agency based in Tampa, FL",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.variable} ${poppins.variable} ${montserrat.variable}`}
      >
        <ProjectProvider>
          <Navbar />
          {children}
          <Footer />
        </ProjectProvider>
      </body>
    </html>
  );
}
