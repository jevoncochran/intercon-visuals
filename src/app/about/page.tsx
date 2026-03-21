import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-6 md:px-10 lg:px-16 pt-40 md:pt-[208px] pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[460px_1fr] gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE IMAGE */}
          <div className="w-full">
            <div className="relative w-full max-w-[460px] mx-auto lg:mx-0 overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
              <div className="relative aspect-[9/16]">
                <Image
                  src="/assets/about/about-pic.jpg"
                  alt="Jevon Cochran"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-tight mb-8">
              About <span className="text-lime-400">Intercon Visuals</span>
            </h1>

            <div className="space-y-6 text-white/90 text-base md:text-lg leading-[1.9]">
              <p>
                Intercon Visuals was founded in 2025 out of a simple
                realization: many business owners are great at what they do—but
                struggle to effectively market and sell it. Across industries,
                there are talented professionals with strong businesses and real
                value, yet their content is inconsistent, their messaging is
                unclear, and their marketing lacks direction.
              </p>

              <p>
                Built on a foundation of creativity and storytelling, Intercon
                Visuals was created to bridge that gap. By combining cinematic
                video with strategic marketing systems, the agency helps
                businesses capture attention, communicate their value clearly,
                and position themselves as premium brands in their market.
              </p>

              <p>
                Today, Intercon Visuals partners with businesses to handle the
                entire process—from research and strategy to scripting, filming,
                editing, and distribution. Instead of guessing what works or
                trying to manage everything alone, clients gain a clear,
                structured approach to building a brand that attracts and
                converts.
              </p>
            </div>

            <div className="mt-10">
              <p className="font-[family-name:var(--font-montserrat)] text-2xl md:text-3xl font-semibold leading-[1.3] italic text-white">
                Less stress.
                <br />
                No guesswork.
                <br />
                Better results.
              </p>

              <p className="mt-4 font-[family-name:var(--font-montserrat)] text-lg md:text-xl font-semibold text-lime-400">
                Intercon Visuals.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-lime-400 px-8 md:px-10 py-4 font-[family-name:var(--font-montserrat)] text-sm md:text-base font-bold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(163,230,53,0.35)]"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
