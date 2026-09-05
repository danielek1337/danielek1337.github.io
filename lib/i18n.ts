export type Locale = 'pl' | 'en';

export interface CaseStudy {
  tag: string;
  name: string;
  url: string;
  problem: string;
  action: string;
  result: string;
  stack: string[];
}

export interface Dict {
  heroKicker: string;
  heroTitle: string;
  heroSub: string;
  cta: string;
  ctaSub: string;
  trust: string;
  previewLabel: string;
  previewOpen: string;
  workKicker: string;
  lblProblem: string;
  lblAction: string;
  lblResult: string;
  formTitle: string;
  formSub: string;
  choose: string;
  fBusiness: string;
  fScope: string;
  fTimeline: string;
  fSite: string;
  fName: string;
  fEmail: string;
  fDetails: string;
  scopeOptions: string[];
  timelineOptions: string[];
  submit: string;
  sending: string;
  successTitle: string;
  successBody: string;
  errorBody: string;
  footer: string;
  cases: [CaseStudy, CaseStudy];
}

export const dictionaries: Record<Locale, Dict> = {
  pl: {
    heroKicker: 'Strony dla firm',
    heroTitle: 'Strona, która pracuje na Twój biznes.',
    heroSub:
      'Projektuję, koduję i podpinam pod CMS strony dla małych firm. Szybkie, łatwe w obsłudze, zrobione pod jeden cel — żeby przynosiły klientów.',
    cta: 'Wyceń projekt',
    ctaSub: 'Odpowiedź w 1 dzień roboczy',
    trust:
      'Jeden wykonawca — od projektu po wdrożenie. Bez agencyjnego narzutu i bez znikania po starcie.',
    previewLabel: 'Na żywo — strona klienta',
    previewOpen: 'Otwórz stronę klienta w nowej karcie',
    workKicker: 'Realizacje',
    lblProblem: 'Problem',
    lblAction: 'Co zrobiłem',
    lblResult: 'Efekt',
    formTitle: 'Opowiedz o projekcie.',
    formSub: 'Wypełnij krótki brief — wrócę z wyceną i propozycją kolejnych kroków.',
    choose: '— wybierz —',
    fBusiness: 'Czym zajmuje się Twój biznes?',
    fScope: 'Zakres',
    fTimeline: 'Termin',
    fSite: 'Masz obecną stronę? (link)',
    fName: 'Imię',
    fEmail: 'Email',
    fDetails: 'Coś jeszcze, co powinienem wiedzieć?',
    scopeOptions: ['Nowa strona', 'Redesign', 'Poprawki / utrzymanie', 'Jeszcze nie wiem'],
    timelineOptions: ['Jak najszybciej', '1–3 miesiące', 'Elastycznie'],
    submit: 'Wyślij brief',
    sending: 'Wysyłanie…',
    successTitle: 'Dziękuję — brief poszedł.',
    successBody: 'Odezwę się na maila w ciągu 1 dnia roboczego.',
    errorBody: 'Coś poszło nie tak przy wysyłce. Spróbuj ponownie za chwilę.',
    footer: 'Zaprojektował i zakodował',
    cases: [
      {
        tag: 'Agencja marketingowa',
        name: 'Generation Z Agency',
        url: 'generationzagency.com',
        problem:
          'Treść zmieniała się często, ale każda zmiana wymagała programisty — czyli czasu i kosztów.',
        action:
          'Podpiąłem Sanity CMS i oddałem treść w ręce zespołu. Uporządkowałem też infrastrukturę i hosting.',
        result: 'Zespół edytuje treści sam, bez developera — zmiany są na stronie w kilka minut.',
        stack: ['Sanity CMS', 'Next.js', 'Infrastruktura'],
      },
      {
        tag: 'Studio tatuażu — portfolio',
        name: 'Adrianna Urban Tattoos',
        url: 'adriannaurbantattoos.com',
        problem:
          'Portfolio szybko rosło, a ręczne dodawanie i optymalizacja zdjęć obciążały stronę i zjadały czas.',
        action:
          'Zbudowałem stronę-portfolio i podpiąłem Cloudinary do galerii — upload, optymalizacja i serwowanie zdjęć dzieją się automatycznie.',
        result: 'Nowe prace pojawiają się w minutę, a zdjęcia ładują się szybko nawet na telefonie.',
        stack: ['Cloudinary', 'Galeria obrazów', 'Auto-optymalizacja'],
      },
    ],
  },
  en: {
    heroKicker: 'Websites for businesses',
    heroTitle: 'A website that works for your business.',
    heroSub:
      'I design, build and connect websites to a CMS for small businesses. Fast, easy to manage, built for one goal — to bring you customers.',
    cta: 'Get a quote',
    ctaSub: 'Reply within 1 business day',
    trust: 'One person — from design to launch. No agency overhead, no disappearing after go-live.',
    previewLabel: 'Live — client site',
    previewOpen: 'Open the client site in a new tab',
    workKicker: 'Selected work',
    lblProblem: 'Problem',
    lblAction: 'What I did',
    lblResult: 'Result',
    formTitle: 'Tell me about your project.',
    formSub: 'Fill in a short brief — I’ll come back with a quote and next steps.',
    choose: '— select —',
    fBusiness: 'What does your business do?',
    fScope: 'Scope',
    fTimeline: 'Timeline',
    fSite: 'Current website? (link)',
    fName: 'Name',
    fEmail: 'Email',
    fDetails: 'Anything else I should know?',
    scopeOptions: ['New website', 'Redesign', 'Fixes / maintenance', 'Not sure yet'],
    timelineOptions: ['As soon as possible', '1–3 months', 'Flexible'],
    submit: 'Send brief',
    sending: 'Sending…',
    successTitle: 'Thanks — your brief is on its way.',
    successBody: 'I’ll reply by email within 1 business day.',
    errorBody: 'Something went wrong while sending. Please try again in a moment.',
    footer: 'Designed and built by',
    cases: [
      {
        tag: 'Marketing agency',
        name: 'Generation Z Agency',
        url: 'generationzagency.com',
        problem: 'Content changed often, but every edit needed a developer — meaning time and cost.',
        action:
          'I connected Sanity CMS and put content in the team’s hands. I also tidied up the infrastructure and hosting.',
        result: 'The team edits content themselves, no developer needed — changes go live in minutes.',
        stack: ['Sanity CMS', 'Next.js', 'Infrastructure'],
      },
      {
        tag: 'Tattoo studio — portfolio',
        name: 'Adrianna Urban Tattoos',
        url: 'adriannaurbantattoos.com',
        problem:
          'The portfolio grew fast, and adding and optimising photos by hand slowed the site and ate up time.',
        action:
          'I built the portfolio site and connected Cloudinary for the gallery — uploading, optimising and serving images happens automatically.',
        result: 'New work goes live in a minute, and images load fast even on mobile.',
        stack: ['Cloudinary', 'Image gallery', 'Auto-optimisation'],
      },
    ],
  },
};
