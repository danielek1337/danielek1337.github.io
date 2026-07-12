# Web Urban

Strona portfolio/kontakt dla klientów — wizytówka linkowana ze stopek stron klienckich.
Docelowa domena: `web-urban.com` (do podpięcia), hosting docelowy: Cloudflare Pages.

Poprzednie portfolio developerskie: branch `archive/old-portfolio` / tag `v1-old-portfolio`.

## Stack

- Next.js (App Router, static export)
- TypeScript
- Wersje językowe: `/` (PL) i `/en` (EN)
- Formularz briefu: Formspree (pomost — docelowo CF Pages Function + Resend po podpięciu domeny)

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # static export do out/
```

## Konfiguracja

`lib/site.ts`:

- `SITE_URL` — po podpięciu domeny zmienić na `https://web-urban.com`
- `FORMSPREE_ENDPOINT` — wkleić ID formularza z formspree.io (bez tego wysyłka briefu nie działa)
