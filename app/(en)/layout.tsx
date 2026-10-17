import type { Metadata } from 'next';
import { onest } from '@/lib/fonts';
import { SITE_URL } from '@/lib/site';
import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Web Urban — websites for businesses',
  description:
    'I design and build websites for small businesses. From design to launch, without the agency mark-up, with a panel to edit it yourself.',
  alternates: {
    canonical: '/en/',
    languages: { pl: '/', en: '/en/' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={onest.variable}>
      <body>{children}</body>
    </html>
  );
}
