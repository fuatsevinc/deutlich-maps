import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, MapPin, TrendingUp, Star, Shield, Clock, CheckCircle, BarChart3, Eye, Users } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const t = useTranslations('hero');
  const tServices = useTranslations('services');
  const tPackages = useTranslations('packages');
  const tNav = useTranslations('navigation');
  const currentLocale = useLocale();

  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: tServices('googleBusiness.title'),
      description: tServices('googleBusiness.description'),
      href: `/${currentLocale}/services#google-business`,
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: tServices('360tours.title'),
      description: tServices('360tours.description'),
      href: `/${currentLocale}/services#360-tours`,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: tServices('localSeo.title'),
      description: tServices('localSeo.description'),
      href: `/${currentLocale}/services#local-seo`,
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: tServices('reviews.title'),
      description: tServices('reviews.description'),
      href: `/${currentLocale}/services#reviews`,
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: tServices('reporting.title'),
      description: tServices('reporting.description'),
      href: `/${currentLocale}/services#reporting`,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: tServices('support.title'),
      description: tServices('support.description'),
      href: `/${currentLocale}/services#support`,
    },
  ];

  const stats = [
    { value: '500+', label: 'Zufriedene Kunden' },
    { value: '98%', label: 'Kundenzufriedenheit' },
    { value: '10x', label: 'Sichtbarkeitssteigerung' },
    { value: '24/7', label: 'Support' },
  ];

  const features = [
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Professionelle Google Business Optimierung' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Interaktive 360° virtuelle Touren' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Lokale SEO Strategien' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Bewertungsmanagement' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Monatliche Performance-Berichte' },
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Dedizierter Ansprechpartner' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-20" />

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <MapPin className="w-4 h-4" />
              <span>Hamburg & Norddeutschland</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6 animate-fade-in stagger-1">
              {t('title')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in stagger-2">
              {t('subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in stagger-3">
              <Link
                href={`/${currentLocale}/analysis`}
                className="btn-primary flex items-center gap-2 text-lg px-8 py-4 shadow-lg shadow-primary-500/25"
              >
                {t('cta')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${currentLocale}/services`}
                className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
              >
                {t('secondaryCta')}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200 animate-fade-in stagger-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-heading font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              {tServices('title')}
            </h2>
            <p className="text-lg text-gray-600">
              {tServices('subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-primary-300 hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                Warum Deutlich Maps?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Wir sind nicht nur ein Dienstleister – wir sind Ihr Partner für nachhaltiges Unternehmenswachstum.
                Mit unserer Expertise in lokaler Sichtbarkeit helfen wir Ihnen, mehr Kunden zu gewinnen.
              </p>

              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  href={`/${currentLocale}/about`}
                  className="btn-outline inline-flex items-center gap-2"
                >
                  Mehr über uns
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl p-8 lg:p-12">
                <div className="w-full h-full bg-white rounded-2xl shadow-xl p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-100 rounded-full mb-6">
                      <TrendingUp className="w-12 h-12 text-primary-600" />
                    </div>
                    <div className="text-5xl font-heading font-bold gradient-text mb-2">
                      +340%
                    </div>
                    <p className="text-gray-600">
                      Durchschnittliche Sichtbarkeitssteigerung<br />
                      unserer Kunden nach 6 Monaten
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">100%</div>
                    <div className="text-xs text-gray-500">Zufriedenheitsgarantie</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">24/7</div>
                    <div className="text-xs text-gray-500">Verfügbarkeit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Bereit, Ihre Sichtbarkeit zu steigern?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Lassen Sie uns gemeinsam Ihr Google Maps Ranking verbessern und mehr Kunden zu Ihnen bringen.
            </p>
            <Link
              href={`/${currentLocale}/analysis`}
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              {tNav('freeAnalysis')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
