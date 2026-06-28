export default function Experience() {
  const experiences = [
    {
      date: 'Present',
      role: 'E-Commerce Supervisor',
      company: 'Domaco Singapore',
      bullets: [
        'Developed and executed content calendars, promotional campaigns, and social media strategies aligned with business goals',
        'Created engaging social media content, including graphics, captions, and short-form videos using Canva and CapCut',
        'Assisted in managing Shopee and Lazada stores, including product listings, promotions, and campaign execution'
      ]
    },
    {
      date: '2023 — 2026',
      role: 'Digital Marketing Assistant',
      company: 'HH Asia Trading Inc. - Valvoline',
      bullets: [
        'Create and distribute engaging content including blog posts, articles, infographics, and videos',
        'Manage email marketing campaigns, including segmentation, automation, and reporting',
        'Assist with planning and executing both virtual and in-person events, including conferences, workshops, webinars, and trade shows',
        'Develop event marketing materials, such as promotional flyers, brochures'
      ]
    },
    {
      date: '2022 — 2023',
      role: 'Digital Marketing Assistant',
      company: 'Summer E-Bike',
      bullets: [
        'Create and implement campaigns across multiple channels to reach target audiences',
        'Create engaging content, manage social media communities, and track performance',
        'Optimize website content for SEO and user experience, ensuring it\'s engaging and informative'
      ]
    },
    {
      date: '2021 — 2022',
      role: 'Sales Executive',
      company: 'S.E.A Olympus Marketing Inc',
      bullets: [
        'Drive sales of our high-quality solid surface products to architects, designers, contractors, and homeowners',
        'Develop and maintain relationships with key clients in the construction and design industry',
        'Form initial contact to closing deals, and effectively manage the sales process'
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