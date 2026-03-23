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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.interconvisuals.com/#organization",
      name: "Intercon Visuals",
      url: "https://www.interconvisuals.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.interconvisuals.com/assets/nav/logo.png",
      },
      sameAs: [
        "https://www.instagram.com/interconvisuals/",
        "https://www.facebook.com/profile.php?id=61586069221839",
        "https://www.youtube.com/@interconvisuals",
        "https://www.tiktok.com/@interconvisuals",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.interconvisuals.com/#localbusiness",
      name: "Intercon Visuals",
      description:
        "Tampa-based video production company specializing in commercial videography, brand videos, social media content, and photography for businesses across the Tampa Bay area.",
      url: "https://www.interconvisuals.com",
      telephone: "",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tampa",
        addressRegion: "FL",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 27.9506,
        longitude: -82.4572,
      },
      areaServed: [
        { "@type": "City", name: "Tampa" },
        { "@type": "City", name: "St. Petersburg" },
        { "@type": "City", name: "Clearwater" },
        { "@type": "City", name: "Brandon" },
        { "@type": "City", name: "Riverview" },
        { "@type": "City", name: "Wesley Chapel" },
        { "@type": "City", name: "Lakeland" },
        { "@type": "City", name: "Largo" },
      ],
      serviceType: [
        "Commercial Videography",
        "Brand Video Production",
        "Social Media Video Content",
        "Photography",
        "Paid Ads Video",
        "Graphic Design",
        "Web Design",
      ],
      priceRange: "$$$$",
      image: "https://www.interconvisuals.com/assets/nav/logo.png",
      parentOrganization: {
        "@id": "https://www.interconvisuals.com/#organization",
      },
    },
  ],
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ProjectProvider>
          <Navbar />
          {children}
          <Footer />
        </ProjectProvider>
      </body>
    </html>
  );
}
