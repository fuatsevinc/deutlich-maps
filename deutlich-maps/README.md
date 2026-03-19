# Deutlich Maps

**Lokale Sichtbarkeit Agentur Platform** - Maximieren Sie Ihre digitale Präsenz in Hamburg und Norddeutschland.

## Features

- 🌐 **Mehrsprachig**: Deutsch, Englisch, Türkisch
- 📊 **Admin Dashboard**: Lead-Verwaltung, Kunden, Projekte, Aufgaben
- 👤 **Kundenportal**: Projektverfolgung, Berichte, Support
- 🤖 **Automatisierung**: n8n Workflows für Lead-Management
- 📱 **Responsive**: Optimiert für alle Geräte

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Supabase
- **Database**: PostgreSQL (Supabase)
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage
- **Automation**: n8n
- **Email**: Resend

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Supabase account
- n8n account (for automation)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/deutlich-maps.git
cd deutlich-maps

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Fill in your Supabase credentials in .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Database Setup

1. Create a Supabase project
2. Run the migration SQL in `supabase/migrations/001_initial_schema.sql`
3. Update `.env.local` with your Supabase credentials

### n8n Setup

1. Import workflows from `n8n/workflows/` folder
2. Configure Supabase and Resend credentials
3. Set up webhook URLs in your environment

## Project Structure

```
deutlich-maps/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Localized pages
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── services/      # Services page
│   │   │   ├── packages/      # Packages page
│   │   │   ├── about/         # About page
│   │   │   ├── contact/       # Contact page
│   │   │   ├── analysis/      # Free analysis form
│   │   │   ├── admin/         # Admin dashboard
│   │   │   └── portal/        # Customer portal
│   │   └── api/               # API routes
│   ├── components/            # React components
│   └── lib/                   # Utilities
├── messages/                  # i18n translation files
├── n8n/                       # n8n workflows
└── supabase/                  # Database migrations
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual Deployment

```bash
npm run build
npm start
```

## Languages

| Code | Language | Status |
|------|----------|--------|
| de | Deutsch | Primary |
| en | English | Active |
| tr | Türkçe | Active |

## License

© 2024 Deutlich Maps. Alle Rechte vorbehalten.

---

Made with ❤️ in Hamburg, Germany
