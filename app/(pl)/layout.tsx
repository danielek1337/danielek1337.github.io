import type { Metadata } from 'next';
import { spaceGrotesk, spaceMono } from '@/lib/fonts';
import { SITE_URL } from '@/lib/site';
import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Web Urban — strony internetowe dla firm',
  description:
    'Projektuję, koduję i podpinam pod CMS strony dla małych firm. Szybkie, łatwe w obsłudze, zrobione pod jeden cel — żeby przynosiły klientów.',
  alternates: {
    canonical: '/',
    languages: { pl: '/', en: '/en/' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
