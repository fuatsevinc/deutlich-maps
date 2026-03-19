'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  FolderKanban,
  TrendingUp,
  FileText,
  HelpCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  Camera,
  Eye,
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  status: 'onboarding' | 'in_progress' | 'review' | 'completed' | 'published';
  progress: number;
  nextStep: string;
}

interface RecentActivity {
  id: string;
  type: 'project' | 'document' | 'report';
  title: string;
  description: string;
  time: string;
}

export default function PortalDashboard() {
  const t = useTranslations('portal');
  const [projects, setProjects] = useState<Project[]>([]);
  const [activities, setActivities] = useState<RecentActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setProjects([
        {
          id: '1',
          name: 'Café Hamburg - Google Optimierung',
          status: 'in_progress',
          progress: 65,
          nextStep: '360° Tour wird erstellt',
        },
        {
          id: '2',
          name: 'Café Hamburg - Virtuelle Tour',
          status: 'published',
          progress: 100,
          nextStep: 'Tour ist live',
        },
      ]);

      setActivities([
        {
          id: '1',
          type: 'project',
          title: 'Status aktualisiert',
          description: 'Google Optimierung ist nun zu 65% fertig',
          time: 'vor 2 Stunden',
        },
        {
          id: '2',
          type: 'document',
          title: 'Neues Dokument',
          description: 'Monatlicher Bericht für Juni ist verfügbar',
          time: 'Gestern',
        },
        {
          id: '3',
          type: 'report',
          title: 'Tour veröffentlicht',
          description: 'Ihre 360° Tour ist jetzt auf Google sichtbar',
          time: 'vor 3 Tagen',
        },
      ]);

      setIsLoading(false);
    };

    loadData();
  }, []);

  const statusLabels: Record<string, string> = {
    onboarding: t('projectStatus.onboarding'),
    in_progress: t('projectStatus.inProgress'),
    review: t('projectStatus.review'),
    completed: t('projectStatus.completed'),
    published: t('projectStatus.published'),
  };

  const statusColors: Record<string, string> = {
    onboarding: 'bg-blue-100 text-blue-700',
    in_progress: 'bg-orange-100 text-orange-700',
    review: 'bg-purple-100 text-purple-700',
    completed: 'bg-green-100 text-green-700',
    published: 'bg-primary-100 text-primary-700',
  };

  const statusIcons: Record<string, JSX.Element> = {
    onboarding: <Clock className="w-5 h-5" />,
    in_progress: <Camera className="w-5 h-5" />,
    review: <Eye className="w-5 h-5" />,
    completed: <CheckCircle className="w-5 h-5" />,
    published: <TrendingUp className="w-5 h-5" />,
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900">
          {t('welcome')}
        </h1>
        <p className="text-gray-600 mt-1">{t('subtitle')}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
              <FolderKanban className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-gray-900">
                {projects.length}
              </div>
              <div className="text-sm text-gray-600">Aktive Projekte</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">Verfügbare Berichte</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-heading font-bold text-gray-900">+40%</div>
              <div className="text-sm text-gray-600">Sichtbarkeit gesteigert</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-heading font-semibold text-gray-900">
            {t('projects')}
          </h2>
          <Link
            href="/portal/projects"
            className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1"
          >
            Alle anzeigen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="divide-y divide-gray-100">
          {projects.map((project) => (
            <div key={project.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    project.status === 'published' ? 'bg-green-100 text-green-600' :
                    project.status === 'in_progress' ? 'bg-orange-100 text-orange-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {statusIcons[project.status]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{project.nextStep}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden max-w-xs">
                        <div
                          className="h-full bg-primary-600 rounded-full transition-all"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-600">
                        {project.progress}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`badge ${statusColors[project.status]}`}>
                    {statusLabels[project.status]}
                  </span>
                  <Link
                    href={`/portal/projects/${project.id}`}
                    className="btn-secondary text-sm py-2"
                  >
                    Ansehen
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-heading font-semibold text-gray-900">
            Letzte Aktivitäten
          </h2>
        </div>

        <div className="divide-y divide-gray-100">
          {activities.map((activity) => (
            <div key={activity.id} className="p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                {activity.type === 'project' && <FolderKanban className="w-5 h-5 text-blue-500" />}
                {activity.type === 'document' && <FileText className="w-5 h-5 text-green-500" />}
                {activity.type === 'report' && <TrendingUp className="w-5 h-5 text-purple-500" />}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{activity.title}</div>
                <p className="text-sm text-gray-600 mt-0.5">{activity.description}</p>
              </div>
              <div className="text-sm text-gray-500">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Support CTA */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-heading font-bold mb-2">Brauchen Sie Hilfe?</h2>
            <p className="text-white/90">
              Unser Support-Team steht Ihnen jederzeit zur Verfügung.
            </p>
          </div>
          <Link
            href="/portal/support"
            className="flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
            Support kontaktieren
          </Link>
        </div>
      </div>
    </div>
  );
}
