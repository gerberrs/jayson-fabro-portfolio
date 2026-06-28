import { useState } from 'react';

interface VideoItem {
  id: string;
  title: string;
  src: string;
}

const videos: VideoItem[] = [
  { id: 'video-1', title: 'Edit 1', src: '/assets/videos/video-1.mp4' },
  { id: 'video-2', title: 'Edit 2', src: '/assets/videos/video-2.mp4' },
  { id: 'video-3', title: 'Edit 3', src: '/assets/videos/video-3.mp4' },
  { id: 'video-4', title: 'Edit 4', src: '/assets/videos/video-4.mp4' },
  { id: 'video-5', title: 'Edit 5', src: '/assets/videos/video-5.mp4' },
  { id: 'video-6', title: 'Edit 6', src: '/assets/videos/video-6.mp4' },
];

function VideoCard({ video, index, onPlay }: { video: VideoItem; index: number; onPlay: () => void }) {
  return (
    <button
      onClick={onPlay}
      className="group relative w-full h-full border-[1.5px] border-[var(--paper)] bg-black overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
    >
      <video
        src={video.src}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        muted
        preload="metadata"
      />
      <div className="absolute top-2 left-2 bg-[var(--ink)] text-[var(--paper)] border-[1.5px] border-[var(--paper)] font-['JetBrains_Mono'] text-[10px] px-1.5 py-0.5">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-12 h-12 flex items-center justify-center rounded-full border-[1.5px] border-white bg-black/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
    </button>
  );
}

export default function Videos() {
  const [playing, setPlaying] = useState<VideoItem | null>(null);

  return (
    <section id="videos" className="gsap-section py-[72px] bg-[var(--ink)] text-[var(--paper)] overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="sec-head-wrap mb-[44px]">
          <div className="flex items-baseline gap-4 mb-2 overflow-hidden">
            <span className="gsap-header-num font-['JetBrains_Mono'] text-[13px] text-[#cfcfcf]">03.5</span>
            <h2 className="gsap-header-title font-['Archivo'] font-extrabold text-[clamp(24px,4vw,34px)] tracking-[-0.02em] text-[var(--paper)]">
              Video Edits
            </h2>
          </div>
          <p className="font-['JetBrains_Mono'] text-[12px] text-[#cfcfcf] uppercase tracking-[0.04em]">
            Self-edited promotional content
          </p>
        </div>

        {/* DESKTOP/TABLET: mosaic grid with explicit row placement (no nested grids) */}
        <div className="hidden sm:grid grid-cols-4 gap-4" style={{ gridTemplateRows: '180px 180px' }}>
          <div style={{ gridRow: '1 / 3' }}>
            <VideoCard video={videos[0]} index={0} onPlay={() => setPlaying(videos[0])} />
          </div>
          <div style={{ gridRow: '1 / 2' }}>
            <VideoCard video={videos[1]} index={1} onPlay={() => setPlaying(videos[1])} />
          </div>
          <div style={{ gridRow: '2 / 3' }}>
            <VideoCard video={videos[2]} index={2} onPlay={() => setPlaying(videos[2])} />
          </div>
          <div style={{ gridRow: '1 / 3' }}>
            <VideoCard video={videos[3]} index={3} onPlay={() => setPlaying(videos[3])} />
          </div>
          <div style={{ gridRow: '1 / 2' }}>
            <VideoCard video={videos[4]} index={4} onPlay={() => setPlaying(videos[4])} />
          </div>
          <div style={{ gridRow: '2 / 3' }}>
            <VideoCard video={videos[5]} index={5} onPlay={() => setPlaying(videos[5])} />
          </div>
        </div>

        {/* MOBILE: simple stacked list */}
        <div className="grid grid-cols-1 gap-4 sm:hidden">
          {videos.map((video, i) => (
            <div key={video.id} className="aspect-[4/3]">
              <VideoCard video={video} index={i} onPlay={() => setPlaying(video)} />
            </div>
          ))}
        </div>
      </div>

      {playing && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
          onClick={() => setPlaying(null)}
        >
          <div
            className="bg-black border-[1.5px] border-white max-w-[860px] w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between py-3 px-4 border-b-[1.5px] border-white font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.04em] text-white">
              <span>{playing.title.toLowerCase()}</span>
              <button
                onClick={() => setPlaying(null)}
                aria-label="Close"
                className="px-2 py-1 border border-white text-white hover:bg-white hover:text-black transition-colors"
              >
                ESC ✕
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center bg-black">
              <video
                src={playing.src}
                controls
                autoPlay
                className="max-w-full max-h-[75vh]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}