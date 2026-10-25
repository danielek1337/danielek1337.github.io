# TODO

Rzeczy do uzupełnienia na stronie (strona już działa z wartościami zastępczymi).

- [ ] **Ceny** — wizytówka ustalona (500–1500 zł, z formularzem bliżej górnej granicy). „Strona firmowa” na razie pokazuje „Wycena”; wpisać widełki w `lib/i18n.ts` (`prices`, PL i EN), gdy będą ustalone.
- [ ] **Social media** — podmienić linki `#` i nazwy kont w `lib/site.ts` (`SOCIALS`).
- [x] **Formularz briefu** — podpięty pod Formspree (`FORMSPREE_ENDPOINT` w `lib/site.ts`, darmowy plan). Przy problemach z limitem: płatny plan albo Web3Forms.
- [ ] **Sekcja „O mnie”** — dopracować tekst (imię, kilka zdań o sobie) w `lib/i18n.ts`; zdjęcie dodać, gdy będzie.
- [x] **Galeria tatuaży w zrzucie** — pełny zrzut z galerią i stopką jest w `public/work/tattoo-page.jpg`.
- [ ] **Domena** — kupić **weburban.dev**. Po podpięciu zmienić `SITE_URL` w `lib/site.ts` na `https://weburban.dev`. Wtedy też w ustawieniach formularza na Formspree włączyć „Restrict to domain” na nową domenę, żeby zgłoszenia przychodziły tylko z tej strony.
