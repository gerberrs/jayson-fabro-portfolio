import { useState, useEffect, useCallback, useRef } from 'react';

interface WorkCategory {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  images: string[]; // multiple screenshots per category
}

const works: WorkCategory[] = [
  {
    id: 'shopee',
    title: 'Shopee',
    desc: 'Managed product listings, marketing campaigns, performance reporting, and shipping operations for a live Shopee store with 944 products.',
    tags: ['Seller Center', 'Listings', 'Marketing Centre', 'Shipping'],
    images: [
      '/assets/work/Shopee/Product listing Shopee.png',
      '/assets/work/Shopee/Marketing Centre.png',
      '/assets/work/Shopee/Manage Shopee Business Insight.png',
      '/assets/work/Shopee/manage Shipping Settings.png',
    ],
  },
  {
    id: 'meta',
    title: 'Meta',
    desc: 'Ran paid ad campaigns and managed social media content and community engagement across Meta platforms.',
    tags: ['Meta Ads', 'Social Media', 'Content'],
    images: [
      '/assets/work/Meta/Manage Ads Manager.png',
      '/assets/work/Meta/Manage Meta .png',
      '/assets/work/Meta/Manage Meta Content.png',
    ],
  },
  {
    id: 'lazada',
    title: 'Lazada',
    desc: 'Managed store listings and operations on Lazada, mirroring catalog and fulfillment workflows across platforms.',
    tags: ['Seller Center', 'Listings', 'Operations'],
    images: [
      '/assets/work/Lazada/Manage Product .png',
      '/assets/work/Lazada/Manage Campaign.png',
      '/assets/work/Lazada/Manage Customer Engagement .png',
      '/assets/work/Lazada/Manage Data Insight.png',
    ],
  },
];

export default function Work() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setSlide(0);
  };

  const closeModal = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const active = activeIndex !== null ? works[activeIndex] : null;

  const next = useCallback(() => {
    if (!active) return;
    setSlide((s) => (s + 1) % active.images.length);
  }, [active]);

  const prev = useCallback(() => {
    if (!active) return;
    setSlide((s) => (s - 1 + active.images.length) % active.images.length);
  }, [active]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeIndex, closeModal, next, prev]);

  return (
    <section id="work" className="gsap-section py-[72px] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="flex items-baseline gap-4 mb-[44px] overflow-hidden">
          <span className="gsap-header-num font-['JetBrains_Mono'] text-[13px] text-[var(--slate)]">03</span>
          <h2 className="gsap-header-title font-['Archivo'] font-extrabold text-[clamp(24px,4vw,34px)] tracking-[-0.02em]">Work</h2>
        </div>

        {/* GRID LAYOUT */}
       <div
  className="gsap-stagger-group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-7 items-start"
>
  {works.map((work, index) => (
    <button
      key={work.id}
      data-card
      onClick={() => openModal(index)}
      className="gsap-stagger-card text-left w-full h-full flex flex-col border-[1.5px] border-[var(--ink)] bg-white cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0_var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
    >
      <div className="flex items-center gap-2 py-2.5 px-[14px] border-b-[1.5px] border-[var(--ink)] font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.04em]">
        <span className="w-[9px] h-[9px] border-[1.5px] border-[var(--accent)] rounded-full"></span>
        {work.title.toLowerCase()}
        <span className="ml-auto text-[var(--accent)]">{work.images.length} shots →</span>
      </div>
      <img
        src={work.images[0]}
        alt={work.title}
        loading="lazy"
        className="w-full block aspect-[16/10] object-cover bg-[var(--pale)]"
      />
      <div className="p-[14px] border-t border-[var(--line)] flex flex-col flex-1">
        <b className="text-[var(--ink)] font-semibold block mb-1 font-['Inter']">{work.title}</b>
        <p className="text-[14px] text-[var(--slate)] mb-3">{work.desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-['JetBrains_Mono'] uppercase tracking-[0.03em] px-2 py-1 border border-[var(--line)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  ))}
</div>
      </div>

      {/* MODAL / CAROUSEL */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4 md:p-10"
          onClick={closeModal}
        >
          <div
            className="bg-[var(--paper)] border-[1.5px] border-[var(--ink)] max-w-[860px] w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between py-3 px-4 border-b-[1.5px] border-[var(--ink)] font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.04em]">
              <span className="flex items-center gap-2">
                <span className="w-[9px] h-[9px] border-[1.5px] border-[var(--accent)] rounded-full"></span>
                {active.title.toLowerCase()} — {slide + 1} / {active.images.length}
              </span>
              <button
                onClick={closeModal}
                aria-label="Close"
                className="px-2 py-1 border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
              >
                ESC ✕
              </button>
            </div>

            <div className="relative flex-1 flex items-center justify-center bg-[var(--pale)] overflow-hidden">
              <img
                src={active.images[slide]}
                alt={`${active.title} — slide ${slide + 1}`}
                loading="lazy"
                className="max-w-full max-h-[60vh] object-contain"
              />

              {active.images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center border-[1.5px] border-[var(--ink)] bg-[var(--paper)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center border-[1.5px] border-[var(--ink)] bg-[var(--paper)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            <div className="p-4 border-t border-[var(--line)]">
              <b className="text-[var(--ink)] font-semibold block mb-1 font-['Inter']">{active.title}</b>
              <p className="text-[14px] text-[var(--slate)] mb-3">{active.desc}</p>
              {active.images.length > 1 && (
                <div className="flex gap-2">
                  {active.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`w-2 h-2 rounded-full border border-[var(--accent)] transition-colors ${
                        i === slide ? 'bg-[var(--accent)]' : 'bg-transparent'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}