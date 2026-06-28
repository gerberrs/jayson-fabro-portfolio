import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations(isLoaded: boolean) {
  useLayoutEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Hero Animation
        const tl = gsap.timeline();
        tl.fromTo('.gsap-hero-eyebrow span', 
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
        )
        .fromTo('.gsap-hero-title-line',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
          "-=0.2"
        )
        .fromTo('.gsap-hero-sub',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          "-=0.4"
        )
        .fromTo('.gsap-hero-btn',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
          "-=0.4"
        );

        // 2. Section Headers (01 About, 02 Experience, etc)
        gsap.utils.toArray('.gsap-section').forEach((section: any) => {
          const num = section.querySelector('.gsap-header-num');
          const title = section.querySelector('.gsap-header-title');
          
          if (num && title) {
            gsap.fromTo([num, title],
              { y: 20, opacity: 0 },
              { 
                y: 0, 
                opacity: 1, 
                duration: 0.6, 
                stagger: 0.1, 
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 85%',
                  once: true
                }
              }
            );
          }
        });

        // 3. Staggered Cards (Work & Certificates)
        gsap.utils.toArray('.gsap-stagger-group').forEach((group: any) => {
          const cards = group.querySelectorAll('.gsap-stagger-card');
          if (cards.length > 0) {
            gsap.fromTo(cards,
              { x: -30, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: group,
                  start: 'top 85%',
                  once: true
                }
              }
            );
          }
        });

        // 4. Events Photos (Fade + Scale-up)
        const eventGroup = document.querySelector('.gsap-event-group');
        if (eventGroup) {
          const photos = eventGroup.querySelectorAll('.gsap-event-photo');
          gsap.fromTo(photos,
            { scale: 0.95, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: eventGroup,
                start: 'top 85%',
                once: true
              }
            }
          );
        }

        // 5. Experience Timeline
        gsap.utils.toArray('.gsap-exp-entry').forEach((entry: any) => {
          gsap.fromTo(entry,
            { x: -20, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: entry,
                start: 'top 85%',
                once: true
              }
            }
          );
        });

        // 6. Skills Tags
        gsap.utils.toArray('.gsap-skills-group').forEach((group: any) => {
          const tags = group.querySelectorAll('.gsap-skill-tag');
          gsap.fromTo(tags,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.03,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: group,
                start: 'top 85%',
                once: true
              }
            }
          );
        });
      });
    });

    return () => ctx.revert();
  }, [isLoaded]);
}
