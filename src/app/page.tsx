import Image from "next/image";
import Showcase from "./components/Showcase";

export default function Home() {
  return (
    <div className="flex flex-col space-y-20">
      <Image
        src="/assets/home/me-with-camera.jpg"
        width={6000}
        height={4000}
        alt="Jevon Cochran"
        className="w-screen h-120 object-cover object-[0%_30%]"
      />

      {/* MINI PORTFOLIO */}
      <Showcase />
    </div>
  );
}
