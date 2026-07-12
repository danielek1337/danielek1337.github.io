import BriefForm from '@/components/BriefForm';
import BrowserPreview from '@/components/BrowserPreview';
import Reveal from '@/components/Reveal';
import { dictionaries, type CaseStudy, type Dict, type Locale } from '@/lib/i18n';

function CaseCard({ c, t }: { c: CaseStudy; t: Dict }) {
  return (
    <div className="case">
      <div className="case-name">{c.name}</div>
      <div className="case-tag">{c.tag}</div>
      <p className="case-line">
        <span className="case-lbl">{t.lblProblem} · </span>
        {c.problem}
      </p>
      <p className="case-line">
        <span className="case-lbl">{t.lblAction} · </span>
        {c.action}
      </p>
      <div className="case-result">
        <p>
          <span className="case-result-lbl">{t.lblResult} · </span>
          {c.result}
        </p>
      </div>
      <div className="case-stack">
        {c.stack.map((s) => (
          <span key={s} className="stack-chip">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Landing({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <>
      <header className="container header">
        <a className="brand" href={locale === 'pl' ? '/' : '/en/'}>
          Web Urban
        </a>
        <div className="header-right">
          <div className="badge">
            <span className="badge-dot" />
            {t.ctaSub}
          </div>
          <nav className="lang-switch" aria-label="Language">
            {/* Zwykłe <a>, nie <Link> — / i /en mają osobne root layouty (pełny reload) */}
            <a className={`lang-btn ${locale === 'pl' ? 'active' : ''}`} href="/">
              PL
            </a>
            <a className={`lang-btn ${locale === 'en' ? 'active' : ''}`} href="/en/">
              EN
            </a>
          </nav>
        </div>
      </header>

      <main>
        <div className="container">
          <section className="hero">
            <div>
              <div className="kicker">{t.heroKicker}</div>
              <h1>{t.heroTitle}</h1>
              <p className="hero-sub">{t.heroSub}</p>
              <a className="cta" href="#brief">
                {t.cta} <span aria-hidden="true">→</span>
              </a>
              <div className="cta-note">{t.ctaSub}</div>
            </div>
            <BrowserPreview t={t} />
          </section>
        </div>

        <Reveal className="container trust-wrap">
          <div className="trust">{t.trust}</div>
        </Reveal>

        <Reveal className="container work-wrap">
          <div className="section-kicker">{t.workKicker}</div>
          <div className="case-grid">
            <CaseCard c={t.cases[0]} t={t} />
            <CaseCard c={t.cases[1]} t={t} />
          </div>
        </Reveal>

        <Reveal className="container brief-wrap">
          <section id="brief" className="brief">
            <div>
              <h2>{t.formTitle}</h2>
              <p className="brief-sub">{t.formSub}</p>
            </div>
            <div className="form-card">
              <BriefForm t={t} />
            </div>
          </section>
        </Reveal>
      </main>

      <footer className="container footer">
        <span>{t.footer} — Web Urban</span>
        <span className="heart">♥</span>
      </footer>
    </>
  );
}
