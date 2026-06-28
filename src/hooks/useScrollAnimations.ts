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
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out' }
        )
          .fromTo('.gsap-hero-title-line',
            { y: 60, opacity: 0, scale: 0.96 },
            { y: 0, opacity: 1, scale: 1, duration: 0.9, stagger: 0.14, ease: 'power4.out' },
            "-=0.3"
          )
          .fromTo('.gsap-hero-sub',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
            "-=0.5"
          )
          .fromTo('.gsap-hero-btn',
            { y: 25, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
            "-=0.4"
          );

        // 2. Section Headers
        gsap.utils.toArray('.gsap-section').forEach((section: any) => {
          const num = section.querySelector('.gsap-header-num');
          const title = section.querySelector('.gsap-header-title');

          if (num && title) {
            gsap.fromTo([num, title],
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                stagger: 0.12,
                ease: 'power4.out',
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
              { y: 60, opacity: 0, scale: 0.92, rotateZ: -2 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                rotateZ: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: group,
                  start: 'top 85%',
                  once: true
                }
              }
            );
          }
        });

        // 4. Events Photos
        const eventGroup = document.querySelector('.gsap-event-group');
        if (eventGroup) {
          const photos = eventGroup.querySelectorAll('.gsap-event-photo');
          gsap.fromTo(photos,
            { scale: 0.8, opacity: 0, y: 40 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: 'power3.out',
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
            { x: -60, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power4.out',
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
            { opacity: 0, y: 25, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              stagger: 0.04,
              ease: 'back.out(1.6)',
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