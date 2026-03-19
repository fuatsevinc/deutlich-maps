'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Send, CheckCircle, MapPin, TrendingUp, Clock, Shield } from 'lucide-react';

export default function AnalysisPage() {
  const t = useTranslations('analysis');
  const tNav = useTranslations('navigation');
  const currentLocale = useLocale();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      businessName: formData.get('businessName'),
      contactName: formData.get('contactName'),
      contactEmail: formData.get('contactEmail'),
      contactPhone: formData.get('contactPhone'),
      website: formData.get('website'),
      googleUrl: formData.get('googleUrl'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Sichtbarkeits-Score',
      description: 'Erfahren Sie, wie Sie aktuell in Google Maps ranken.',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Optimierungspotenzial',
      description: 'Entdecken Sie Verbesserungsmöglichkeiten für Ihr Profil.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Innerhalb von 24h',
      description: 'Erhalten Sie Ihre personalisierte Analyse schnell.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Kostenlos & Unverbindlich',
      description: 'Keine versteckten Kosten oder Verpflichtungen.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Kostenlose Analyse
            </div>
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits + Form Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Benefits */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                Was Sie erhalten
              </h2>

              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="mt-10 p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                      alt="Testimonial"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Thomas Meyer</div>
                    <div className="text-sm text-gray-600">Café Meyer, Hamburg</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Die Analyse hat uns gezeigt, wo wir standen. Nach der Optimierung sind unsere Umsätze um 40% gestiegen!"
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4 animate-fade-in stagger-1">
                      Vielen Dank!
                    </h3>
                    <p className="text-gray-600 mb-8 animate-fade-in stagger-2">
                      {t('form.success')}
                    </p>
                    <div className="animate-fade-in stagger-3">
                      <Link href={`/${currentLocale}`} className="btn-primary">
                        Zurück zur Startseite
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.businessName')} *
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          required
                          className="input"
                          placeholder={t('form.businessNamePlaceholder')}
                        />
                      </div>
                      <div>
                        <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.contactName')} *
                        </label>
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          required
                          className="input"
                          placeholder="Max Mustermann"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.contactEmail')} *
                        </label>
                        <input
                          type="email"
                          id="contactEmail"
                          name="contactEmail"
                          required
                          className="input"
                          placeholder="max@beispiel.de"
                        />
                      </div>
                      <div>
                        <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('form.contactPhone')}
                        </label>
                        <input
                          type="tel"
                          id="contactPhone"
                          name="contactPhone"
                          className="input"
                          placeholder="+49 170 123 4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.website')}
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        className="input"
                        placeholder={t('form.websitePlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="googleUrl" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.googleUrl')}
                      </label>
                      <input
                        type="url"
                        id="googleUrl"
                        name="googleUrl"
                        className="input"
                        placeholder={t('form.googleUrlPlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('form.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="input resize-none"
                        placeholder={t('form.messagePlaceholder')}
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4"
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Wird gesendet...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            {t('form.submit')}
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Darauf können Sie sich verlassen
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold gradient-text mb-2">500+</div>
              <p className="text-gray-600">Zufriedene Kunden</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold gradient-text mb-2">98%</div>
              <p className="text-gray-600">Kundenzufriedenheit</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold gradient-text mb-2">24h</div>
              <p className="text-gray-600">Reaktionszeit</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
