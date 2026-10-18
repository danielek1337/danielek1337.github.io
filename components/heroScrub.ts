/*
 * Hero recording of the Generation Z Agency site.
 * A short video loops the site's hero. Once the preview frame has grown,
 * scroll drives a sequence of still frames drawn on a canvas. Seeking a video
 * file on every wheel step stutters, so we use frames instead, and the shown
 * frame eases toward the scroll position so wheel steps glide.
 */
const FRAMES = 165;
const src = (i: number) => `/work/genz-seq/${String(i).padStart(3, '0')}.webp`;

export function createHeroScrub(view: HTMLElement, video: HTMLVideoElement, canvas: HTMLCanvasElement, reduce: boolean) {
  const ctx = canvas.getContext('2d');
  const imgs: HTMLImageElement[] = new Array(FRAMES);
  let want = 0;
  let cur = 0;
  let drawn = -1;
  let raf = 0;
  let started = false;
  let alive = true;

  if (reduce) {
    video.removeAttribute('autoplay');
    video.pause();
  }

  const ready = (im?: HTMLImageElement) => !!im && im.complete && im.naturalWidth > 0;

  function nearest(i: number) {
    for (let d = 0; d < FRAMES; d++) {
      if (ready(imgs[i - d])) return i - d;
      if (ready(imgs[i + d])) return i + d;
    }
    return -1;
  }

  function draw(force: boolean) {
    if (!ctx) return;
    const i = nearest(Math.round(cur));
    if (i < 0 || (i === drawn && !force)) return;
    ctx.drawImage(imgs[i], 0, 0, canvas.width, canvas.height);
    drawn = i;
  }

  function load() {
    if (started) return;
    started = true;
    // Spread order (every 8th frame, then the gaps) so a rough scrub works early.
    const order: number[] = [];
    const seen = new Set<number>();
    for (const step of [8, 4, 2, 1]) {
      for (let i = 0; i < FRAMES; i += step) {
        if (!seen.has(i)) {
          seen.add(i);
          order.push(i);
        }
      }
    }
    order.forEach((i) => {
      const im = new Image();
      im.decoding = 'async';
      im.onload = () => {
        if (alive && (drawn < 0 || Math.abs(i - cur) < Math.abs(drawn - cur))) draw(true);
      };
      im.src = src(i);
      imgs[i] = im;
    });
  }

  function loop() {
    cur += (want - cur) * 0.16;
    if (Math.abs(want - cur) < 0.05) cur = want;
    draw(false);
    raf = cur === want ? 0 : requestAnimationFrame(loop);
  }

  function update(q: number) {
    const scrub = q > 0;
    view.classList.toggle('scrub', scrub);
    if (scrub) {
      if (!video.paused) video.pause();
    } else if (video.paused) {
      video.play().catch(() => {});
    }
    want = q * (FRAMES - 1);
    if (!raf) raf = requestAnimationFrame(loop);
  }

  return {
    load,
    update,
    destroy() {
      alive = false;
      if (raf) cancelAnimationFrame(raf);
    },
  };
}
