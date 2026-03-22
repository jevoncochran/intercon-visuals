const clients = [
  // isWhite: logo is already white, show as-is on dark bg
  // hasBg: logo has a white/colored background (JPG), wrap in white card
  // default: transparent PNG, apply invert filter to make white
  { name: "Heaven Sent Roofing", file: "heaven-sent-roofing.jpg", isWhite: true, large: true },
  { name: "Laceleaf Med Spa", file: "laceleaf-med-spa.jpg", hasBg: true },
  { name: "Indulgence Medical Day Spa", file: "indulgence-med-spa.png" },
  // Premiere Center removed — only OG image available, not a clean logo
  { name: "Acropolis Greek Taverna", file: "acropolis.png" },
  { name: "South Tampa CrossFit", file: "south-tampa-crossfit.png", isWhite: true },
  { name: "Facial Mania Med Spa", file: "facial-mania.png" },
  { name: "Pro Health", file: "pro-health.png" },
  { name: "Persis Indian Grill", file: "persis-indian-grill.png" },
];

const ClientLogos = () => {
  return (
    <section className="bg-zinc-950 px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <p className="text-center font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.25em] text-white/40 mb-12">
          Trusted by local businesses
        </p>

        {/* LOGO GRID */}
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12">
          {clients.map(({ name, file, isWhite, hasBg, large }) => (
            <div
              key={name}
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              {hasBg ? (
                // JPG logos with white background — show in a white rounded card
                <div className="bg-white rounded-xl px-5 py-3 flex items-center justify-center">
                  <img
                    src={`/assets/clients/${file}`}
                    alt={`${name} logo`}
                    className="h-12 w-auto object-contain max-w-[180px]"
                  />
                </div>
              ) : (
                <img
                  src={`/assets/clients/${file}`}
                  alt={`${name} logo`}
                  className={`w-auto object-contain ${large ? "h-20 max-w-[80px]" : "h-16 max-w-[200px]"}`}
                  style={isWhite ? undefined : { filter: "brightness(0) invert(1)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
