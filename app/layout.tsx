
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { KeyboardNavigation } from '@/components/keyboard-navigation';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Presentation Template - Interactive Slides',
  description: 'A modern, interactive presentation template built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white h-1080px w-1920px`}>
        <Suspense fallback={null}>
          <KeyboardNavigation />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
