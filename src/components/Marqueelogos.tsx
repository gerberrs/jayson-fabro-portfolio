// MarqueeLogos.tsx
// Continuously auto-scrolling logo strip for the Tools & Skills section.
// Each tool just needs a PNG logo file dropped into /public/assets/logos/
// matching the filename below — no SVG sourcing or icon libraries needed.

interface ToolItem {
  name: string;
  logo: string; // path to PNG file in /public/assets/logos/
}

const tools: ToolItem[] = [
  { name: 'Shopee', logo: '/assets/logos/shopee.png' },
  { name: 'Lazada', logo: '/assets/logos/lazada.png' },
  { name: 'Meta', logo: '/assets/logos/meta.png' },
  { name: 'Google Ads', logo: '/assets/logos/google-ads.png' },
  { name: 'Mailchimp', logo: '/assets/logos/mailchimp.png' },
  { name: 'Canva', logo: '/assets/logos/canva.png' },
  { name: 'CapCut', logo: '/assets/logos/capcut.png' },
  { name: 'Xero', logo: '/assets/logos/xero.png' },
  { name: 'Google Sheets', logo: '/assets/logos/google-sheets.png' },
  { name: 'Excel', logo: '/assets/logos/excel.png' },
  { name: 'Google Slides', logo: '/assets/logos/google-slides.png' },
  { name: 'MS Word', logo: '/assets/logos/word.png' },
  { name: 'PowerPoint', logo: '/assets/logos/powerpoint.png' },
];

function ToolBadge({ tool }: { tool: ToolItem }) {
  return (
    <span className="flex items-center justify-center w-14 h-14 px-3 border-[1.5px] border-[var(--ink)] bg-white flex-shrink-0">
      <img
        src={tool.logo}
        alt={`${tool.name} logo`}
        title={tool.name}
        className="max-w-[28px] max-h-[28px] object-contain flex-shrink-0"
        // if a logo file is missing, hide the broken-image icon gracefully
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </span>
  );
}

export default function MarqueeLogos() {
  return (
    <div className="flex justify-center mb-4">
      <div
        className="relative overflow-hidden py-3 w-[65%] max-w-[600px] min-w-[280px]"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="flex gap-3 w-max [animation:marquee_36s_linear_infinite] motion-reduce:animate-none hover:[animation-play-state:paused]">
          {/* render the list twice back-to-back for a seamless loop */}
          {[...tools, ...tools].map((tool, i) => (
            <ToolBadge key={`${tool.name}-${i}`} tool={tool} />
          ))}
        </div>

        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </div>
  );
}