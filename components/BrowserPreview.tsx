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
            <div style={{ height: 46, background: '#15161a', display: 'flex', alignItems: 'center', gap: 9, padding: '0 16px' }}>
              <div style={{ width: 19, height: 19, borderRadius: 6, background: '#C9F24D' }} />
              <div style={{ flex: 1 }} />
              <div style={{ width: 44, height: 8, borderRadius: 4, background: '#3a3c44' }} />
              <div style={{ width: 34, height: 8, borderRadius: 4, background: '#3a3c44' }} />
              <div style={{ width: 58, height: 20, borderRadius: 10, background: '#C9F24D' }} />
            </div>
            <div style={{ background: '#0d0e11', padding: '38px 22px 42px' }}>
              <div style={{ width: '55%', height: 13, borderRadius: 3, background: '#33353d', marginBottom: 13 }} />
              <div style={{ width: '88%', height: 21, borderRadius: 3, background: '#e8e8e5', marginBottom: 10 }} />
              <div style={{ width: '68%', height: 21, borderRadius: 3, background: '#e8e8e5', marginBottom: 24 }} />
              <div style={{ width: 150, height: 40, borderRadius: 8, background: '#C9F24D' }} />
            </div>
            <div style={{ padding: 22, display: 'flex', gap: 12 }}>
              <div style={{ flex: 1, height: 110, borderRadius: 10, background: '#ededea' }} />
              <div style={{ flex: 1, height: 110, borderRadius: 10, background: '#ededea' }} />
              <div style={{ flex: 1, height: 110, borderRadius: 10, background: '#ededea' }} />
            </div>
            <div style={{ padding: '0 22px 24px' }}>
              <div style={{ width: '45%', height: 10, borderRadius: 3, background: '#d7d7d3', marginBottom: 16 }} />
              <div style={{ height: 150, borderRadius: 10, background: '#e6e6e2', marginBottom: 18 }} />
              <div style={{ width: '90%', height: 9, borderRadius: 3, background: '#dededa', marginBottom: 10 }} />
              <div style={{ width: '80%', height: 9, borderRadius: 3, background: '#dededa', marginBottom: 10 }} />
              <div style={{ width: '85%', height: 9, borderRadius: 3, background: '#dededa' }} />
            </div>
            <div style={{ height: 140, background: '#15161a', display: 'flex', alignItems: 'center', padding: '0 22px' }}>
              <div style={{ width: '30%', height: 10, borderRadius: 3, background: '#33353d' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
