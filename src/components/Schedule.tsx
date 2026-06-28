import { CALENDAR_EMBED_URL } from '../config';

export default function Schedule() {
  return (
    <section id="schedule" className="gsap-section py-[72px] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="flex items-baseline gap-4 mb-[44px] overflow-hidden">
          <h2 className="gsap-header-title font-['Archivo'] font-extrabold text-[clamp(24px,4vw,34px)] tracking-[-0.02em]">Availability</h2>
        </div>
        <p className="font-['JetBrains_Mono'] text-[12px] text-[var(--slate)] mb-5">
          // Check open slots below and reach out to book a time.
        </p>
        <div className="border-[1.5px] border-[var(--ink)] overflow-x-auto">
          <iframe
            src={CALENDAR_EMBED_URL}
            height="500"
            frameBorder="0"
            scrolling="no"
            className="block w-full min-w-[600px] sm:min-w-0 border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}