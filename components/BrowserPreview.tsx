import type { Dict } from '@/lib/i18n';

/*
 * Dekoracyjny mockup przeglądarki z animowanym skeletonem strony klienta.
 * Skeleton to jednorazowa grafika — style trzymamy inline zamiast mnożyć klasy.
 */
export default function BrowserPreview({ t }: { t: Dict }) {
  return (
    <div className="preview-float">
      <div className="preview-head">
        <div className="preview-label">{t.previewLabel}</div>
        <div className="preview-live">
          <span className="preview-live-dot">●</span> {t.live}
        </div>
      </div>
      <div className="browser">
        <div className="browser-bar">
          <div className="browser-dots">
            <div className="browser-dot" />
            <div className="browser-dot" />
            <div className="browser-dot" />
          </div>
          <div className="browser-url">generationzagency.com</div>
        </div>
        <div className="preview-viewport">
          <div className="preview-scroll">
            <div style={{ height: 46, background: 'var(--mock-dark)', display: 'flex', alignItems: 'center', gap: 9, padding: '0 16px' }}>
              <div style={{ width: 19, height: 19, borderRadius: 6, background: 'var(--mock-accent)' }} />
              <div style={{ flex: 1 }} />
              <div style={{ width: 44, height: 8, borderRadius: 4, background: '#3a4440' }} />
              <div style={{ width: 34, height: 8, borderRadius: 4, background: '#3a4440' }} />
              <div style={{ width: 58, height: 20, borderRadius: 10, background: 'var(--mock-accent)' }} />
            </div>
            <div style={{ background: 'var(--mock-dark)', padding: '38px 22px 42px' }}>
              <div style={{ width: '55%', height: 13, borderRadius: 3, background: '#333d38', marginBottom: 13 }} />
              <div style={{ width: '88%', height: 21, borderRadius: 3, background: '#e8ebe6', marginBottom: 10 }} />
              <div style={{ width: '68%', height: 21, borderRadius: 3, background: '#e8ebe6', marginBottom: 24 }} />
              <div style={{ width: 150, height: 40, borderRadius: 8, background: 'var(--mock-accent)' }} />
            </div>
            <div style={{ padding: 22, display: 'flex', gap: 12 }}>
              <div style={{ flex: 1, height: 110, borderRadius: 10, background: '#ecefea' }} />
              <div style={{ flex: 1, height: 110, borderRadius: 10, background: '#ecefea' }} />
              <div style={{ flex: 1, height: 110, borderRadius: 10, background: '#ecefea' }} />
            </div>
            <div style={{ padding: '0 22px 24px' }}>
              <div style={{ width: '45%', height: 10, borderRadius: 3, background: '#d6dad4', marginBottom: 16 }} />
              <div style={{ height: 150, borderRadius: 10, background: '#e5e9e3', marginBottom: 18 }} />
              <div style={{ width: '90%', height: 9, borderRadius: 3, background: '#dde1da', marginBottom: 10 }} />
              <div style={{ width: '80%', height: 9, borderRadius: 3, background: '#dde1da', marginBottom: 10 }} />
              <div style={{ width: '85%', height: 9, borderRadius: 3, background: '#dde1da' }} />
            </div>
            <div style={{ height: 140, background: 'var(--mock-dark)', display: 'flex', alignItems: 'center', padding: '0 22px' }}>
              <div style={{ width: '30%', height: 10, borderRadius: 3, background: '#333d38' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
