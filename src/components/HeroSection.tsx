import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* HERO VIDEO */}
      <video
        src="/assets/home/website_hero_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* HERO CONTENT */}
      <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16 lg:px-20">
        <div className="max-w-4xl">
          {/* HEADLINE */}
          <h1 className="font-[var(--font-montserrat)] uppercase text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.12] tracking-[-0.03em]">
            <span className="text-lime-400">Cinematic</span> content
            <br />
            that builds brands
            <br />
            and <span className="text-lime-400">converts leads</span>
          </h1>

          {/* DESCRIPTION + GREEN VERTICAL LINE */}
          <div className="mt-10 flex items-center gap-6 max-w-3xl">
            <div className="w-[3px] h-28 bg-lime-400 rounded-full shrink-0" />

            <p className="text-white/90 text-base md:text-lg leading-[1.9] font-[var(--font-inter)] max-w-2xl">
              Intercon Visuals is a creative marketing agency that blends
              cinematic visual content, social media strategy, and modern
              digital design to help businesses elevate their brand and scale.
            </p>
          </div>

          {/* CTA BUTTON */}
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-5 rounded-full bg-lime-400 px-10 md:px-12 py-5 text-black font-[family-name:var(--font-montserrat)] text-sm md:text-base font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(163,230,53,0.35)]"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight size={24} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
