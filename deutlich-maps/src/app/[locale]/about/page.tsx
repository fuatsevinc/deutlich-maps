import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Target, Eye, Heart, Users, Award, Globe, Shield, Truck } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  const tAbout = useTranslations('about');
  const tNav = useTranslations('navigation');
  const currentLocale = useLocale();

  const team = [
    {
      name: 'Markus Schmidt',
      role: 'Gründer & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: '15 Jahre Erfahrung in digitalem Marketing und lokaler SEO.',
    },
    {
      name: 'Anna Weber',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      bio: 'Spezialisiert auf Google Business Optimierung und 360° Fotografie.',
    },
    {
      name: 'Thomas Müller',
      role: 'Senior SEO Consultant',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Zertifizierter SEO-Experte mit Fokus auf lokale Suchstrategien.',
    },
  ];

  const values = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: tAbout('values.transparency'),
      description: tAbout('values.transparencyDesc'),
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: tAbout('values.quality'),
      description: tAbout('values.qualityDesc'),
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: tAbout('values.reliability'),
      description: tAbout('values.reliabilityDesc'),
    },
  ];

  const milestones = [
    { year: '2020', title: 'Gründung', description: 'Deutlich Maps wurde in Hamburg gegründet.' },
    { year: '2021', title: '100 Kunden', description: 'Wir haben unseren 100. Kunden erreicht.' },
    { year: '2022', title: 'Teamwachstum', description: 'Das Team wuchs auf 15 Mitarbeiter.' },
    { year: '2023', title: 'Norddeutschland', description: 'Expansion in den gesamten Norden Deutschlands.' },
    { year: '2024', title: '500+ Kunden', description: 'Mehr als 500 zufriedene Unternehmen vertrauen uns.' },
  ];

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              {tAbout('title')}
            </h1>
            <p className="text-lg text-gray-600">
              {tAbout('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                Unsere Geschichte
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6">
                {tAbout('story.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {tAbout('story.content')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                Als erfahrene Digitalmarketer haben wir erkannt, dass lokale Unternehmen oft gegen große Ketten und Online-Giganten ankämpfen. Wir haben es uns zur Aufgabe gemacht, diese Ungerechtigkeit zu bekämpfen und kleinen Unternehmen zu helfen, in der digitalen Welt sichtbar zu werden.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=800&fit=crop"
                  alt="Hamburg Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Zufriedene Kunden</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-12 text-center text-white">
              <Target className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                {tAbout('mission.title')}
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                {tAbout('mission.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              {tAbout('values.title')}
            </h2>
            <p className="text-lg text-gray-600">
              Diese Prinzipien leiten alles, was wir tun.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-colors"
              >
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Unser Team
            </h2>
            <p className="text-lg text-gray-600">
              Lernen Sie die Menschen kennen, die hinter Deutlich Maps stehen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Unsere Meilensteine
            </h2>
            <p className="text-lg text-gray-600">
              Die Geschichte von Deutlich Maps.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-heading font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow" />

                  {/* Spacer */}
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Bereit, mit uns zu arbeiten?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Lassen Sie uns gemeinsam Ihre lokale Sichtbarkeit verbessern.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${currentLocale}/contact`}
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={`/${currentLocale}/analysis`}
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                {tNav('freeAnalysis')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
