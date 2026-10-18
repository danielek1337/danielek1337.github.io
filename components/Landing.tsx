/* eslint-disable @next/next/no-img-element -- static export, screenshots are pre-sized JPEGs */
import BriefForm from '@/components/BriefForm';
import Effects from '@/components/Effects';
import { dictionaries, type CaseStudy, type Dict, type Locale } from '@/lib/i18n';
import { SOCIALS } from '@/lib/site';

const icon = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
};

const Icons = {
  linkedin: (
    <svg {...icon}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2.5 2.5 0 0 1 5 0v4M12 10v7" />
    </svg>
  ),
  github: (
    <svg {...icon}>
      <path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  ),
};

function Arrow() {
  return (
    <span className="arr" aria-hidden="true">
      →
    </span>
  );
}

function Case({ c, t }: { c: CaseStudy; t: Dict }) {
  return (
    <article className="case reveal">
      <div className="win">
        <div className="bar">
          <i />
          <i />
          <i />
          <span>{c.host}</span>
        </div>
        <div className={`view${c.dark ? ' dark' : ''}`}>
          <img className="pan" src={c.shot} alt={c.alt} width={c.shotW} height={c.shotH} loading="lazy" />
        </div>
      </div>
      <div className="txt">
        <span className="tag">{c.tag}</span>
        <h3>{c.name}</h3>
        <p>{c.body}</p>
        <ul className="feats">
          {c.feats.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <a className="link" href={c.url} target="_blank" rel="noopener noreferrer">
          {t.seeSite} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default function Landing({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const words = t.heroTitle.split(' ');
  const [genz] = t.cases;
  const socials = [
    { key: 'linkedin', name: 'LinkedIn', href: SOCIALS.linkedin.href, sub: SOCIALS.linkedin.handle },
    { key: 'github', name: 'GitHub', href: SOCIALS.github.href, sub: SOCIALS.github.handle },
  ] as const;

  return (
    <>
      <nav aria-label={locale === 'pl' ? 'Główna' : 'Main'} id="nav">
        <div className="in">
          <a className="logo" href={locale === 'pl' ? '/' : '/en/'}>
            Web Urban<span>.</span>
          </a>
          <a className="pill sm" href="#brief">
            {t.navCta}
          </a>
        </div>
      </nav>

      <main>
        <header className="hero">
          <div className="in">
            <span className="eyebrow fade">{t.heroKicker}</span>
            <h1 aria-label={t.heroTitle}>
              <span aria-hidden="true">
                {words.map((w, i) => (
                  <span key={i}>
                    <span className="w" style={{ '--i': i } as React.CSSProperties}>
                      {w}
                    </span>
                    {i < words.length - 1 ? ' ' : ''}
                  </span>
                ))}
              </span>
            </h1>
            <p className="sub fade" style={{ '--d': '450ms' } as React.CSSProperties}>
              {t.heroSub}
            </p>
            <div className="cta-row fade" style={{ '--d': '600ms' } as React.CSSProperties}>
              <a className="pill" href="#brief">
                {t.cta} <Arrow />
              </a>
            </div>
          </div>
        </header>

        <div className="stage" id="stage">
          <div className="sticky">
            <div className="in">
              <div className="frame-wrap" id="frameWrap">
                <div className="frame">
                  <div className="bar">
                    <i />
                    <i />
                    <i />
                    <span>{genz.host}</span>
                  </div>
                  <div className="view" id="heroView">
                    <video
                      id="heroVid"
                      muted
                      playsInline
                      loop
                      autoPlay
                      preload="auto"
                      poster="/work/genz-poster.jpg"
                      aria-label={t.heroPreviewAlt}
                    >
                      <source src="/work/genz-loop.webm" type="video/webm" />
                      <source src="/work/genz-loop.mp4" type="video/mp4" />
                    </video>
                    <canvas id="heroSeq" width={1120} height={700} aria-hidden="true" />
                  </div>
                </div>
              </div>
              <p className="caption small">
                {genz.name} · <span className="hint">{t.heroHint}</span>
              </p>
            </div>
          </div>
        </div>

        <section className="block" id="brief">
          <div className="in">
            <div className="head reveal">
              <h2>{t.formTitle}</h2>
              <p>{t.formSub}</p>
            </div>
            <BriefForm t={t} />
          </div>
        </section>

        <section className="block alt" id="work">
          <div className="in">
            <div className="head reveal">
              <h2>{t.workTitle}</h2>
              <p>{t.workSub}</p>
            </div>
            <div className="work">
              {t.cases.map((c) => (
                <Case key={c.name} c={c} t={t} />
              ))}
            </div>
          </div>
        </section>

        <section className="block" id="steps-section">
          <div className="in">
            <div className="head reveal">
              <h2>{t.stepsTitle}</h2>
              <p>{t.stepsSub}</p>
            </div>
            <ol className="steps" id="steps">
              {t.steps.map((s, i) => (
                <li className="step" key={s.title}>
                  <b>{i + 1}</b>
                  <div className="card">
                    <span className="kick">{s.kick}</span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="block alt" id="about">
          <div className="in about">
            <div className="mono reveal" aria-hidden="true">
              <span>WU</span>
            </div>
            <div className="txt reveal" style={{ '--d': '120ms' } as React.CSSProperties}>
              <span className="eyebrow">{t.aboutKicker}</span>
              <h2>{t.aboutTitle}</h2>
              <p className="lead">{t.aboutLead}</p>
              <p>{t.aboutBody}</p>
              <ul className="facts">
                {t.facts.map((f) => (
                  <li key={f.title}>
                    <div>
                      <b>{f.title}</b>
                      <span>{f.body}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="block" id="prices">
          <div className="in">
            <div className="head reveal">
              <h2>{t.pricesTitle}</h2>
              <p>{t.pricesSub}</p>
            </div>
            <div className="prices">
              {t.prices.map((p, i) => (
                <div
                  key={p.name}
                  className={`price reveal${p.popular ? ' pop' : ''}`}
                  style={{ '--d': `${i * 120}ms` } as React.CSSProperties}
                  data-popular={p.popular ? t.popular : undefined}
                >
                  <h3>{p.name}</h3>
                  <span className="amt">
                    {p.from && <small>{p.from}</small>} {p.amount}
                  </span>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
            <div className="faq reveal">
              {t.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="block alt final">
          <div className="in reveal">
            <h2>{t.finalTitle}</h2>
            <a className="pill" href="#brief">
              {t.cta} <Arrow />
            </a>
          </div>
        </section>

        <section className="block" id="social">
          <div className="in">
            <div className="head reveal">
              <h2>{t.socialTitle}</h2>
              <p>{t.socialSub}</p>
            </div>
            <div className="socials">
              {socials.map((s, i) => (
                <a
                  key={s.key}
                  className="soc reveal"
                  href={s.href}
                  style={{ '--d': `${i * 80}ms` } as React.CSSProperties}
                >
                  {Icons[s.key]}
                  <b>{s.name}</b>
                  <span>
                    {s.sub} <i aria-hidden="true">↗</i>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="in small">
          <span>© Web Urban</span>
          <span className="foot-soc">
            {socials.map((s) => (
              <a key={s.key} href={s.href}>
                {s.name}
              </a>
            ))}
          </span>
          <nav className="lang" aria-label="Language">
            {/* Zwykłe <a>, nie <Link> — / i /en mają osobne root layouty (pełny reload) */}
            <a href="/" aria-current={locale === 'pl' ? 'page' : undefined}>
              PL
            </a>
            <span aria-hidden="true">/</span>
            <a href="/en/" aria-current={locale === 'en' ? 'page' : undefined}>
              EN
            </a>
          </nav>
        </div>
      </footer>

      <div className="dock" id="dock">
        <a className="pill" href="#brief">
          {t.cta} <Arrow />
        </a>
      </div>

      <Effects />
    </>
  );
}
