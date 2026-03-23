const serviceAreas = [
  { city: "Tampa" },
  { city: "St. Petersburg" },
  { city: "Clearwater" },
  { city: "Brandon" },
  { city: "Riverview" },
  { city: "Wesley Chapel" },
  { city: "Lakeland" },
  { city: "Largo" },
  { city: "Bradenton" },
  { city: "Sarasota" },
];

const ServiceAreas = () => {
  return (
    <section
      id="service-areas"
      className="bg-white px-6 md:px-10 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-montserrat)] text-black text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em]">
            Areas We <span className="text-lime-500">Serve</span>
          </h2>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed font-[var(--font-inter)] max-w-2xl mx-auto">
            Based in Tampa, FL — we work with businesses across the greater
            Tampa Bay area and beyond to deliver cinematic content and creative
            marketing solutions.
          </p>
        </div>

        {/* MAP + CITY LIST */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* MAP EMBED */}
          <div className="w-full rounded-3xl overflow-hidden shadow-lg aspect-[4/3]">
            <iframe
              title="Intercon Visuals service area map centered on Tampa Bay"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224456.4758812378!2d-82.5618!3d27.9944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* CITY LIST */}
          <div>
            <p className="font-[family-name:var(--font-montserrat)] text-black text-xl font-bold mb-8 tracking-[-0.01em]">
              Service Locations
            </p>

            <ul className="flex flex-wrap gap-3">
              {serviceAreas.map(({ city }) => (
                <li key={city}>
                  <span className="inline-flex items-center gap-2 rounded-full border-2 border-lime-400 px-5 py-2.5 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-black tracking-wide">
                    {city}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-gray-600 text-base leading-relaxed font-[var(--font-inter)]">
              Not sure if we cover your area?{" "}
              <a
                href="/contact"
                className="text-lime-600 font-semibold underline underline-offset-4 hover:text-lime-500 transition-colors"
              >
                Reach out
              </a>{" "}
              — we&apos;re happy to travel for the right project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
