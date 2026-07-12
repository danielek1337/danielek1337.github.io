'use client';

import { useState } from 'react';
import type { Dict } from '@/lib/i18n';
import { FORMSPREE_ENDPOINT } from '@/lib/site';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function BriefForm({ t }: { t: Dict }) {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get('_gotcha')) {
      setStatus('ok');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('ok');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'ok') {
    return (
      <div className="success">
        <div className="success-title">{t.successTitle}</div>
        <div className="success-body">{t.successBody}</div>
      </div>
    );
  }

  return (
    <form className="brief-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="honeypot"
        aria-hidden="true"
      />
      <label className="field">
        <span className="field-lbl">{t.fBusiness}</span>
        <input type="text" name="business" required />
      </label>
      <div className="form-row">
        <label className="field">
          <span className="field-lbl">{t.fScope}</span>
          <select name="scope" defaultValue="">
            <option value="">{t.choose}</option>
            {t.scopeOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </label>
        <label className="field">
          <span className="field-lbl">{t.fTimeline}</span>
          <select name="timeline" defaultValue="">
            <option value="">{t.choose}</option>
            {t.timelineOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="form-row">
        <label className="field">
          <span className="field-lbl">{t.fName}</span>
          <input type="text" name="name" />
        </label>
        <label className="field">
          <span className="field-lbl">{t.fEmail}</span>
          <input type="email" name="email" required />
        </label>
      </div>
      <label className="field">
        <span className="field-lbl">{t.fSite}</span>
        <input type="text" name="current_site" />
      </label>
      <label className="field">
        <span className="field-lbl">{t.fDetails}</span>
        <textarea name="details" rows={3} />
      </label>
      {status === 'error' && <p className="form-error">{t.errorBody}</p>}
      <button type="submit" className="submit-btn" disabled={status === 'sending'}>
        {status === 'sending' ? t.sending : t.submit}
      </button>
    </form>
  );
}
