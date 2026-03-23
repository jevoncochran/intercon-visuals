import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elevate Your Brand with Professional Video | Contact Intercon Visuals",
  description:
    "Ready to grow your brand with professional video? Contact Intercon Visuals — Tampa's premier video production company serving businesses across the Tampa Bay area.",
  openGraph: {
    title: "Elevate Your Brand with Professional Video | Contact Intercon Visuals",
    description:
      "Serious about growing your brand? Get in touch with Intercon Visuals. We serve businesses in Tampa, St. Pete, Clearwater, Brandon, Riverview, Wesley Chapel, Lakeland & Largo.",
    url: "https://www.interconvisuals.com/contact",
    images: [
      {
        url: "/assets/nav/logo.png",
        width: 1200,
        height: 630,
        alt: "Intercon Visuals – Tampa Video Production Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Your Brand with Professional Video | Contact Intercon Visuals",
    description:
      "Ready to grow your brand with professional video? Contact Intercon Visuals — Tampa's premier video production company.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
