'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Globe, MapPin } from 'lucide-react';

const Header = ({ locale }: { locale: string }) => {
  const t = useTranslations('navigation');
  const currentLocale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  ];

  const navigation = [
    { name: t('home'), href: `/${currentLocale}` },
    { name: t('services'), href: `/${currentLocale}/services` },
    { name: t('packages'), href: `/${currentLocale}/packages` },
    { name: t('about'), href: `/${currentLocale}/about` },
    { name: t('contact'), href: `/${currentLocale}/contact` },
  ];

  const getLocalePath = (newLocale: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${currentLocale}`, `/${newLocale}`);
    return newPath;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${currentLocale}`} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-heading font-bold text-xl text-gray-900">Deutlich</span>
              <span className="font-heading font-bold text-xl text-primary-600">Maps</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="uppercase font-medium">{currentLocale}</span>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={getLocalePath(lang.code)}
                      className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-50 ${
                        currentLocale === lang.code ? 'text-primary-600 font-medium' : 'text-gray-600'
                      }`}
                      onClick={() => setIsLangOpen(false)}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href={`/${currentLocale}/analysis`}
              className="btn-primary flex items-center gap-2"
            >
              {t('freeAnalysis')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-primary-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '16px', paddingBottom: '16px', backgroundColor: 'white' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingLeft: '16px', paddingRight: '16px' }}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{ color: '#4b5563', fontWeight: 500, padding: '8px 0', textDecoration: 'none', display: 'block' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Language Selector */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px', borderTop: '1px solid #f3f4f6' }}>
                <Globe style={{ width: '20px', height: '20px', color: '#9ca3af' }} />
                <div style={{ display: 'flex', gap: '8px' }}>
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={getLocalePath(lang.code)}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '4px',
                        backgroundColor: currentLocale === lang.code ? '#dbeafe' : 'transparent',
                        color: currentLocale === lang.code ? '#0284c7' : '#4b5563',
                        fontWeight: currentLocale === lang.code ? 500 : 400,
                        textDecoration: 'none'
                      }}
                    >
                      {lang.code.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={`/${currentLocale}/analysis`}
                style={{
                  backgroundColor: '#0284c7',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: 500,
                  textAlign: 'center',
                  textDecoration: 'none',
                  marginTop: '8px',
                  display: 'block'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('freeAnalysis')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
