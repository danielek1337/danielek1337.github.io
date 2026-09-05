import type { Dict } from '@/lib/i18n';
import { HERO_PREVIEW } from '@/lib/site';

/*
 * Ramka przeglądarki z żywą stroną klienta osadzoną w iframe.
 *
 * Skalowanie bez JS: iframe dostaje width:400% i scale(.25) z origin w lewym
 * górnym rogu, więc renderuje się przy czterokrotności szerokości kontenera
 * (czyli w układzie desktopowym, nie mobilnym), a wyświetla dokładnie na
 * szerokość kontenera — niezależnie od tego, ile jej akurat jest.
 *
 * iframe ma pointer-events:none, żeby kliknięcie trafiało w otaczający link,
 * a scroll nie zapadał się w cudzą stronę.
 */
export default function BrowserPreview({ t }: { t: Dict }) {
  return (
    <div className="preview-float">
      <div className="preview-head">
        <div className="preview-label">{t.previewLabel}</div>
        <span className="preview-domain">{HERO_PREVIEW.host}</span>
      </div>
      <a
        className="browser"
        href={HERO_PREVIEW.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.previewOpen}
      >
        <div className="browser-bar">
          <div className="browser-dots">
            <div className="browser-dot" />
            <div className="browser-dot" />
            <div className="browser-dot" />
          </div>
          <div className="browser-url">{HERO_PREVIEW.host}</div>
        </div>
        <div className="preview-viewport">
          <div className="preview-scroll">
            <iframe
              className="preview-frame"
              src={HERO_PREVIEW.url}
              title={t.previewLabel}
              tabIndex={-1}
              aria-hidden="true"
              sandbox="allow-scripts allow-same-origin"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </a>
    </div>
  );
}
