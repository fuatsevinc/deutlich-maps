'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Mail,
  Phone,
  Eye,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface Lead {
  id: string;
  business_name: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string | null;
  status: string;
  source: string;
  city: string;
  created_at: string;
}

const statusColors: Record<string, string> = {
  new: 'bg-blue-100 text-blue-700',
  contacted: 'bg-yellow-100 text-yellow-700',
  qualified: 'bg-purple-100 text-purple-700',
  proposal_sent: 'bg-orange-100 text-orange-700',
  negotiating: 'bg-indigo-100 text-indigo-700',
  won: 'bg-green-100 text-green-700',
  lost: 'bg-gray-100 text-gray-700',
};

const statusLabels: Record<string, string> = {
  new: 'Neu',
  contacted: 'Kontaktiert',
  qualified: 'Qualifiziert',
  proposal_sent: 'Angebot gesendet',
  negotiating: 'In Verhandlung',
  won: 'Gewonnen',
  lost: 'Verloren',
};

export default function LeadsPage() {
  const t = useTranslations('leads');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const loadLeads = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Sample data
      const sampleLeads: Lead[] = [
        { id: '1', business_name: 'Café Hamburg', contact_name: 'Hans Müller', contact_email: 'hans@cafe-hamburg.de', contact_phone: '+49 170 123 4567', status: 'new', source: 'website', city: 'Hamburg', created_at: '2024-07-18' },
        { id: '2', business_name: 'Restaurant Sternenhimmel', contact_name: 'Maria Schmidt', contact_email: 'info@sternenhimmel.de', contact_phone: '+49 170 234 5678', status: 'qualified', source: 'referral', city: 'Hamburg', created_at: '2024-07-17' },
        { id: '3', business_name: 'Boutique Elite', contact_name: 'Thomas Weber', contact_email: 'thomas@boutique-elite.de', contact_phone: null, status: 'proposal_sent', source: 'instagram', city: 'Bremen', created_at: '2024-07-16' },
        { id: '4', business_name: 'Hotel Nordlicht', contact_name: 'Anna Fischer', contact_email: 'anna@nordlicht-hotel.de', contact_phone: '+49 170 345 6789', status: 'negotiating', source: 'google', city: 'Hamburg', created_at: '2024-07-15' },
        { id: '5', business_name: 'Friseur Salon Max', contact_name: 'Max Wagner', contact_email: 'max@salon-max.de', contact_phone: '+49 170 456 7890', status: 'won', source: 'website', city: 'Kiel', created_at: '2024-07-14' },
        { id: '6', business_name: 'Optik Petersen', contact_name: 'Peter Petersen', contact_email: 'info@optik-petersen.de', contact_phone: null, status: 'contacted', source: 'facebook', city: 'Hamburg', created_at: '2024-07-13' },
        { id: '7', business_name: 'Blumenhaus Rosen', contact_name: 'Sophie Rosen', contact_email: 'sophie@blumen-rosen.de', contact_phone: '+49 170 567 8901', status: 'new', source: 'website', city: 'Lübeck', created_at: '2024-07-12' },
        { id: '8', business_name: 'Zahnarzt Dr. Klein', contact_name: 'Dr. Klaus Klein', contact_email: 'info@dr-klein.de', contact_phone: '+49 170 678 9012', status: 'qualified', source: 'referral', city: 'Hamburg', created_at: '2024-07-11' },
        { id: '9', business_name: 'Autowerkstatt Schulz', contact_name: 'Michael Schulz', contact_email: 'info@autowerkstatt-schulz.de', contact_phone: null, status: 'lost', source: 'google', city: 'Bremen', created_at: '2024-07-10' },
        { id: '10', business_name: 'Reisebüro Traumreisen', contact_name: 'Laura Traum', contact_email: 'laura@traumreisen.de', contact_phone: '+49 170 789 0123', status: 'proposal_sent', source: 'instagram', city: 'Hamburg', created_at: '2024-07-09' },
      ];

      setLeads(sampleLeads);
      setIsLoading(false);
    };

    loadLeads();
  }, []);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.business_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.contact_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.contact_email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
  const paginatedLeads = filteredLeads.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900">
            {t('title')}
          </h1>
          <p className="text-gray-600 mt-1">{t('subtitle')}</p>
        </div>

        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          {t('new')}
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Suchen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>

        <div className="flex items-center gap-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input w-auto"
          >
            <option value="all">{t('filters.all')}</option>
            <option value="new">{statusLabels.new}</option>
            <option value="contacted">{statusLabels.contacted}</option>
            <option value="qualified">{statusLabels.qualified}</option>
            <option value="proposal_sent">{statusLabels.proposal_sent}</option>
            <option value="negotiating">{statusLabels.negotiating}</option>
            <option value="won">{statusLabels.won}</option>
            <option value="lost">{statusLabels.lost}</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="table-header">{t('table.name')}</th>
                <th className="table-header">{t('table.company')}</th>
                <th className="table-header">{t('table.email')}</th>
                <th className="table-header">{t('table.phone')}</th>
                <th className="table-header">{t('table.status')}</th>
                <th className="table-header">{t('table.source')}</th>
                <th className="table-header">{t('table.created')}</th>
                <th className="table-header text-right">{t('table.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                  <td className="table-cell">
                    <div className="font-medium text-gray-900">{lead.contact_name}</div>
                  </td>
                  <td className="table-cell">
                    <div>{lead.business_name}</div>
                    <div className="text-xs text-gray-500">{lead.city}</div>
                  </td>
                  <td className="table-cell">
                    <a
                      href={`mailto:${lead.contact_email}`}
                      className="text-primary-600 hover:text-primary-700 flex items-center gap-1"
                    >
                      <Mail className="w-4 h-4" />
                      {lead.contact_email}
                    </a>
                  </td>
                  <td className="table-cell">
                    {lead.contact_phone ? (
                      <a
                        href={`tel:${lead.contact_phone}`}
                        className="text-gray-600 hover:text-primary-600 flex items-center gap-1"
                      >
                        <Phone className="w-4 h-4" />
                        {lead.contact_phone}
                      </a>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="table-cell">
                    <span className={`badge ${statusColors[lead.status]}`}>
                      {statusLabels[lead.status]}
                    </span>
                  </td>
                  <td className="table-cell capitalize">{lead.source}</td>
                  <td className="table-cell">
                    {new Date(lead.created_at).toLocaleDateString('de-DE')}
                  </td>
                  <td className="table-cell text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Ansehen">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Bearbeiten">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg transition-colors" title="Löschen">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Zeige {(currentPage - 1) * itemsPerPage + 1} bis{' '}
            {Math.min(currentPage * itemsPerPage, filteredLeads.length)} von{' '}
            {filteredLeads.length} Leads
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-medium ${
                  currentPage === page
                    ? 'bg-primary-600 text-white'
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
