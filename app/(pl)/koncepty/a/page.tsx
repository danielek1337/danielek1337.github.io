/* eslint-disable @next/next/no-img-element -- static export, screenshots are pre-sized JPEGs */
import type { Metadata } from 'next';
import BriefForm from '@/components/BriefForm';
import ConceptEffects from '@/components/koncepty/ConceptEffects';
import Switcher from '@/components/koncepty/Switcher';
import { dictionaries } from '@/lib/i18n';
import { SOCIALS } from '@/lib/site';
import './koncept-a.css';

export const metadata: Metadata = {
  title: 'Koncept A — Web Urban',
  robots: { index: false, follow: false },
};

const t = dictionaries.pl;
const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties;

/*
 * Koncept A: "split + bento". Hero in two columns (copy left, live preview
 * right), a strip of what I build, projects in a bento grid, a horizontal
 * process line, about + prices as tiles, and the brief on a dark band with
 * the FAQ beside it.
 */
export default function KonceptA() {
  const [genz, tattoo] = t.cases;
  const strip = ['Wizytówki', 'Strony firmowe', 'Panel do edycji', 'Galerie', 'Rezerwacje', 'Wersja na telefon'];

  return (
    <div className="ka">
      <nav id="knav" className="ka-nav" aria-label="Główna">
        <div className="in">
          <a className="logo" href="/koncepty/a/">
            Web Urban<span>.</span>
          </a>
          <div className="ka-links">
            <a href="#work">Realizacje</a>
            <a href="#process">Jak pracuję</a>
            <a href="#prices">Ceny</a>
          </div>
          <a className="pill sm" href="#brief">
            {t.navCta}
          </a>
        </div>
      </nav>

      <main>
        <header className="ka-hero">
          <div className="in">
            <div className="ka-copy">
              <span className="eyebrow fade">{t.heroKicker}</span>
              <h1 className="fade" style={d(80)}>
                {t.heroTitle}
              </h1>
              <p className="sub fade" style={d(200)}>
                {t.heroSub}
              </p>
              <div className="ka-cta fade" style={d(320)}>
                <a className="pill" href="#brief">
                  {t.cta} <span className="arr" aria-hidden="true">→</span>
                </a>
                <a className="link" href="#work">
                  Zobacz realizacje <span aria-hidden="true">↓</span>
                </a>
              </div>
              <ul className="ka-ticks fade" style={d(440)}>
                {t.facts.map((f) => (
                  <li key={f.title}>{f.title}</li>
                ))}
              </ul>
            </div>
            <div className="ka-visual fade" style={d(250)}>
              <div className="ka-glow" aria-hidden="true" />
              <div className="ka-frame">
                <div className="bar">
                  <i />
                  <i />
                  <i />
                  <span>{genz.host}</span>
                </div>
                <div className="ka-screen">
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
                </div>
              </div>
              <div className="ka-float">
                <b>Zmiana tekstu</b>
                <span>online w kilka minut</span>
              </div>
            </div>
          </div>
        </header>

        <div className="ka-strip" aria-hidden="true">
          <div className="ka-strip-track">
            {[...strip, ...strip].map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>

        <section className="ka-sec" id="work">
          <div className="in">
            <div className="ka-head reveal">
              <h2>{t.workTitle}</h2>
              <p>{t.workSub}</p>
            </div>
            <div className="ka-bento">
              {[genz, tattoo].map((c, i) => (
                <article key={c.name} className={`ka-tile ka-case k-pan-host reveal${i === 0 ? ' wide' : ' tall'}`} style={d(i * 120)}>
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
                  <div className="ka-case-txt">
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
              ))}
              <div className="ka-tile ka-stat reveal" style={d(200)}>
                <b>1 dzień</b>
                <span>na odpowiedź z wyceną po wysłaniu briefu</span>
              </div>
              <div className="ka-tile ka-stat accent reveal" style={d(280)}>
                <b>0 pośredników</b>
                <span>rozmawiasz bezpośrednio z osobą, która projektuje i koduje</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ka-sec alt" id="process">
          <div className="in">
            <div className="ka-head reveal">
              <h2>{t.stepsTitle}</h2>
              <p>{t.stepsSub}</p>
            </div>
            <ol className="ka-line">
              {t.steps.map((s, i) => (
                <li key={s.title} className="reveal" style={d(i * 140)}>
                  <b>{String(i + 1).padStart(2, '0')}</b>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ka-sec" id="prices">
          <div className="in ka-grid">
            <div className="ka-tile ka-about reveal">
              <div className="ka-mono" aria-hidden="true">
                WU
              </div>
              <span className="eyebrow">{t.aboutKicker}</span>
              <h2>{t.aboutTitle}</h2>
              <p>{t.aboutLead}</p>
              <p className="muted">{t.aboutBody}</p>
              <div className="ka-soc">
                <a href={SOCIALS.linkedin.href}>LinkedIn ↗</a>
                <a href={SOCIALS.github.href}>GitHub ↗</a>
              </div>
            </div>
            <div className="ka-prices">
              <div className="ka-head left reveal">
                <h2>{t.pricesTitle}</h2>
                <p>{t.pricesSub}</p>
              </div>
              {t.prices.map((p, i) => (
                <div key={p.name} className={`ka-tile ka-price reveal${p.popular ? ' pop' : ''}`} style={d(i * 100)}>
                  <div>
                    <h3>
                      {p.name}
                      {p.popular && <em>Najczęściej wybierana</em>}
                    </h3>
                    <p>{p.body}</p>
                  </div>
                  <span className="amt">
                    {p.from && <small>{p.from}</small>} {p.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ka-brief" id="brief">
          <div className="in">
            <div className="ka-brief-side reveal">
              <span className="eyebrow">Brief</span>
              <h2>{t.formTitle}</h2>
              <p>{t.formSub}</p>
              <div className="faq">
                {t.faq.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
            <BriefForm t={t} />
          </div>
        </section>
      </main>

      <footer className="ka-foot">
        <div className="in small">
          <span>© Web Urban</span>
          <span>{t.finalTitle}</span>
        </div>
      </footer>

      <Switcher current="a" />
      <ConceptEffects />
    </div>
  );
}
