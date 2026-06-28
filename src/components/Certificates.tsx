import { useState, useRef, useEffect } from 'react';

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  image: string;
}

const certificates: Certificate[] = [
  { id: 'cert-canva', name: 'Canva', issuer: 'Certificate of Completion', image: '/assets/work/certs/Certificate of Completion - Canva.png' },
  { id: 'cert-data-entry', name: 'Data Entry', issuer: 'Certificate of Completion', image: '/assets/work/certs/Certificate of Completion - Data Entry.png' },
  { id: 'cert-graphics-design', name: 'Graphics Design', issuer: 'Certificate of Completion', image: '/assets/work/certs/Certificate of Completion - Graphics Design.png' },
  { id: 'cert-lead-generation', name: 'Lead Generation', issuer: 'Certificate of Completion', image: '/assets/work/certs/Certificate of Completion - Lead Generation.png' },
  { id: 'cert-meta-advertising', name: 'Meta Advertising', issuer: 'Certificate of Completion', image: '/assets/work/certs/Certificate of Completion - Meta Advertising (1).png' },
  { id: 'cert-social-media', name: 'Social Media Management', issuer: 'Certificate of Completion', image: '/assets/work/certs/Certificate of Completion - Social Media Management.png' },
];

const ROTATION_SPEED = 0.15; // degrees per frame, continuous

export default function Certificates() {
  const [viewing, setViewing] = useState<Certificate | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [rotation, setRotation] = useState(0);
  const rafRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragStartRotation = useRef(0);
  const movedRef = useRef(false);

  const anglePerCard = 360 / certificates.length;

  // Continuous rotation loop
  useEffect(() => {
    const tick = () => {
      if (!isPaused) {
        setRotation((r) => r + ROTATION_SPEED);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    movedRef.current = false;
    dragStartX.current = e.clientX;
    dragStartRotation.current = rotation;
    setIsPaused(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 4) movedRef.current = true;
    setRotation(dragStartRotation.current + delta * 0.3);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    setTimeout(() => {
      movedRef.current = false;
    }, 0);
  };

  const handleCardClick = (cert: Certificate) => {
    if (movedRef.current) return;
    setViewing(cert);
  };

  const radius = 280; // px, controls how wide the wheel's orbit is

  return (
    <section id="certificates" className="gsap-section py-[72px] border-b border-[var(--line)] relative overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="flex items-baseline gap-4 mb-[44px] overflow-hidden">
          <span className="gsap-header-num font-['JetBrains_Mono'] text-[13px] text-[var(--accent)]">05</span>
          <h2 className="gsap-header-title font-['Archivo'] font-extrabold text-[clamp(24px,4vw,34px)] tracking-[-0.02em]">
            Certificates
          </h2>
        </div>

        <div
          className="relative h-[280px] sm:h-[340px] md:h-[400px] w-full flex items-center justify-center [perspective:1400px] mt-4 select-none touch-pan-y cursor-grab active:cursor-grabbing overflow-hidden"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {certificates.map((cert, i) => {
            const angle = i * anglePerCard + rotation;
            const rad = (angle * Math.PI) / 180;

            // Position on a circle, viewed from the side (orbit going left-right, depth via z)
            const x = Math.sin(rad) * radius;
            const z = Math.cos(rad) * radius;

            // Normalize z to 0-1 for scale/opacity (front of wheel = closer/bigger, back = smaller/fainter)
            const depthFactor = (z + radius) / (2 * radius); // 0 = back, 1 = front
            const scale = 0.55 + depthFactor * 0.45;
            const opacity = 0.25 + depthFactor * 0.75;
            const zIndex = Math.round(depthFactor * 100);

            return (
              <button
                key={cert.id}
                onClick={() => handleCardClick(cert)}
                className="absolute w-[160px] sm:w-[200px] md:w-[260px] text-left border-[1.5px] border-[var(--ink)] bg-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                style={{
                  zIndex,
                  transform: `translateX(${x}px) scale(${scale})`,
                  opacity,
                  pointerEvents: depthFactor > 0.3 ? 'auto' : 'none',
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