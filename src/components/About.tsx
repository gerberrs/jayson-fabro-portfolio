export default function About() {
  return (
    <section id="about" className="gsap-section py-[72px] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="flex items-baseline gap-4 mb-[44px] overflow-hidden">
          <span className="gsap-header-num font-['JetBrains_Mono'] text-[13px] text-[var(--slate)]">01</span>
          <h2 className="gsap-header-title font-['Archivo'] font-extrabold text-[clamp(24px,4vw,34px)] tracking-[-0.02em]">About</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12">
          <div>
            <p className="mb-[18px] text-[var(--slate)] text-[16px]">
              I'm a <strong className="text-[var(--ink)] font-semibold">results-driven marketing professional</strong> with a proven track record of boosting marketing efficiency for companies and multiple clients.
            </p>
            <p className="mb-[18px] text-[var(--slate)] text-[16px]">
              My work spans <strong className="text-[var(--ink)] font-semibold">e-commerce store management</strong> on Shopee and Lazada, <strong className="text-[var(--ink)] font-semibold">social media and email marketing</strong>, content calendar creation, and end-to-end <strong className="text-[var(--ink)] font-semibold">event marketing</strong> — both virtual and in-person.
            </p>
            <p className="mb-[18px] text-[var(--slate)] text-[16px]">
              I'm passionate about leveraging technology to streamline workflows and deliver exceptional results, whether that's managing a catalog of nearly 1,000 products or running multi-channel campaigns from strategy to reporting.
            </p>
          </div>
          <div className="border-[1.5px] border-[var(--ink)] p-6 h-fit">
            <div className="flex justify-between py-[14px] border-b border-[var(--line)]">
              <span className="font-['Archivo'] font-extrabold text-[26px]">900+</span>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[var(--slate)] uppercase self-center text-right">Products Managed<br />(Shopee)</span>
            </div>
            <div className="flex justify-between py-[14px] border-b border-[var(--line)]">
              <span className="font-['Archivo'] font-extrabold text-[26px]">4+</span>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[var(--slate)] uppercase self-center text-right">Years in<br />Marketing</span>
            </div>
            <div className="flex justify-between py-[14px]">
              <span className="font-['Archivo'] font-extrabold text-[26px]">3</span>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[var(--slate)] uppercase self-center text-right">Companies<br />&amp; Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
