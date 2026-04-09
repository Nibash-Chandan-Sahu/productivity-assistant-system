import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const BRAND = {
  name: 'MyAssistant',
  logoSrc: '/logo.png',
  tagline: 'Productivity Platform For Modern Professionals',
  description: 'Chat with your personal assistant to schedule meetings, draft emails, and set reminders. All synced with your Google Calendar and Gmail automatically.',
};

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-background to-primary/5 flex flex-col">
      {/* Navigation - Full Width */}
      <nav className="w-full border-b bg-background/50 backdrop-blur sticky top-0 z-50">
        <div className="w-full px-6 lg:px-12 h-16 flex items-center">
          {/* Brand Logo & Name - Left Top */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative flex-shrink-0">
              <Image 
                src={BRAND.logoSrc} 
                alt={BRAND.name} 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <span className="font-bold text-xl tracking-tight">{BRAND.name}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Width Centered */}
      <main className="flex-1 w-full flex items-center justify-center px-6 lg:px-12 py-20">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
            {BRAND.tagline}
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {BRAND.description}
          </p>
          
          {/* Dashboard Button */}
          <Link href="/dashboard">
            <Button size="lg" className="px-10 py-6 text-lg">
              Dashboard
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer - Full Width */}
      <footer className="w-full border-t py-8">
        <div className="w-full px-6 lg:px-12 text-center text-sm text-muted-foreground">
          <p>© 2024 {BRAND.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}