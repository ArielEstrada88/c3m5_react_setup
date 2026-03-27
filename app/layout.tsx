import '../styles/globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'C3M5 Fitness',
  description: 'Track your workouts with C3M5',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 relative overflow-x-hidden">

        {/* ========================= */}
        {/* NAVBAR */}
        {/* ========================= */}
        <Navbar />

        {/* ========================= */}
        {/* BACKGROUND LAYER (FULL-VIEWPORT) */}
        {/* Place emojis / decorative background here to avoid max-width constraints */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Optional placeholder: your HomePage emoji layer can be injected here or elsewhere */}
        </div>

        {/* ========================= */}
        {/* MAIN CONTENT */}
        {/* Centered, constrained for readability */}
        <main className="mx-auto p-4 sm:p-6 md:p-8 lg:p-12 max-w-full">
          {children}
        </main>

      </body>
    </html>
  );
}