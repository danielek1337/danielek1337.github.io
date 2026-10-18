export type Locale = 'pl' | 'en';

export interface CaseStudy {
  tag: string;
  name: string;
  host: string;
  url: string;
  /** Full-page screenshot in /public, panned top to bottom inside the card. */
  shot: string;
  shotW: number;
  shotH: number;
  dark?: boolean;
  body: string;
  feats: string[];
  alt: string;
}

export interface Step {
  kick: string;
  title: string;
  body: string;
}

export interface Price {
  name: string;
  /** Small prefix before the amount ("od" / "from"); empty for no prefix. */
  from: string;
  amount: string;
  body: string;
  popular?: boolean;
}

export interface Fact {
  title: string;
  body: string;
}

export interface Dict {
  navCta: string;
  heroKicker: string;
  heroTitle: string;
  heroSub: string;
  cta: string;
  heroPreviewAlt: string;
  formTitle: string;
  formSub: string;
  choose: string;
  fBusiness: string;
  fScope: string;
  fTimeline: string;
  fSite: string;
  fSitePh: string;
  fName: string;
  fEmail: string;
  fEmailPh: string;
  fDetails: string;
  scopeOptions: string[];
  timelineOptions: string[];
  submit: string;
  sending: string;
  successTitle: string;
  successBody: string;
  errorBody: string;
  workTitle: string;
  workSub: string;
  seeSite: string;
  cases: [CaseStudy, CaseStudy];
  stepsTitle: string;
  stepsSub: string;
  steps: [Step, Step, Step];
  aboutKicker: string;
  aboutTitle: string;
  aboutLead: string;
  aboutBody: string;
  facts: Fact[];
  pricesTitle: string;
  pricesSub: string;
  popular: string;
  prices: [Price, Price, Price];
  faq: { q: string; a: string }[];
  finalTitle: string;
  socialTitle: string;
  socialSub: string;
}

const genz = {
  name: 'Generation Z Agency',
  host: 'generationzagency.com',
  url: 'https://generationzagency.com',
  shot: '/work/genz-page.jpg',
  shotW: 1200,
  shotH: 2240,
};

const tattoo = {
  name: 'Adrianna Urban Tattoos',
  host: 'adriannaurbantattoos.com',
  url: 'https://adriannaurbantattoos.com',
  shot: '/work/tattoo-page.jpg',
  shotW: 1200,
  shotH: 1633,
  dark: true,
};

