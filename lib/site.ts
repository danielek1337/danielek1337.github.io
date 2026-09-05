// Docelowo: domena Web Urban — podmienić po podpięciu.
export const SITE_URL = 'https://danielek1337.github.io';

// Pomost do czasu domeny (potem: CF Pages Function + Resend).
// Utwórz formularz na formspree.io i wklej tu swój endpoint.
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

/*
 * Strona klienta osadzona na żywo w hero.
 *
 * UWAGA: osadzenie działa tylko wtedy, gdy serwer danej strony na to pozwala.
 * www.generationzagency.com zwraca dziś `x-frame-options: SAMEORIGIN`, więc
 * przeglądarka odmówi wyświetlenia jej w ramce. Żeby przełączyć hero na GZA,
 * trzeba najpierw dodać po jej stronie nagłówek:
 *
 *   Content-Security-Policy: frame-ancestors 'self' https://danielek1337.github.io
 *
 * (`frame-ancestors` ma pierwszeństwo przed X-Frame-Options, więc samo dodanie
 * CSP wystarczy — starego nagłówka nie trzeba usuwać.)
 * Po tej zmianie wystarczy podmienić dwie linijki poniżej.
 */
export const HERO_PREVIEW = {
  url: 'https://adriannaurbantattoos.com',
  host: 'adriannaurbantattoos.com',
};
