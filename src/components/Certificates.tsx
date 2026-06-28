import { useState, useRef } from 'react';

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 'cert-canva',
    name: 'Canva',
    issuer: 'Certificate of Completion',
    image: '/assets/work/certs/Certificate of Completion - Canva.png',
  },
  {
    id: 'cert-data-entry',
    name: 'Data Entry',
    issuer: 'Certificate of Completion',
    image: '/assets/work/certs/Certificate of Completion - Data Entry.png',
  },
  {
    id: 'cert-graphics-design',
    name: 'Graphics Design',
    issuer: 'Certificate of Completion',
    image: '/assets/work/certs/Certificate of Completion - Graphics Design.png',
  },
  {
    id: 'cert-lead-generation',
    name: 'Lead Generation',
    issuer: 'Certificate of Completion',
    image: '/assets/work/certs/Certificate of Completion - Lead Generation.png',
  },
  {
    id: 'cert-meta-advertising',
    name: 'Meta Advertising',
    issuer: 'Certificate of Completion',
    image: '/assets/work/certs/Certificate of Completion - Meta Advertising (1).png',
  },
  {
    id: 'cert-social-media',
    name: 'Social Media Management',
    issuer: 'Certificate of Completion',
    image: '/assets/work/certs/Certificate of Completion - Social Media Management.png',
  },
];

const DRAG_THRESHOLD = 60;

export default function Certificates() {
  const [viewing, setViewing] = useState<Certificate | null>(null);
  const [activeIndex, setActiveIndex] = useState(2);

  const dragState = useRef({
    isDown: false,
    startX: 0,
    accumulated: 0,
    moved: false,
  });

  const clampIndex = (i: number) => Math.max(0, Math.min(certificates.length - 1, i));

  const handlePointerDown = (e: React.PointerEvent) => {
    dragState.current.isDown = true;
    dragState.current.startX = e.clientX;
    dragState.current.accumulated = 0;
    dragState.current.moved = false;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const state = dragState.current;
    if (!state.isDown) return;

    const delta = e.clientX - state.startX;
    if (Math.abs(delta) > 4) state.moved = true;

    state.accumulated += delta;
    state.startX = e.clientX;

    if (state.accumulated > DRAG_THRESHOLD) {
      setActiveIndex((prev) => clampIndex(prev - 1));
      state.accumulated = 0;
    } else if (state.accumulated < -DRAG_THRESHOLD) {
      setActiveIndex((prev) => clampIndex(prev + 1));
      state.accumulated = 0;
    }
  };

  const endDrag = () => {
    dragState.current.isDown = false;
    dragState.current.accumulated = 0;
    setTimeout(() => {
      dragState.current.moved = false;
    }, 0);
  };

  const handleCardClick = (i: number, cert: Certificate) => {
    if (dragState.current.moved) return;
    if (i === activeIndex) {
      setViewing(cert);
    } else {
      setActiveIndex(i);
    }
  };

  return (
    <section id="certificates" className="gsap-section py-[72px] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="flex items-baseline gap-4 mb-[44px] overflow-hidden">
          <span className="gsap-header-num font-['JetBrains_Mono'] text-[13px] text-[var(--accent)]">04</span>
          <h2 className="gsap-header-title font-['Archivo'] font-extrabold text-[clamp(24px,4vw,34px)] tracking-[-0.02em]">
            Certificates
          </h2>
        </div>

        <div
          className="relative h-[260px] sm:h-[320px] md:h-[400px] w-full flex items-center justify-center [perspective:1200px] mt-4 select-none touch-pan-y cursor-grab active:cursor-grabbing overflow-hidden sm:overflow-visible"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
        >
          {certificates.map((cert, i) => {
            const offset = i - activeIndex;
            const absOffset = Math.abs(offset);
            const zIndex = 50 - absOffset;
            const scale = 1 - absOffset * 0.15;
            const rotateY = offset * -15;
            const translateX = offset * 50;

            return (
              <button
                key={cert.id}
                onClick={() => handleCardClick(i, cert)}
                className="absolute w-[180px] sm:w-[240px] md:w-[320px] text-left border-[1.5px] border-[var(--ink)] bg-white cursor-pointer transition-[transform,opacity,box-shadow] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[5px_5px_12px_rgba(0,0,0,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                style={{
                  zIndex,
                  transform: `translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
                  opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.2,
                  pointerEvents: absOffset > 2 ? 'none' : 'auto',
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  draggable={false}
                  loading="lazy"
                  className="w-full block object-cover bg-[var(--pale)] aspect-[4/3] pointer-events-none"
                />
                <div className="p-2 sm:p-3 border-t border-[var(--line)]">
                  <b className="text-[var(--ink)] font-semibold block text-[12px] sm:text-[14px] font-['Inter']">{cert.name}</b>
                  <span className="text-[10px] sm:text-[12px] text-[var(--slate)] font-['JetBrains_Mono']">{cert.issuer}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to certificate ${i + 1}`}
              className={`w-2 h-2 rounded-full border border-[var(--accent)] transition-colors ${
                i === activeIndex ? 'bg-[var(--accent)]' : 'bg-transparent'
              }`}
            />
          ))}
        </div>
      </div>

      {viewing && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4 md:p-10"
          onClick={() => setViewing(null)}
        >
          <div
            className="bg-[var(--paper)] border-[1.5px] border-[var(--ink)] max-w-[700px] w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between py-3 px-4 border-b-[1.5px] border-[var(--ink)] font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.04em]">
              <span>{viewing.name.toLowerCase()}</span>
              <button
                onClick={() => setViewing(null)}
                aria-label="Close"
                className="px-2 py-1 border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
              >
                ESC ✕
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center bg-[var(--pale)] p-4">
              <img
                src={viewing.image}
                alt={viewing.name}
                loading="lazy"
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-4 border-t border-[var(--line)]">
              <b className="text-[var(--ink)] font-semibold block font-['Inter']">{viewing.name}</b>
              <span className="text-[13px] text-[var(--slate)] font-['JetBrains_Mono']">{viewing.issuer}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}