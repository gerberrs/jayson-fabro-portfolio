interface ToolItem {
  name: string;
  logo: string;
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
        loading="lazy"
        className="max-w-[28px] max-h-[28px] object-contain flex-shrink-0"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </span>
  );
}

function MarqueeLogos() {
  return (
    <div className="flex justify-center mb-10">
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

export default function Skills() {
  const groups = [
    {
      title: 'E-Commerce & Ads',
      skills: ['Shopee', 'Lazada', 'Meta Ads', 'Google Ads', 'Mailchimp']
    },
    {
      title: 'Data & Operations',
      skills: ['Excel', 'VLOOKUP', 'Pivot Tables', 'Xero', 'Oracle CRM', 'Google Sheets']
    },
    {
      title: 'Content & Productivity',
      skills: ['Canva', 'CapCut', 'Google Slides', 'MS Word', 'PowerPoint']
    }
  ];

  return (
    <section id="skills" className="gsap-section py-[72px] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="flex items-baseline gap-4 mb-[44px] overflow-hidden">
          <span className="gsap-header-num font-['JetBrains_Mono'] text-[13px] text-[var(--slate)]">06</span>
          <h2 className="gsap-header-title font-['Archivo'] font-extrabold text-[clamp(24px,4vw,34px)] tracking-[-0.02em]">Tools &amp; Skills</h2>
        </div>

        <MarqueeLogos />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {groups.map((group, idx) => (
            <div key={idx} className="gsap-skills-group">
              <h4 className="font-['JetBrains_Mono'] text-[12px] uppercase tracking-[0.06em] text-[var(--slate)] mb-4 pb-2.5 border-b border-[var(--line)]">
                {group.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="gsap-skill-tag text-[13px] py-1.5 px-3 border border-[var(--line)] bg-white transition-all duration-200 hover:border-[var(--ink)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}