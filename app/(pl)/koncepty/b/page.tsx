/* eslint-disable @next/next/no-img-element -- static export, screenshots are pre-sized JPEGs */
import type { Metadata } from 'next';
import BriefForm from '@/components/BriefForm';
import ConceptEffects from '@/components/koncepty/ConceptEffects';
import Switcher from '@/components/koncepty/Switcher';
import { dictionaries } from '@/lib/i18n';
import { SOCIALS } from '@/lib/site';
import './koncept-b.css';

export const metadata: Metadata = {
  title: 'Koncept B — Web Urban',
  robots: { index: false, follow: false },
};

const t = dictionaries.pl;
const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties;

/*
 * Koncept B: "editorial chapters". Oversized left-aligned headline, a wide
 * preview, then numbered chapters with a sticky index on the left (a chip bar
 * on phones): projects, process, about, prices as a list, brief. Ends with a
 * big running CTA.
 */
export default function KonceptB() {
  const [genz, tattoo] = t.cases;
  const chapters = [
    { id: 'work', label: 'Realizacje' },
    { id: 'process', label: 'Proces' },
    { id: 'about', label: 'O mnie' },
    { id: 'prices', label: 'Ceny' },
    { id: 'brief', label: 'Brief' },
  ];
  const num = (id: string) => String(chapters.findIndex((c) => c.id === id) + 1).padStart(2, '0');
  const words = t.heroTitle.split(' ');

  return (
    <div className="kb">
      <nav id="knav" className="kb-nav" aria-label="Główna">
        <div className="in">
          <a className="logo" href="/koncepty/b/">
            Web Urban<span>.</span>
          </a>
          <a className="kb-navlink" href="#brief">
            {t.navCta} <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>

      <main>
        <header className="kb-hero">
          <div className="in">
            <span className="kb-kicker fade">
              <i aria-hidden="true" /> {t.heroKicker}
            </span>
            <h1 aria-label={t.heroTitle}>
              <span aria-hidden="true">
                {words.map((w, i) => (
                  <span key={i}>
                    <span className={`w${i === words.length - 1 ? ' hl' : ''}`} style={{ '--i': i } as React.CSSProperties}>
                      {w}
                    </span>
                    {i < words.length - 1 ? ' ' : ''}
                  </span>
                ))}
              </span>
            </h1>
            <div className="kb-hero-foot fade" style={d(500)}>
              <p>{t.heroSub}</p>
              <a className="pill" href="#brief">
                {t.cta} <span className="arr" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </header>

        <div className="kb-preview fade" style={d(650)}>
          <div className="kb-preview-in">
            <video
              data-autoplay
              muted
              playsInline
              loop
              preload="none"
              poster="/work/genz-poster.jpg"
              aria-label={t.heroPreviewAlt}
            >
              <source src="/work/genz-preview.webm" type="video/webm" />
              <source src="/work/genz-preview.mp4" type="video/mp4" />
            </video>
            <a className="kb-preview-tag" href={genz.url} target="_blank" rel="noopener noreferrer">
              {genz.name} <i aria-hidden="true">↗</i>
            </a>
          </div>
        </div>

        <div className="in kb-body">
          <aside className="kb-side">
            <ol className="k-toc">
              {chapters.map((c, i) => (
                <li key={c.id}>
                  <a href={`#${c.id}`}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {c.label}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="kb-main">
            <section className="kb-ch" id="work" data-chapter>
              <header className="kb-ch-head reveal">
                <span className="kb-num">{num('work')}</span>
                <h2>{t.workTitle}</h2>
                <p>{t.workSub}</p>
              </header>
              {[genz, tattoo].map((c, i) => (
                <article key={c.name} className="kb-case k-pan-host reveal">
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
                  <div className="kb-case-meta">
                    <div>
                      <span className="kb-case-i">{`0${i + 1}`}</span>
                      <h3>{c.name}</h3>
                      <span className="tag">{c.tag}</span>
                    </div>
                    <div>
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
                  </div>
                </article>
              ))}
            </section>

            <section className="kb-ch" id="process" data-chapter>
              <header className="kb-ch-head reveal">
                <span className="kb-num">{num('process')}</span>
                <h2>{t.stepsTitle}</h2>
                <p>{t.stepsSub}</p>
              </header>
              <ol className="kb-steps">
                {t.steps.map((s, i) => (
                  <li key={s.title} className="reveal" style={d(i * 120)}>
                    <b aria-hidden="true">{i + 1}</b>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="kb-ch" id="about" data-chapter>
              <header className="kb-ch-head reveal">
                <span className="kb-num">{num('about')}</span>
                <h2>{t.aboutTitle}</h2>
              </header>
              <blockquote className="kb-quote reveal">
                <p>{t.aboutLead}</p>
                <footer>
                  <span className="kb-mono" aria-hidden="true">
                    WU
                  </span>
                  <span>
                    <b>Web Urban</b>
                    <span>
                      <a href={SOCIALS.linkedin.href}>LinkedIn</a> · <a href={SOCIALS.github.href}>GitHub</a>
                    </span>
                  </span>
                </footer>
              </blockquote>
              <p className="kb-about-body reveal">{t.aboutBody}</p>
              <ul className="kb-facts">
                {t.facts.map((f, i) => (
                  <li key={f.title} className="reveal" style={d(i * 100)}>
                    <b>{f.title}</b>
                    <span>{f.body}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="kb-ch" id="prices" data-chapter>
              <header className="kb-ch-head reveal">
                <span className="kb-num">{num('prices')}</span>
                <h2>{t.pricesTitle}</h2>
                <p>{t.pricesSub}</p>
              </header>
              <ul className="kb-prices">
                {t.prices.map((p, i) => (
                  <li key={p.name} className={`reveal${p.popular ? ' pop' : ''}`} style={d(i * 100)}>
                    <h3>
                      {p.name}
                      {p.popular && <em>Polecana</em>}
                    </h3>
                    <p>{p.body}</p>
                    <span className="amt">
                      {p.from && <small>{p.from}</small>} {p.amount}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="kb-faq">
                {t.faq.map((f) => (
                  <details key={f.q} className="reveal">
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="kb-ch" id="brief" data-chapter>
              <header className="kb-ch-head reveal">
                <span className="kb-num">{num('brief')}</span>
                <h2>{t.formTitle}</h2>
                <p>{t.formSub}</p>
              </header>
              <BriefForm t={t} />
            </section>
          </div>
        </div>

        <a className="kb-final" href="#brief" aria-label={t.cta}>
          <span className="kb-final-track" aria-hidden="true">
            {Array.from({ length: 6 }, (_, i) => (
              <span key={i}>
                {t.finalTitle} <i>→</i>
              </span>
            ))}
          </span>
        </a>
      </main>

      <footer className="kb-foot">
        <div className="in small">
          <span>© Web Urban</span>
          <span>
            <a href={SOCIALS.linkedin.href}>LinkedIn</a> · <a href={SOCIALS.github.href}>GitHub</a>
          </span>
        </div>
      </footer>

      <Switcher current="b" />
      <ConceptEffects />
    </div>
  );
}
