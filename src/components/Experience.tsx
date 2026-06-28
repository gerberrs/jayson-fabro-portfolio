

export default function Experience() {
  const experiences = [
    {
      date: '2023 — 2026',
      role: 'Digital & Event Marketing Coordinator',
      company: 'Valvoline — HH Asia Trading Inc.',
      bullets: [
        'Created and distributed engaging content including blog posts, articles, and infographics',
        'Managed email marketing campaigns including segmentation, automation, and reporting',
        'Planned and executed virtual and in-person events — conferences, workshops, webinars, and trade shows',
        'Developed marketing materials including promotional flyers, brochures, and registration forms'
      ]
    },
    {
      date: '2022 — 2023',
      role: 'Digital Marketing',
      company: 'Summer E-Bike',
      bullets: [
        'Built and managed email lists, designed newsletters, and tracked results',
        'Created and implemented multi-channel campaigns to reach target audiences',
        'Managed social media communities and tracked performance',
        'Optimized website content for SEO and user experience'
      ]
    },
    {
      date: '2021 — 2022',
      role: 'Sales Executive',
      company: 'S.E.A Olympus Marketing',
      bullets: [
        'Sold high-quality solid surface products to architects, designers, and contractors',
        'Developed and maintained key client relationships in the construction and design industry',
        'Proactively identified and pursued new sales opportunities'
      ]
    }
  ];

  return (
    <section id="experience" className="gsap-section py-[72px] border-b border-[var(--line)]">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="flex items-baseline gap-4 mb-[44px] overflow-hidden">
          <span className="gsap-header-num font-['JetBrains_Mono'] text-[13px] text-[var(--slate)]">02</span>
          <h2 className="gsap-header-title font-['Archivo'] font-extrabold text-[clamp(24px,4vw,34px)] tracking-[-0.02em]">Experience</h2>
        </div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="gsap-exp-entry flex flex-col sm:flex-row gap-2.5 sm:gap-7 py-7 border-b border-[var(--line)] last:border-none">
            <div className="font-['JetBrains_Mono'] text-[12px] text-[var(--slate)] whitespace-nowrap pt-1 min-w-[90px]">
              {exp.date}
            </div>
            <div>
              <div className="font-['Archivo'] font-extrabold text-[19px] tracking-[-0.01em] mb-0.5">{exp.role}</div>
              <div className="font-['JetBrains_Mono'] text-[12px] text-[var(--slate)] uppercase tracking-[0.04em] mb-[14px]">
                {exp.company}
              </div>
              <ul className="list-none m-0 p-0">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="relative pl-[18px] mb-2 text-[15px] text-[var(--slate)] before:content-['—'] before:absolute before:left-0 before:text-[var(--ink)]">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
