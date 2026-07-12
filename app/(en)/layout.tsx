import type { Metadata } from 'next';
import { spaceGrotesk, spaceMono } from '@/lib/fonts';
import { SITE_URL } from '@/lib/site';
import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Web Urban — websites for businesses',
  description:
    'I design, build and connect websites to a CMS for small businesses. Fast, easy to manage, built for one goal — to bring you customers.',
  alternates: {
    canonical: '/en/',
    languages: { pl: '/', en: '/en/' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
