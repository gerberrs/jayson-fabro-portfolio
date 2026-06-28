export default function Contact() {
  return (
    <section id="contact" className="gsap-section py-[72px] bg-[var(--ink)] text-[var(--paper)]">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="flex items-baseline gap-4 mb-[44px] overflow-hidden">
          <span className="gsap-header-num font-['JetBrains_Mono'] text-[13px] text-[var(--slate)]">07</span>
          <h2 className="gsap-header-title font-['Archivo'] font-extrabold text-[clamp(24px,4vw,34px)] tracking-[-0.02em] text-[var(--paper)]">Contact</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="border-[1.5px] border-[var(--paper)] p-7">
            <h4 className="font-['JetBrains_Mono'] text-[12px] uppercase tracking-[0.06em] mb-[18px] text-[var(--paper)]">Get in Touch</h4>
            <div className="flex gap-2.5 mb-3 text-[15px] items-baseline">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[var(--paper)] uppercase min-w-[56px]">Email</span>
              <a href="mailto:jaysonfabro27@gmail.com" className="text-[#cfcfcf] no-underline border-b border-[#444] hover:text-[var(--paper)] hover:border-[var(--paper)] transition-colors">jaysonfabro27@gmail.com</a>
            </div>
            <div className="flex gap-2.5 mb-3 text-[15px] items-baseline">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[var(--paper)] uppercase min-w-[56px]">Phone</span>
              <span className="text-[#cfcfcf]">+63 997 540 7607</span>
            </div>
            <div className="flex gap-2.5 mb-3 text-[15px] items-baseline">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[var(--paper)] uppercase min-w-[56px]">Loc</span>
              <span className="text-[#cfcfcf]">Taguig City, Metro Manila, Philippines</span>
            </div>
          </div>
          <div className="border-[1.5px] border-[var(--paper)] p-7">
            <h4 className="font-['JetBrains_Mono'] text-[12px] uppercase tracking-[0.06em] mb-[18px] text-[var(--paper)]">Languages</h4>
            <div className="flex gap-2.5 mb-3 text-[15px] items-baseline">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[var(--paper)] uppercase min-w-[56px]">EN</span>
              <span className="text-[#cfcfcf]">English — Fluent</span>
            </div>
            <div className="flex gap-2.5 mb-3 text-[15px] items-baseline">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[var(--paper)] uppercase min-w-[56px]">TL</span>
              <span className="text-[#cfcfcf]">Tagalog — Fluent</span>
            </div>
            <div className="flex gap-2.5 mb-3 text-[15px] items-baseline">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[var(--paper)] uppercase min-w-[56px]">Edu</span>
              <span className="text-[#cfcfcf]">BSBA, Major in Marketing Management</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}