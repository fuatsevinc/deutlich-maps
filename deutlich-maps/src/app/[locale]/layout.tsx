import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Deutlich Maps | Ihr lokaler Sichtbarkeitspartner',
  description: 'Wir helfen Ihnen, in Google Maps und lokalen Suchergebnissen ganz nach oben zu kommen. Mehr Sichtbarkeit, mehr Kunden, mehr Erfolg.',
  keywords: ['Google Maps', 'SEO', 'Lokale Sichtbarkeit', 'Hamburg', '360° Touren', 'Virtuelle Touren'],
  authors: [{ name: 'Deutlich Maps' }],
  openGraph: {
    title: 'Deutlich Maps | Ihr lokaler Sichtbarkeitspartner',
    description: 'Wir helfen Ihnen, in Google Maps und lokalen Suchergebnissen ganz nach oben zu kommen.',
    type: 'website',
    locale: 'de_DE',
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
