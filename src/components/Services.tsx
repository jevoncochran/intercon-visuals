const h3Class =
  "font-[family-name:var(--font-montserrat)] text-black text-3xl md:text-4xl font-bold tracking-[-0.02em]";

const pClass = "text-gray-700 text-lg leading-relaxed font-[var(--font-inter)]";

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <h2 className="font-[family-name:var(--font-montserrat)] text-black text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em]">
            Our <span className="text-lime-500">Creative Services</span>
          </h2>
        </div>

        {/* SERVICE 1 — VIDEOGRAPHY (text-left, image-right on desktop) */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-4 mb-28">
          <h3 className={`order-1 md:col-start-1 md:row-start-1 md:self-end ${h3Class}`}>
            Videography
          </h3>
          <div className="order-2 md:col-start-2 md:row-start-1 md:row-span-2 md:self-center">
            <img
              src="/assets/home/ai_generated_videographer.png"
              alt="Videography service"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="order-3 md:col-start-1 md:row-start-2 md:self-start max-w-xl">
            <p className={pClass}>
              High-quality video is one of the most powerful ways to
              communicate your brand&apos;s story. At Intercon Visuals, we produce
              cinematic video content designed to capture attention, build
              trust, and showcase what makes your business unique.
            </p>
            <p className={`${pClass} mt-6`}>
              From brand films and promotional videos to social media content
              and event coverage, we help businesses stand out with visuals
              that leave a lasting impression.
            </p>
          </div>
        </div>

        {/* SERVICE 2 — PHOTOGRAPHY (image-left, text-right on desktop) */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-4 mb-28">
          <h3 className={`order-1 md:col-start-2 md:row-start-1 md:self-end ${h3Class}`}>
            Photography
          </h3>
          <div className="order-2 md:col-start-1 md:row-start-1 md:row-span-2 md:self-center">
            <img
              src="/assets/home/ai_generated_photographer.png"
              alt="Photography service"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="order-3 md:col-start-2 md:row-start-2 md:self-start max-w-xl">
            <p className={pClass}>
              Strong, polished visuals are essential for any brand looking to
              make a great impression.
            </p>
            <p className={`${pClass} mt-6`}>
              From team portraits and professional headshots to detailed
              shoots of products and services, we help businesses tell their
              brand story through impactful visuals.
            </p>
          </div>
        </div>

        {/* SERVICE 3 — SOCIAL MEDIA MANAGEMENT (text-left, image-right on desktop) */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-4 mb-28">
          <h3 className={`order-1 md:col-start-1 md:row-start-1 md:self-end ${h3Class}`}>
            Social Media Management
          </h3>
          <div className="order-2 md:col-start-2 md:row-start-1 md:row-span-2 md:self-center">
            <img
              src="/assets/home/ai_generated_social_media_manager.png"
              alt="Social media management service"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="order-3 md:col-start-1 md:row-start-2 md:self-start max-w-xl">
            <p className={pClass}>
              Strong brands stay visible. We help businesses build a
              consistent and engaging social media presence through strategic
              content planning, professional visuals, and platform management.
            </p>
            <p className={`${pClass} mt-6`}>
              From content creation and posting to storytelling and audience
              engagement, we manage your social media so you can focus on
              running your business while your brand continues to grow online.
            </p>
          </div>
        </div>

        {/* SERVICE 4 — PAID ADS (image-left, text-right on desktop) */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-4 mb-28">
          <h3 className={`order-1 md:col-start-2 md:row-start-1 md:self-end ${h3Class}`}>
            Paid Ads
          </h3>
          <div className="order-2 md:col-start-1 md:row-start-1 md:row-span-2 md:self-center">
            <img
              src="/assets/home/ai_generated_media_buyer.png"
              alt="Paid ads service"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="order-3 md:col-start-2 md:row-start-2 md:self-start max-w-xl">
            <p className={pClass}>
              Organic content builds your brand — paid advertising accelerates
              your growth.
            </p>
            <p className={`${pClass} mt-6`}>
              At Intercon Visuals, we develop strategic advertising campaigns
              designed to reach the right audience and convert attention into
              real leads. From ad creative and targeting to campaign
              optimization, we help businesses scale using data-driven
              advertising across platforms like Instagram, Facebook, and
              Google.
            </p>
          </div>
        </div>

        {/* SERVICE 5 — WEB DESIGN (text-left, image-right on desktop) */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-4 mb-28">
          <h3 className={`order-1 md:col-start-1 md:row-start-1 md:self-end ${h3Class}`}>
            Web Design
          </h3>
          <div className="order-2 md:col-start-2 md:row-start-1 md:row-span-2 md:self-center">
            <img
              src="/assets/home/ai_generated_web_designer.png"
              alt="Web design service"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="order-3 md:col-start-1 md:row-start-2 md:self-start max-w-xl">
            <p className={pClass}>
              Your website should do more than look good — it should build
              trust, communicate your value, and turn visitors into customers.
            </p>
            <p className={`${pClass} mt-6`}>
              At Intercon Visuals, we design modern, visually compelling
              websites that reflect your brand and create a seamless user
              experience. From service-based businesses to personal brands, we
              build sites that are clear, professional, and designed to
              support growth.
            </p>
          </div>
        </div>

        {/* SERVICE 6 — GRAPHIC DESIGN (image-left, text-right on desktop) */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-4 mb-28">
          <h3 className={`order-1 md:col-start-2 md:row-start-1 md:self-end ${h3Class}`}>
            Graphic Design
          </h3>
          <div className="order-2 md:col-start-1 md:row-start-1 md:row-span-2 md:self-center">
            <img
              src="/assets/home/ai_generated_graphic_designer.png"
              alt="Graphic design service"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="order-3 md:col-start-2 md:row-start-2 md:self-start max-w-xl">
            <p className={pClass}>
              Strong brands are built on strong visuals. At Intercon Visuals,
              we create clean, modern graphic design that helps businesses
              present themselves professionally across every platform.
            </p>
            <p className={`${pClass} mt-6`}>
              From brand identity and marketing materials to social media
              graphics and ad creatives, we design visuals that strengthen
              your brand and support your marketing efforts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
