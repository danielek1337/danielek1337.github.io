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
      <div className="brief-form">
        <div className="ok" role="status">
          <b>{t.successTitle}</b>
          <span className="small">{t.successBody}</span>
        </div>
      </div>
    );
  }

  return (
    <form className="brief-form reveal" onSubmit={handleSubmit}>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="honeypot" aria-hidden="true" />
      <label>
        {t.fBusiness}
        <input type="text" name="business" required />
      </label>
      <div className="row2">
        <label>
          {t.fScope}
          <select name="scope" defaultValue="">
            <option value="">{t.choose}</option>
            {t.scopeOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </label>
        <label>
          {t.fTimeline}
          <select name="timeline" defaultValue="">
            <option value="">{t.choose}</option>
            {t.timelineOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="row2">
        <label>
          {t.fName}
          <input type="text" name="name" autoComplete="given-name" />
        </label>
        <label>
          {t.fEmail}
          <input type="email" name="email" required autoComplete="email" placeholder={t.fEmailPh} />
        </label>
      </div>
      <label>
        {t.fSite}
        <input type="text" name="current_site" placeholder={t.fSitePh} />
      </label>
      <label>
        {t.fDetails}
        <textarea name="details" rows={3} />
      </label>
      {status === 'error' && (
        <p className="form-error" role="alert">
          {t.errorBody}
        </p>
      )}
      <button type="submit" className="pill" disabled={status === 'sending'}>
        {status === 'sending' ? (
          t.sending
        ) : (
          <>
            {t.submit} <span className="arr" aria-hidden="true">→</span>
          </>
        )}
      </button>
    </form>
  );
}
