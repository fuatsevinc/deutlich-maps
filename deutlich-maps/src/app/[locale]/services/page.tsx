import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, MapPin, TrendingUp, Star, BarChart3, CheckCircle, Camera, Search, MessageSquare, FileText, Headphones } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  const tServices = useTranslations('services');
  const tNav = useTranslations('navigation');
  const currentLocale = useLocale();

  const services = [
    {
      id: 'google-business',
      icon: <MapPin className="w-12 h-12" />,
      title: tServices('googleBusiness.title'),
      description: tServices('googleBusiness.description'),
      features: [
        'Vollständige Optimierung Ihres Google Business Profils',
        'Kategorie und Attribute Optimierung',
        'Öffnungszeiten und Kontaktdaten Prüfung',
        'Fotos und Beiträge Optimierung',
        'Q&A Verwaltung',
        'Bewertungsstrategie',
      ],
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=600&fit=crop',
    },
    {
      id: '360-tours',
      icon: <Camera className="w-12 h-12" />,
      title: tServices('360tours.title'),
      description: tServices('360tours.description'),
      features: [
        'Professionelle 360° Fotografie',
        'Interaktive virtuelle Tour Erstellung',
        'Google Street View Integration',
        'Mobile-optimierte Darstellung',
        'Hotspot-Navigation',
        'HD-Qualität Bildmaterial',
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    },
    {
      id: 'local-seo',
      icon: <Search className="w-12 h-12" />,
      title: tServices('localSeo.title'),
      description: tServices('localSeo.description'),
      features: [
        'Lokale Keyword-Recherche',
        'On-Page SEO Optimierung',
        'Google Maps Platzierung Verbesserung',
        'Lokale Citations Aufbau',
        'NAP-Konsistenz Prüfung',
        'Wettbewerbsanalyse',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
      id: 'reviews',
      icon: <Star className="w-12 h-12" />,
      title: tServices('reviews.title'),
      description: tServices('reviews.description'),
      features: [
        'Automatische Review-Anfragen',
        'Negative Review Management',
        'Review Monitoring',
        'Antworten auf Bewertungen',
        'Review-Sammlung Strategie',
        'Analytics und Reporting',
      ],
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop',
    },
    {
      id: 'reporting',
      icon: <BarChart3 className="w-12 h-12" />,
      title: tServices('reporting.title'),
      description: tServices('reporting.description'),
      features: [
        'Monatliche Performance Berichte',
        'Sichtbarkeits-Score Tracking',
        'Bewertungszusammenfassung',
        'Traffic-Analyse',
        'Wettbewerbsvergleich',
        'Handlungsempfehlungen',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      id: 'support',
      icon: <Headphones className="w-12 h-12" />,
      title: tServices('support.title'),
      description: tServices('support.description'),
      features: [
        'Persönlicher Ansprechpartner',
        'Schnelle Reaktionszeiten',
        'Technischer Support',
        'Strategische Beratung',
        'Regelmäßige Status-Updates',
        '24/7 Notfall-Support',
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              {tServices('title')}
            </h1>
            <p className="text-lg text-gray-600">
              {tServices('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-32 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container-custom">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${currentLocale}/analysis`}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Mehr erfahren
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-200 rounded-2xl -z-10" />
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary-200 rounded-2xl -z-10" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Lassen Sie uns gemeinsam Ihre lokale Sichtbarkeit analysieren und verbessern.
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
