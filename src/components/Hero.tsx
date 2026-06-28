export default function Hero() {
  return (
    <header className="pt-[90px] pb-[70px] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="gsap-hero-eyebrow font-['JetBrains_Mono'] text-[12px] tracking-[0.12em] text-[var(--slate)] uppercase mb-7 flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-[14px]">
              <span className="whitespace-nowrap">Shopee</span>
              <span className="whitespace-nowrap before:content-['·'] before:mr-[14px] before:text-[var(--line)]">Lazada</span>
              <span className="whitespace-nowrap before:content-['·'] before:mr-[14px] before:text-[var(--line)]">Meta Ads</span>
              <span className="whitespace-nowrap before:content-['·'] before:mr-[14px] before:text-[var(--line)]">Email Marketing</span>
              <span className="whitespace-nowrap before:content-['·'] before:mr-[14px] before:text-[var(--line)]">Events</span>
            </div>
            <h1 className="font-['Archivo'] font-black text-[clamp(42px,8vw,86px)] leading-[0.95] tracking-[-0.03em] mb-6">
              <div className="gsap-hero-title-line">E-Commerce</div>
              <div className="gsap-hero-title-line">Professional</div>
            </h1>
            <p className="gsap-hero-sub text-[clamp(17px,2.2vw,21px)] max-w-[620px] text-[var(--slate)] mb-9">
              Jayson Q. Fabro — a results-driven marketing professional managing e-commerce stores, ad campaigns, and email systems that keep online businesses running and growing.
            </p>
            <div className="flex flex-col sm:flex-row gap-[14px] sm:flex-wrap justify-center lg:justify-start">
              <a href="#work" className="gsap-hero-btn font-['JetBrains_Mono'] text-[13px] uppercase tracking-[0.05em] py-[14px] px-[26px] no-underline border-[1.5px] border-[var(--ink)] transition-all duration-200 cursor-pointer bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--paper)] hover:text-[var(--ink)] text-center">
                View Work
              </a>
              <a href="/assets/CV/jayson-fabro-cv-2026.pdf" download className="gsap-hero-btn font-['JetBrains_Mono'] text-[13px] uppercase tracking-[0.05em] py-[14px] px-[26px] no-underline border-[1.5px] border-[var(--ink)] transition-all duration-200 cursor-pointer bg-transparent text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] text-center">
                Download Resume
              </a>
              <a href="#contact" className="gsap-hero-btn font-['JetBrains_Mono'] text-[13px] uppercase tracking-[0.05em] py-[14px] px-[26px] no-underline border-[1.5px] border-[var(--ink)] transition-all duration-200 cursor-pointer bg-transparent text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] text-center">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-stretch">
            <div className="flex flex-col items-center">
              <div className="border-[1.5px] border-[var(--ink)] p-2 w-[180px] sm:w-[220px] lg:w-[260px]">
                <img
                  src="/assets/photo/Graduate.jpg"
                  alt="Jayson Q. Fabro graduation photo"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <p className="font-['JetBrains_Mono'] text-[11px] text-[var(--slate)] uppercase mt-3 text-center">
                BSBA, Marketing Management
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}