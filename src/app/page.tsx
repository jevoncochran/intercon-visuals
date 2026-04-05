import Showcase from "../components/Showcase";
import ServiceAreas from "../components/ServiceAreas";
import Services from "../components/Services";
import HeroSection from "@/components/HeroSection";
// import ClientLogos from "../components/ClientLogos";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO VIDEO WRAPPER */}
      <HeroSection />

      {/* SERVICES */}
      <Services />

      {/* CLIENT LOGOS — hidden until logos are finalized */}
      {/* <ClientLogos /> */}

      {/* MINI PORTFOLIO */}
      <Showcase />

      {/* SERVICE AREAS */}
      <ServiceAreas />
    </div>
  );
}
