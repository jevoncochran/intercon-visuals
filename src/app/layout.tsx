import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ProjectProvider } from "../context/ProjectContext";

export const metadata: Metadata = {
  title: "Intercon Visuals",
  description: "Video production agency based in Tampa, FL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ProjectProvider>
          <Navbar />
          {children}
        </ProjectProvider>
      </body>
    </html>
  );
}
