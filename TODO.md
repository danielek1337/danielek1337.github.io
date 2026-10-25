# TODO

Rzeczy do uzupełnienia na stronie (strona już działa z wartościami zastępczymi).

- [ ] **Ceny** — wpisać kwoty pakietów zamiast `… zł` / `PLN …` w `lib/i18n.ts` (`prices`, PL i EN).
- [ ] **Social media** — podmienić linki `#` i nazwy kont w `lib/site.ts` (`SOCIALS`).
- [x] **Formularz briefu** — podpięty pod Formspree (`FORMSPREE_ENDPOINT` w `lib/site.ts`, darmowy plan). Przy problemach z limitem: płatny plan albo Web3Forms.
- [ ] **Sekcja „O mnie”** — dopracować tekst (imię, kilka zdań o sobie) w `lib/i18n.ts`; zdjęcie dodać, gdy będzie.
- [x] **Galeria tatuaży w zrzucie** — pełny zrzut z galerią i stopką jest w `public/work/tattoo-page.jpg`.
- [ ] **Domena** — kupić **weburban.dev**. Po podpięciu zmienić `SITE_URL` w `lib/site.ts` na `https://weburban.dev`. Wtedy też w ustawieniach formularza na Formspree włączyć „Restrict to domain” na nową domenę, żeby zgłoszenia przychodziły tylko z tej strony.
