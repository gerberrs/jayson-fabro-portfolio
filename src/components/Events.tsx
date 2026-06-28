import { useState } from 'react';

const eventPhotos: string[] = [
  '/assets/work/Events/1st.jpg',
  '/assets/work/Events/2nd.jpg',
  '/assets/work/Events/3rd.jpg',
];

export default function Events() {
  const [viewing, setViewing] = useState<number | null>(null);

  return (
    <section id="events" className="gsap-section py-[72px] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="sec-head-wrap mb-[44px]">
          <div className="flex items-baseline gap-4 mb-2 overflow-hidden">
            <span className="gsap-header-num font-['JetBrains_Mono'] text-[13px] text-[var(--slate)]">05</span>
            <h2 className="gsap-header-title font-['Archivo'] font-extrabold text-[clamp(24px,4vw,34px)] tracking-[-0.02em]">
              Events
            </h2>
          </div>
          <p className="font-['JetBrains_Mono'] text-[12px] text-[var(--slate)] uppercase tracking-[0.04em]">
            HH Asia Trading — Event Marketing Coordinator
          </p>
        </div>

        <div className="gsap-event-group grid grid-cols-1 sm:grid-cols-3 gap-6">
          {eventPhotos.map((photo, i) => (
            <button
              key={photo}
              onClick={() => setViewing(i)}
              className="gsap-event-photo group relative w-full border-[1.5px] border-[var(--ink)] bg-white cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 overflow-hidden"
            >
              <div className="absolute top-2 left-2 bg-[var(--paper)] text-[var(--ink)] border-[1.5px] border-[var(--ink)] font-['JetBrains_Mono'] text-[10px] px-1.5 py-0.5 z-10 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
              <img
                src={photo}
                alt={`HH Asia Trading event photo ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover block"
              />
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX VIEWER */}
      {viewing !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4 md:p-10"
          onClick={() => setViewing(null)}
        >
          <div
            className="bg-[var(--paper)] border-[1.5px] border-[var(--ink)] max-w-[700px] w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between py-3 px-4 border-b-[1.5px] border-[var(--ink)] font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.04em]">
              <span>hh asia trading — {viewing + 1} / {eventPhotos.length}</span>
              <button
                onClick={() => setViewing(null)}
                aria-label="Close"
                className="px-2 py-1 border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
              >
                ESC ✕
              </button>
            </div>
            <div className="relative flex-1 flex items-center justify-center bg-[var(--pale)] p-4">
              <img
                src={eventPhotos[viewing]}
                alt={`HH Asia Trading event photo ${viewing + 1}`}
                className="max-w-full max-h-[70vh] object-contain"
              />
              {eventPhotos.length > 1 && (
                <>
                  <button
                    onClick={() => setViewing((viewing - 1 + eventPhotos.length) % eventPhotos.length)}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center border-[1.5px] border-[var(--ink)] bg-[var(--paper)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setViewing((viewing + 1) % eventPhotos.length)}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center border-[1.5px] border-[var(--ink)] bg-[var(--paper)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
                  >
                    →
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}