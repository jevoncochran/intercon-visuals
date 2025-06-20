import Image from "next/image";
import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Image
        src="/assets/home/me-with-camera.jpg"
        width={6000}
        height={4000}
        alt="Jevon Cochran"
        className="w-screen h-120 object-cover md:object-[0%_30%]"
      />

      {/* MINI PORTFOLIO */}
      <Showcase />
    </div>
  );
}
