import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Analytics} from '@vercel/analytics/react';

import {cn} from '@/lib/utils';
import {USER} from '@/data/user';
import {ThemeProvider} from '@/components/theme-provider';
import {TooltipProvider} from '@/components/ui/tooltip';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const DESCRIPTION =
  'David Tomschitz — Full Stack Software Engineer from Germany, building mobile and web applications.';

export const metadata: Metadata = {
  metadataBase: new URL(USER.website),
  title: {
    default: USER.displayName,
    template: `%s — ${USER.displayName}`,
  },
  description: DESCRIPTION,
  keywords: USER.keywords,
  authors: [{name: USER.displayName, url: USER.website}],
  creator: USER.displayName,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: USER.website,
    siteName: USER.displayName,
    title: USER.displayName,
    description: DESCRIPTION,
    images: [{url: USER.ogImage, alt: USER.displayName}],
  },
  twitter: {
    card: 'summary',
    title: USER.displayName,
    description: DESCRIPTION,
    images: [USER.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geistSans.variable, geistMono.variable, 'antialiased', 'overflow-x-clip')}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