export const dictionaries: Record<Locale, Dict> = {
  pl: {
    navCta: 'Wyceń stronę',
    heroKicker: 'Strony dla małych firm',
    heroTitle: 'Podoba Ci się strona, z której tu trafiłeś?',
    heroSub: 'Zrobię taką dla Twojej firmy. Od projektu po start, bez agencyjnego narzutu.',
    cta: 'Wyceń stronę',
    heroPreviewAlt: 'Strona Generation Z Agency, przewijana w podglądzie',
    formTitle: 'Opowiedz o swojej firmie.',
    formSub: 'Kilka pól, dwie minuty. Wrócę z wyceną i propozycją kolejnych kroków.',
    choose: '— wybierz —',
    fBusiness: 'Czym zajmuje się Twój biznes?',
    fScope: 'Zakres',
    fTimeline: 'Termin',
    fSite: 'Masz obecną stronę? (link)',
    fSitePh: 'np. facebook.com/twojafirma',
    fName: 'Imię',
    fEmail: 'Email',
    fEmailPh: 'kasia@firma.pl',
    fDetails: 'Coś jeszcze, co powinienem wiedzieć?',
    scopeOptions: ['Nowa strona', 'Redesign', 'Poprawki / utrzymanie', 'Jeszcze nie wiem'],
    timelineOptions: ['Jak najszybciej', '1–3 miesiące', 'Elastycznie'],
    submit: 'Wyślij brief',
    sending: 'Wysyłanie…',
    successTitle: 'Dziękuję, brief poszedł.',
    successBody: 'Odezwę się na maila w ciągu 1 dnia roboczego.',
    errorBody: 'Coś poszło nie tak przy wysyłce. Spróbuj ponownie za chwilę.',
    workTitle: 'Strony, które już pracują.',
    workSub: 'Bez technicznego żargonu. Tylko to, co strona zmieniła w firmie.',
    seeSite: 'Zobacz stronę',
    cases: [
      {
        ...genz,
        tag: 'Agencja marketingowa · Warszawa',
        body: 'Zespół sam zmienia treści na stronie. Nowość jest online w kilka minut, bez dzwonienia do programisty.',
        feats: ['Panel do edycji', 'Wideo w nagłówku', 'Logotypy klientów'],
        alt: 'Strona Generation Z Agency, przewijana od góry do dołu',
      },
      {
        ...tattoo,
        tag: 'Studio tatuażu · York',
        body: 'Nowe prace trafiają do galerii w minutę i ładują się szybko nawet na telefonie.',
        feats: ['Galeria z filtrami', 'Rezerwacje', 'Wersja na telefon'],
        alt: 'Strona Adrianna Urban Tattoos, przewijana od góry do dołu',
      },
    ],
    stepsTitle: 'Od briefu do startu w trzech krokach.',
    stepsSub: 'Wiesz, co się dzieje na każdym etapie.',
    steps: [
      { kick: 'Ty', title: 'Brief', body: 'Wypełniasz krótki formularz. Wracam z wyceną w 1 dzień roboczy.' },
      { kick: 'Razem', title: 'Projekt', body: 'Pokazuję projekt strony. Poprawiamy go, aż będzie pasował do firmy.' },
      { kick: 'Start', title: 'Strona online', body: 'Strona idzie online, a Ty dostajesz prosty panel do zmiany treści.' },
    ],
    aboutKicker: 'O mnie',
    aboutTitle: 'Jedna osoba od pomysłu do startu.',
    aboutLead:
      'Cześć, tu Web Urban. Projektuję i koduję strony dla małych firm, które chcą wyglądać w sieci tak dobrze, jak pracują na co dzień.',
    aboutBody:
      'Rozmawiasz bezpośrednio ze mną, bez opiekuna projektu i bez pośredników. Ja projektuję, ja koduję i ja odbieram telefon, gdy coś trzeba zmienić.',
    facts: [
      { title: 'Projekt i kod w jednych rękach', body: 'Nic nie ginie między grafikiem a programistą.' },
      { title: 'Strony, które sam edytujesz', body: 'Prosty panel zamiast maili z prośbą o zmianę tekstu.' },
      { title: 'Zostaję po starcie', body: 'Poprawki i opiekę ustalamy razem, zależnie od potrzeb.' },
    ],
    pricesTitle: 'Ile to kosztuje?',
    pricesSub: 'Każdą stronę wyceniam indywidualnie. Te widełki pomogą Ci się zorientować.',
    popular: 'Najczęściej wybierana',
    // TODO: wpisać kwoty przed publikacją.
    prices: [
      { name: 'Wizytówka', from: 'od', amount: '… zł', body: 'Jedna strona z ofertą, kontaktem i mapą dojazdu.' },
      {
        name: 'Strona firmowa',
        from: 'od',
        amount: '… zł',
        body: 'Kilka sekcji, galeria lub realizacje i panel do samodzielnej edycji.',
        popular: true,
      },
      { name: 'Większy projekt', from: '', amount: 'Wycena', body: 'Rezerwacje, sklep albo coś nietypowego. Porozmawiajmy.' },
    ],
    faq: [
      {
        q: 'Czy sam będę mógł zmieniać treści?',
        a: 'Tak, jeśli tego potrzebujesz. Dostajesz prosty panel, w którym zmienisz teksty i zdjęcia.',
      },
      { q: 'A domena i hosting?', a: 'Pomogę je wybrać i wszystko ustawię, żebyś nie musiał się tym zajmować.' },
      {
        q: 'Co się dzieje po starcie strony?',
        a: 'Zostaję w kontakcie. Poprawki i opiekę ustalamy razem, zależnie od potrzeb.',
      },
    ],
    finalTitle: 'Twoja firma też może tak wyglądać.',
    socialTitle: 'Znajdziesz mnie też tu.',
    socialSub: 'Doświadczenie zawodowe na LinkedInie, a kod moich projektów na GitHubie.',
  },
  en: {
    navCta: 'Get a quote',
    heroKicker: 'Websites for small businesses',
    heroTitle: 'Like the website that brought you here?',
    heroSub: 'I’ll build one like it for your business. From design to launch, without the agency mark-up.',
    cta: 'Get a quote',
    heroPreviewAlt: 'The Generation Z Agency website, scrolling in the preview',
    formTitle: 'Tell me about your business.',
    formSub: 'A few fields, two minutes. I’ll come back with a quote and next steps.',
    choose: '— select —',
    fBusiness: 'What does your business do?',
    fScope: 'Scope',
    fTimeline: 'Timeline',
    fSite: 'Current website? (link)',
    fSitePh: 'e.g. facebook.com/yourbusiness',
    fName: 'Name',
    fEmail: 'Email',
    fEmailPh: 'kate@company.com',
    fDetails: 'Anything else I should know?',
    scopeOptions: ['New website', 'Redesign', 'Fixes / maintenance', 'Not sure yet'],
    timelineOptions: ['As soon as possible', '1–3 months', 'Flexible'],
    submit: 'Send brief',
    sending: 'Sending…',
    successTitle: 'Thanks, your brief is on its way.',
    successBody: 'I’ll reply by email within 1 business day.',
    errorBody: 'Something went wrong while sending. Please try again in a moment.',
    workTitle: 'Websites already at work.',
    workSub: 'No tech jargon. Just what the website changed for the business.',
    seeSite: 'Visit site',
    cases: [
      {
        ...genz,
        tag: 'Marketing agency · Warsaw',
        body: 'The team edits the site themselves. New content goes live in minutes, no developer call needed.',
        feats: ['Editing panel', 'Hero video', 'Client logos'],
        alt: 'The Generation Z Agency website, scrolling from top to bottom',
      },
      {
        ...tattoo,
        tag: 'Tattoo studio · York',
        body: 'New work lands in the gallery in a minute and loads fast even on a phone.',
        feats: ['Filterable gallery', 'Bookings', 'Mobile-ready'],
        alt: 'The Adrianna Urban Tattoos website, scrolling from top to bottom',
      },
    ],
    stepsTitle: 'From brief to launch in three steps.',
    stepsSub: 'You know what’s happening at every stage.',
    steps: [
      { kick: 'You', title: 'Brief', body: 'You fill in a short form. I come back with a quote within 1 business day.' },
      { kick: 'Together', title: 'Design', body: 'I show you the design. We refine it until it fits your business.' },
      { kick: 'Launch', title: 'Site goes live', body: 'The site goes live and you get a simple panel to edit the content.' },
    ],
    aboutKicker: 'About me',
    aboutTitle: 'One person from idea to launch.',
    aboutLead:
      'Hi, this is Web Urban. I design and build websites for small businesses that want to look as good online as they work every day.',
    aboutBody:
      'You talk to me directly, with no account manager and no middlemen. I design, I code, and I pick up the phone when something needs changing.',
    facts: [
      { title: 'Design and code in one pair of hands', body: 'Nothing gets lost between designer and developer.' },
      { title: 'A site you can edit yourself', body: 'A simple panel instead of emails asking to change a sentence.' },
      { title: 'I stay after launch', body: 'We agree on fixes and support together, as you need them.' },
    ],
    pricesTitle: 'How much does it cost?',
    pricesSub: 'Every site is priced individually. These ranges will help you get a feel for it.',
    popular: 'Most popular',
    // TODO: fill in amounts before publishing.
    prices: [
      { name: 'One-pager', from: 'from', amount: 'PLN …', body: 'A single page with your offer, contact details and a map.' },
      {
        name: 'Business website',
        from: 'from',
        amount: 'PLN …',
        body: 'Several sections, a gallery or case studies, and a panel to edit it yourself.',
        popular: true,
      },
      { name: 'Bigger project', from: '', amount: 'Custom', body: 'Bookings, a shop or something unusual. Let’s talk.' },
    ],
    faq: [
      {
        q: 'Will I be able to edit the content myself?',
        a: 'Yes, if you need to. You get a simple panel where you can change text and photos.',
      },
      { q: 'What about the domain and hosting?', a: 'I’ll help you choose them and set everything up, so you don’t have to.' },
      {
        q: 'What happens after launch?',
        a: 'I stay in touch. We agree on fixes and ongoing care together, depending on your needs.',
      },
    ],
    finalTitle: 'Your business can look like this too.',
    socialTitle: 'You can also find me here.',
    socialSub: 'My work experience on LinkedIn, and the code behind my projects on GitHub.',
  },
};
