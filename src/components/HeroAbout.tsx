export default function HeroAbout() {
  return (
    <div id="hero-about-wrap" className="relative h-screen overflow-hidden">
      {/* HERO LAYER */}
      <header id="hero-section" className="absolute inset-0 flex items-center border-b border-[var(--line)] bg-[var(--paper)] z-10">
        <div className="max-w-[1080px] mx-auto px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 lg:gap-12 items-center">
            <div className="hero-text-col order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
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
  Jayson Q. Fabro — a results-driven E-Commerce Supervisor managing online stores, ad campaigns, and email systems that keep businesses running and growing.
</p>
              <div className="flex flex-col sm:flex-row gap-[14px] sm:flex-wrap justify-center lg:justify-start">
                <a href="#work" className="gsap-hero-btn font-['JetBrains_Mono'] text-[13px] uppercase tracking-[0.05em] py-[14px] px-[26px] no-underline border-[1.5px] border-[var(--ink)] transition-all duration-200 cursor-pointer bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--paper)] hover:text-[var(--ink)] text-center">
                  View Work
                </a>
                <a href="/resume.pdf" download className="gsap-hero-btn font-['JetBrains_Mono'] text-[13px] uppercase tracking-[0.05em] py-[14px] px-[26px] no-underline border-[1.5px] border-[var(--ink)] transition-all duration-200 cursor-pointer bg-transparent text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] text-center">
                  Download Resume
                </a>
                <a href="#contact" className="gsap-hero-btn font-['JetBrains_Mono'] text-[13px] uppercase tracking-[0.05em] py-[14px] px-[26px] no-underline border-[1.5px] border-[var(--ink)] transition-all duration-200 cursor-pointer bg-transparent text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] text-center">
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="hero-photo-col order-1 lg:order-2 w-full flex justify-center lg:justify-stretch">
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

      {/* ABOUT LAYER */}
    <section id="about" className="about-section absolute inset-0 py-[72px] bg-[var(--ink)] text-[var(--paper)] z-20 flex items-center overflow-hidden">
  <div className="max-w-[1080px] mx-auto px-8 w-full">
          <div className="flex items-baseline gap-4 mb-[44px] overflow-hidden">
            <span className="gsap-header-num font-['JetBrains_Mono'] text-[13px] text-[#cfcfcf]">01</span>
            <h2 className="gsap-header-title font-['Archivo'] font-extrabold text-[clamp(24px,4vw,34px)] tracking-[-0.02em] text-[var(--paper)]">About</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12">
            <div>
              <p className="mb-[18px] text-[#cfcfcf] text-[16px]">
                I'm a <strong className="text-[var(--paper)] font-semibold">results-driven marketing professional</strong> with a proven track record of boosting marketing efficiency for companies and multiple clients.
              </p>
              <p className="mb-[18px] text-[#cfcfcf] text-[16px]">
                My work spans <strong className="text-[var(--paper)] font-semibold">e-commerce store management</strong> on Shopee and Lazada, <strong className="text-[var(--paper)] font-semibold">social media and email marketing</strong>, content calendar creation, and end-to-end <strong className="text-[var(--paper)] font-semibold">event marketing</strong> — both virtual and in-person.
              </p>
              <p className="mb-[18px] text-[#cfcfcf] text-[16px]">
                I'm passionate about leveraging technology to streamline workflows and deliver exceptional results, whether that's managing a catalog of nearly 1,000 products or running multi-channel campaigns from strategy to reporting.
              </p>
            </div>
            <div className="border-[1.5px] border-[var(--paper)] p-6 h-fit">
              <div className="flex justify-between py-[14px] border-b border-[#444]">
                <span className="font-['Archivo'] font-extrabold text-[26px] text-[var(--paper)]">900+</span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#cfcfcf] uppercase self-center text-right">Products Managed<br />(Shopee)</span>
              </div>
              <div className="flex justify-between py-[14px] border-b border-[#444]">
                <span className="font-['Archivo'] font-extrabold text-[26px] text-[var(--paper)]">4+</span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#cfcfcf] uppercase self-center text-right">Years in<br />Marketing</span>
              </div>
              <div className="flex justify-between py-[14px]">
                <span className="font-['Archivo'] font-extrabold text-[26px] text-[var(--paper)]">3</span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#cfcfcf] uppercase self-center text-right">Companies<br />&amp; Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}