import type { Metadata } from 'next';
import { onest } from '@/lib/fonts';
import { SITE_URL } from '@/lib/site';
import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Web Urban — strony internetowe dla firm',
  description:
    'Projektuję i koduję strony dla małych firm. Od projektu po start, bez agencyjnego narzutu, z panelem do samodzielnej edycji.',
  alternates: {
    canonical: '/',
    languages: { pl: '/', en: '/en/' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={onest.variable}>
      <body>{children}</body>
    </html>
  );
}
