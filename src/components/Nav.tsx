import { useState, useEffect } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#fafafa]/85 backdrop-blur-[8px] border-b border-[#D4D4D4]">
      <div className="max-w-[1080px] mx-auto px-8 py-4 flex justify-between items-center">
        <div className="font-['Archivo'] font-extrabold text-[15px] tracking-[-0.01em]">JAYSON Q. FABRO</div>

        <div className="hidden md:flex gap-7">
          {links.map((link) => {
            const isActive = activeSection === link.href;
            const linkClass = "font-['JetBrains_Mono'] text-[12px] no-underline uppercase tracking-[0.05em] transition-colors duration-200 hover:text-[var(--ink)] " + (isActive ? 'text-[var(--ink)] border-b border-[var(--ink)]' : 'text-[var(--slate)]');
            return (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            );
          })}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] cursor-pointer">
          <span className={"block w-6 h-[1.5px] bg-[var(--ink)] transition-transform duration-200 " + (isOpen ? 'rotate-45 translate-y-[6.5px]' : '')} />
          <span className={"block w-6 h-[1.5px] bg-[var(--ink)] transition-opacity duration-200 " + (isOpen ? 'opacity-0' : '')} />
          <span className={"block w-6 h-[1.5px] bg-[var(--ink)] transition-transform duration-200 " + (isOpen ? '-rotate-45 -translate-y-[6.5px]' : '')} />
        </button>
      </div>

      <div className={"md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-[#D4D4D4] " + (isOpen ? 'max-h-[400px]' : 'max-h-0')}>
        <div className="flex flex-col px-8 py-4 gap-4">
          {links.map((link) => {
            const isActive = activeSection === link.href;
            const linkClass = "font-['JetBrains_Mono'] text-[13px] no-underline uppercase tracking-[0.05em] py-1 transition-colors duration-200 hover:text-[var(--ink)] " + (isActive ? 'text-[var(--ink)]' : 'text-[var(--slate)]');
            return (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={linkClass}>
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}