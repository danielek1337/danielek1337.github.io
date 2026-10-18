'use client';

import { useEffect } from 'react';

/*
 * All scroll and pointer motion for the landing page, attached to the
 * server-rendered markup by id and class name:
 * - hero preview grows with scroll; the client-site recording plays only while visible
 * - project screenshots pan top to bottom while their card is on screen
 * - the 3-step rail fills with scroll and lights each step as it passes
 * - reveal-on-scroll, nav shadow, mobile CTA dock,
 *   gentle tilt of project windows under the mouse.
 * Everything stays static when the visitor prefers reduced motion.
 */
export default function Effects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const $ = (id: string) => document.getElementById(id);
    const stage = $('stage');
    const wrap = $('frameWrap');
    const heroVid = $('heroVid') as HTMLVideoElement | null;
    const nav = $('nav');
    const dock = $('dock');
    const brief = $('brief');
    const steps = $('steps');
    if (!stage || !wrap || !heroVid || !nav || !dock || !brief || !steps) return;
    const stepEls = Array.from(steps.querySelectorAll<HTMLElement>('.step'));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-links a'));
    const pans = Array.from(document.querySelectorAll<HTMLImageElement>('.pan'));
    const cleanups: Array<() => void> = [];

    function measure() {
      pans.forEach((img) => {
        const box = img.parentElement!.clientHeight;
        const d = Math.max(0, img.offsetHeight - box);
        img.style.setProperty('--dist', `${(-d).toFixed(0)}px`);
        img.style.setProperty('--dur', `${Math.max(8, d / 60).toFixed(1)}s`);
      });
    }

    function stepsTick(vh: number) {
      if (reduce) {
        steps!.style.setProperty('--sp', '1');
        stepEls.forEach((s) => s.classList.add('lit'));
        return;
      }
      // The rail fills as the section passes 60% of the screen height; a step
      // lights up once the fill reaches its circle.
      const r = steps!.getBoundingClientRect();
      const mid = vh * 0.6;
      const fill = Math.min(1, Math.max(0, (mid - r.top - 28) / Math.max(1, r.height - 56)));
      steps!.style.setProperty('--sp', fill.toFixed(4));
      stepEls.forEach((s) => {
        const c = s.querySelector('b')!.getBoundingClientRect();
        s.classList.toggle('lit', c.top + c.height / 2 <= mid + 1);
      });
    }

    function tick() {
      const vh = window.innerHeight;
      const y = window.scrollY;
      nav!.classList.toggle('scrolled', y > 8);
      const br = brief!.getBoundingClientRect();
      dock!.classList.toggle('show', y > vh * 0.6 && !(br.top < vh && br.bottom > 0));
      stepsTick(vh);
      // Highlight the nav link of the section in view.
      let active: HTMLAnchorElement | null = null;
      navLinks.forEach((l) => {
        const sec = document.getElementById(l.hash.slice(1));
        if (sec && sec.getBoundingClientRect().top < vh * 0.4) active = l;
      });
      navLinks.forEach((l) => (l === active ? l.setAttribute('aria-current', 'true') : l.removeAttribute('aria-current')));
      if (reduce) return;
      const r = stage!.getBoundingClientRect();
      const total = Math.max(1, r.height - vh);
      const t = Math.min(1, Math.max(0, (vh * 0.75 - r.top) / (total + vh * 0.75)));
      wrap!.style.setProperty('--p', Math.min(1, t / 0.7).toFixed(3));
    }

    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        tick();
      });
    };
    const onResize = () => {
      measure();
      tick();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    });
    pans.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', measure);
        cleanups.push(() => img.removeEventListener('load', measure));
      }
    });
    measure();
    tick();

    if ('IntersectionObserver' in window) {
      // One video file, fetched and played only while the preview is on screen.
      if (!reduce) {
        const vio = new IntersectionObserver(
          (es) => {
            if (es[0].isIntersecting) heroVid.play().catch(() => {});
            else heroVid.pause();
          },
          { threshold: 0.2 },
        );
        vio.observe(heroVid);
        cleanups.push(() => vio.disconnect());
      }
      if (!reduce) {
        const io = new IntersectionObserver(
          (es) =>
            es.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.remove('pending');
                io.unobserve(e.target);
              }
            }),
          { threshold: 0.15 },
        );
        document.querySelectorAll('.reveal').forEach((el) => {
          if (el.getBoundingClientRect().top > window.innerHeight) el.classList.add('pending');
          io.observe(el);
        });
        cleanups.push(() => io.disconnect());
      }
      const on = new IntersectionObserver(
        (es) => es.forEach((e) => e.target.classList.toggle('on', e.isIntersecting)),
        { threshold: 0.35 },
      );
      document.querySelectorAll('.case').forEach((el) => on.observe(el));
      cleanups.push(() => on.disconnect());
    } else {
      if (!reduce) heroVid.play().catch(() => {});
      document.querySelectorAll('.case').forEach((el) => el.classList.add('on'));
    }

    // Mobile menu: the button opens the section links; a link, Escape or a
    // tap outside closes them.
    const menuBtn = $('menuBtn');
    if (menuBtn) {
      const setOpen = (open: boolean) => {
        nav.classList.toggle('open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', (open ? menuBtn.dataset.close : menuBtn.dataset.open) ?? '');
      };
      const onBtn = () => setOpen(!nav.classList.contains('open'));
      const onNavClick = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('.nav-links a')) setOpen(false);
      };
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && nav.classList.contains('open')) {
          setOpen(false);
          menuBtn.focus();
        }
      };
      const onDoc = (e: MouseEvent) => {
        if (!nav.contains(e.target as Node)) setOpen(false);
      };
      menuBtn.addEventListener('click', onBtn);
      nav.addEventListener('click', onNavClick);
      document.addEventListener('keydown', onKey);
      document.addEventListener('click', onDoc);
      cleanups.push(() => {
        menuBtn.removeEventListener('click', onBtn);
        nav.removeEventListener('click', onNavClick);
        document.removeEventListener('keydown', onKey);
        document.removeEventListener('click', onDoc);
      });
    }

    // Switching PL/EN keeps the visitor on the same section.
    const onLang = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('.lang a');
      if (!a || a.getAttribute('aria-current') === 'page') return;
      const ids = navLinks.map((l) => l.hash.slice(1)).concat('brief');
      const vh = window.innerHeight;
      // The section whose top is closest above 40% of the screen.
      let here = '';
      let best = -Infinity;
      ids.forEach((id) => {
        const top = document.getElementById(id)?.getBoundingClientRect().top ?? Infinity;
        if (top < vh * 0.4 && top > best) {
          best = top;
          here = id;
        }
      });
      if (here) {
        e.preventDefault();
        window.location.href = `${a.getAttribute('href')}#${here}`;
      }
    };
    document.addEventListener('click', onLang);
    cleanups.push(() => document.removeEventListener('click', onLang));

    // Gentle 3D tilt of the project windows under the mouse.
    if (finePointer && !reduce) {
      document.querySelectorAll<HTMLElement>('.win').forEach((w) => {
        const move = (e: MouseEvent) => {
          const b = w.getBoundingClientRect();
          const x = (e.clientX - b.left) / b.width - 0.5;
          const y = (e.clientY - b.top) / b.height - 0.5;
          w.style.setProperty('--ry', `${(x * 6).toFixed(2)}deg`);
          w.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`);
        };
        const leave = () => {
          w.style.setProperty('--ry', '0deg');
          w.style.setProperty('--rx', '0deg');
        };
        w.addEventListener('mousemove', move);
        w.addEventListener('mouseleave', leave);
        cleanups.push(() => {
          w.removeEventListener('mousemove', move);
          w.removeEventListener('mouseleave', leave);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
