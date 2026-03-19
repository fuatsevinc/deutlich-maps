import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { MapPin, Mail, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tServices = useTranslations('services');
  const currentLocale = useLocale();

  const currentYear = new Date().getFullYear();

  const services = [
    { name: tServices('googleBusiness.title'), href: `/${currentLocale}/services#google-business` },
    { name: tServices('360tours.title'), href: `/${currentLocale}/services#360-tours` },
    { name: tServices('localSeo.title'), href: `/${currentLocale}/services#local-seo` },
    { name: tServices('reviews.title'), href: `/${currentLocale}/services#reviews` },
  ];

  const quickLinks = [
    { name: tNav('home'), href: `/${currentLocale}` },
    { name: tNav('services'), href: `/${currentLocale}/services` },
    { name: tNav('packages'), href: `/${currentLocale}/packages` },
    { name: tNav('about'), href: `/${currentLocale}/about` },
    { name: tNav('contact'), href: `/${currentLocale}/contact` },
    { name: tNav('freeAnalysis'), href: `/${currentLocale}/analysis` },
  ];

  const legalLinks = [
    { name: t('privacy'), href: `/${currentLocale}/privacy` },
    { name: t('imprint'), href: `/${currentLocale}/imprint` },
    { name: t('terms'), href: `/${currentLocale}/terms` },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href={`/${currentLocale}`} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white">Deutlich</span>
                <span className="font-heading font-bold text-xl text-primary-400">Maps</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('description')}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-4">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-4">
              {t('services')}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <span className="text-gray-400">{t('contact', { returnObjects: true }).info?.address || 'Hamburg, Deutschland'}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a
                  href="mailto:info@deutlichmaps.de"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  info@deutlichmaps.de
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <a
                  href="tel:+494012345678"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  +49 40 123 456 78
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              {t('copyright')}
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
