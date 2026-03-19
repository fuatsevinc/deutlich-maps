'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  UserPlus,
  FolderKanban,
  CheckSquare,
  Euro,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
} from 'lucide-react';

interface DashboardStats {
  totalLeads: number;
  newLeads: number;
  activeProjects: number;
  pendingTasks: number;
  monthlyRevenue: number;
  leadGrowth: number;
}

interface RecentActivity {
  id: string;
  type: 'lead' | 'project' | 'task';
  title: string;
  description: string;
  time: string;
}

interface UpcomingTask {
  id: string;
  title: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo: string;
}

export default function AdminDashboard() {
  const t = useTranslations('dashboard');
  const [stats, setStats] = useState<DashboardStats>({
    totalLeads: 0,
    newLeads: 0,
    activeProjects: 0,
    pendingTasks: 0,
    monthlyRevenue: 0,
    leadGrowth: 0,
  });
  const [activities, setActivities] = useState<RecentActivity[]>([]);
  const [tasks, setTasks] = useState<UpcomingTask[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStats({
        totalLeads: 127,
        newLeads: 12,
        activeProjects: 45,
        pendingTasks: 23,
        monthlyRevenue: 24500,
        leadGrowth: 15,
      });

      setActivities([
        {
          id: '1',
          type: 'lead',
          title: 'Neuer Lead',
          description: 'Café Hamburg hat sich angemeldet',
          time: 'vor 5 Minuten',
        },
        {
          id: '2',
          type: 'project',
          title: 'Projekt abgeschlossen',
          description: 'Restaurant Sternenhimmel - 360° Tour veröffentlicht',
          time: 'vor 1 Stunde',
        },
        {
          id: '3',
          type: 'lead',
          title: 'Lead konvertiert',
          description: 'Boutique Elite ist jetzt Kunde',
          time: 'vor 2 Stunden',
        },
        {
          id: '4',
          type: 'task',
          title: 'Aufgabe fällig',
          description: 'Fotos für Hotel Nordlicht hochladen',
          time: 'Morgen',
        },
        {
          id: '5',
          type: 'project',
          title: 'Neues Projekt',
          description: 'Friseur Salon Max - Onboarding gestartet',
          time: 'vor 3 Stunden',
        },
      ]);

      setTasks([
        {
          id: '1',
          title: '360° Tour für Café Hamburg erstellen',
          dueDate: '2024-07-20',
          priority: 'high',
          assignedTo: 'Anna Weber',
        },
        {
          id: '2',
          title: 'SEO Bericht für Restaurant Sternenhimmel',
          dueDate: '2024-07-21',
          priority: 'medium',
          assignedTo: 'Thomas Müller',
        },
        {
          id: '3',
          title: 'Follow-up Anruf mit Boutique Elite',
          dueDate: '2024-07-19',
          priority: 'urgent',
          assignedTo: 'Markus Schmidt',
        },
        {
          id: '4',
          title: 'Fotos für Hotel Nordlicht bearbeiten',
          dueDate: '2024-07-22',
          priority: 'medium',
          assignedTo: 'Anna Weber',
        },
      ]);

      setIsLoading(false);
    };

    loadData();
  }, []);

  const statCards = [
    {
      title: t('stats.leads'),
      value: stats.totalLeads,
      icon: UserPlus,
      change: stats.leadGrowth,
      color: 'primary',
    },
    {
      title: t('stats.projects'),
      value: stats.activeProjects,
      icon: FolderKanban,
      change: 8,
      color: 'secondary',
    },
    {
      title: t('stats.tasks'),
      value: stats.pendingTasks,
      icon: CheckSquare,
      change: -5,
      color: 'accent',
    },
    {
      title: t('stats.revenue'),
      value: `€${stats.monthlyRevenue.toLocaleString()}`,
      icon: Euro,
      change: 12,
      color: 'green',
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'lead':
        return <UserPlus className="w-5 h-5 text-blue-500" />;
      case 'project':
        return <FolderKanban className="w-5 h-5 text-purple-500" />;
      case 'task':
        return <CheckSquare className="w-5 h-5 text-green-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-700';
      case 'high':
        return 'bg-orange-100 text-orange-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
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
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900">
            {t('title')}
          </h1>
          <p className="text-gray-600 mt-1">{t('welcome')}</p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/admin/leads" className="btn-primary flex items-center gap-2">
            <UserPlus className="w-5 h-5" />
            {t('addLead')}
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  stat.color === 'primary' ? 'bg-primary-100 text-primary-600' :
                  stat.color === 'secondary' ? 'bg-secondary-100 text-secondary-600' :
                  stat.color === 'accent' ? 'bg-accent-100 text-accent-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change >= 0 ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {Math.abs(stat.change)}%
                </div>
              </div>
              <div className="text-3xl font-heading font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.title}</div>
            </div>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-heading font-semibold text-gray-900">
              {t('recentActivity')}
            </h2>
            <Link
              href="/admin/leads"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1"
            >
              Alle anzeigen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="divide-y divide-gray-100">
            {activities.map((activity) => (
              <div key={activity.id} className="p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">{activity.title}</span>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-0.5">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-heading font-semibold text-gray-900">
              {t('upcomingTasks')}
            </h2>
            <Link
              href="/admin/tasks"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1"
            >
              Alle anzeigen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="divide-y divide-gray-100">
            {tasks.map((task) => (
              <div key={task.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 mb-2">{task.title}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(task.dueDate).toLocaleDateString('de-DE')}
                      </span>
                      <span>{task.assignedTo}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority === 'urgent' ? 'Dringend' :
                     task.priority === 'high' ? 'Hoch' :
                     task.priority === 'medium' ? 'Mittel' : 'Niedrig'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-100">
            <Link
              href="/admin/tasks"
              className="btn-secondary w-full flex items-center justify-center gap-2"
            >
              <CheckSquare className="w-5 h-5" />
              Neue Aufgabe erstellen
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white">
        <h2 className="text-xl font-heading font-bold mb-4">{t('quickActions')}</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            href="/admin/leads"
            className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
          >
            <UserPlus className="w-6 h-6 mb-2" />
            <div className="font-medium">{t('addLead')}</div>
            <div className="text-sm text-white/80">Neuen Lead erfassen</div>
          </Link>
          <Link
            href="/admin/projects"
            className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
          >
            <FolderKanban className="w-6 h-6 mb-2" />
            <div className="font-medium">{t('viewProjects')}</div>
            <div className="text-sm text-white/80">Projekte verwalten</div>
          </Link>
          <Link
            href="/admin/tasks"
            className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
          >
            <CheckSquare className="w-6 h-6 mb-2" />
            <div className="font-medium">{t('viewTasks')}</div>
            <div className="text-sm text-white/80">Aufgaben anzeigen</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
