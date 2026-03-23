import Showcase from "../components/Showcase";
import ServiceAreas from "../components/ServiceAreas";
// import ClientLogos from "../components/ClientLogos";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO VIDEO WRAPPER */}
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

      <section id="services" className="bg-white px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          {/* SECTION HEADER */}
          <div className="text-center mb-20">
            <h2 className="font-[family-name:var(--font-montserrat)] text-black text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em]">
              Our <span className="text-lime-500">Creative Services</span>
            </h2>
          </div>

          {/* SERVICE 1 — VIDEOGRAPHY */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
            {/* TEXT */}
            <div className="max-w-xl">
              <h3 className="font-[family-name:var(--font-montserrat)] text-black text-3xl md:text-4xl font-bold mb-6 tracking-[-0.02em]">
                Videography
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed font-[var(--font-inter)]">
                High-quality video is one of the most powerful ways to
                communicate your brand’s story. At Intercon Visuals, we produce
                cinematic video content designed to capture attention, build
                trust, and showcase what makes your business unique.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mt-6 font-[var(--font-inter)]">
                From brand films and promotional videos to social media content
                and event coverage, we help businesses stand out with visuals
                that leave a lasting impression.
              </p>
            </div>

            {/* IMAGE */}
            <div>
              <img
                src="/assets/home/ai_generated_videographer.png"
                alt="Videography service"
                className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>

          {/* SERVICE 2 — PHOTOGRAPHY */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
            {/* IMAGE */}
            <div>
              <img
                src="/assets/home/ai_generated_photographer.png"
                alt="Photography service"
                className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* TEXT */}
            <div className="max-w-xl">
              <h3 className="font-[family-name:var(--font-montserrat)] text-black text-3xl md:text-4xl font-bold mb-6 tracking-[-0.02em]">
                Photography
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed font-[var(--font-inter)]">
                Strong, polished visuals are essential for any brand looking to
                make a great impression.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mt-6 font-[var(--font-inter)]">
                From team portraits and professional headshots to detailed
                shoots of products and services, we help businesses tell their
                brand story through impactful visuals.
              </p>
            </div>
          </div>

          {/* SERVICE 3 — SOCIAL MEDIA MANAGEMENT */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
            {/* TEXT */}
            <div className="max-w-xl">
              <h3 className="font-[family-name:var(--font-montserrat)] text-black text-3xl md:text-4xl font-bold mb-6 tracking-[-0.02em]">
                Social Media Management
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed font-[var(--font-inter)]">
                Strong brands stay visible. We help businesses build a
                consistent and engaging social media presence through strategic
                content planning, professional visuals, and platform management.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mt-6 font-[var(--font-inter)]">
                From content creation and posting to storytelling and audience
                engagement, we manage your social media so you can focus on
                running your business while your brand continues to grow online.
              </p>
            </div>

            {/* IMAGE */}
            <div>
              <img
                src="/assets/home/ai_generated_social_media_manager.png"
                alt="social media management service"
                className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>

          {/* SERVICE 4 — PAID ADS */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
            {/* IMAGE */}
            <div>
              <img
                src="/assets/home/ai_generated_media_buyer.png"
                alt="Paid Ads service"
                className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* TEXT */}
            <div className="max-w-xl">
              <h3 className="font-[family-name:var(--font-montserrat)] text-black text-3xl md:text-4xl font-bold mb-6 tracking-[-0.02em]">
                Paid Ads
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed font-[var(--font-inter)]">
                Organic content builds your brand — paid advertising accelerates
                your growth.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mt-6 font-[var(--font-inter)]">
                At Intercon Visuals, we develop strategic advertising campaigns
                designed to reach the right audience and convert attention into
                real leads. From ad creative and targeting to campaign
                optimization, we help businesses scale using data-driven
                advertising across platforms like Instagram, Facebook, and
                Google.
              </p>
            </div>
          </div>

          {/* SERVICE 5 — WEB DESIGN */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
            {/* TEXT */}
            <div className="max-w-xl">
              <h3 className="font-[family-name:var(--font-montserrat)] text-black text-3xl md:text-4xl font-bold mb-6 tracking-[-0.02em]">
                Web Design
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed font-[var(--font-inter)]">
                Your website should do more than look good — it should build
                trust, communicate your value, and turn visitors into customers.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mt-6 font-[var(--font-inter)]">
                At Intercon Visuals, we design modern, visually compelling
                websites that reflect your brand and create a seamless user
                experience. From service-based businesses to personal brands, we
                build sites that are clear, professional, and designed to
                support growth.
              </p>
            </div>

            {/* IMAGE */}
            <div>
              <img
                src="/assets/home/ai_generated_web_designer.png"
                alt="Web design service"
                className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>

          {/* SERVICE 6 — GRAPHIC DESIGN */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
            {/* IMAGE */}
            <div>
              <img
                src="/assets/home/ai_generated_graphic_designer.png"
                alt="Graphic design service"
                className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
              />
            </div>

            {/* TEXT */}
            <div className="max-w-xl">
              <h3 className="font-[family-name:var(--font-montserrat)] text-black text-3xl md:text-4xl font-bold mb-6 tracking-[-0.02em]">
                Graphic Design
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed font-[var(--font-inter)]">
                Strong brands are built on strong visuals. At Intercon Visuals,
                we create clean, modern graphic design that helps businesses
                present themselves professionally across every platform.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mt-6 font-[var(--font-inter)]">
                From brand identity and marketing materials to social media
                graphics and ad creatives, we design visuals that strengthen
                your brand and support your marketing efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS — hidden until logos are finalized */}
      {/* <ClientLogos /> */}

      {/* MINI PORTFOLIO */}
      <Showcase />

      {/* SERVICE AREAS */}
      <ServiceAreas />
    </div>
  );
}
