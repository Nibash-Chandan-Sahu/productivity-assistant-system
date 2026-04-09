## Productivity Assistant Platform 

Your personal productivity assistant. Chat naturally to schedule meetings, draft emails, and set reminders - all synced with your Google Calendar and Gmail.

## Tech Stack

Next.js 15 · TypeScript · Auth.js · Prisma · Supabase · Tailwind CSS · Google APIs

## Quick Start

```bash
# Install
npm install

# Setup env (copy .env.example to .env.local and fill values)
cp .env.example .env.local

# Database
npm run generate
npm run db-push

# Dev server
npm run dev

## Environment Variables

AUTH_SECRET=                 # npx auth secret
DATABASE_URL=                # Supabase pooler (port 6543)
DIRECT_URL=                  # Supabase direct (port 5432)
NEXT_PUBLIC_SUPABASE_URL=    # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=  # Supabase anon key
AUTH_GOOGLE_ID=              # Google Cloud OAuth
AUTH_GOOGLE_SECRET=          # Google Cloud OAuth

## Deploy to Vercel
1. Push to GitHub
2. Import at vercel.com/new
3. Add env vars
4. Update Google OAuth redirect URIs with production domain

## Features
AI Chat — Talk naturally
Smart Scheduling — "Schedule team sync tomorrow 2pm" → Google Calendar event
Email Assistant — Draft and send emails via chat
Reminders — Set and manage reminders effortlessly
Secure Sync — Google OAuth with automatic token refresh
