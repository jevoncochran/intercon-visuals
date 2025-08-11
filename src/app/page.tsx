import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO VIDEO */}
      <video
        src="/assets/home/website_hero_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-screen h-screen object-cover"
      />
      <div className="px-6 md:px-10 py-8 md:py-12">
        <h1 className="text-center">
          PREMIUM, IMPACTFUL VIDEO PRODUCTION FOR BRANDS, EVENTS AND
          DESTINATIONS
        </h1>
      </div>

      {/* MINI PORTFOLIO */}
      <Showcase />
    </div>
  );
}
