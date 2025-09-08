
import type { Metadata } from 'next';
import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700']
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif-display',
  weight: ['400'] 
});

export const metadata: Metadata = {
  title: 'Clínica Vital Hair - Transformación Capilar en Barcelona',
  description: 'Recupera la confianza con nuestros tratamientos de trasplante capilar FUE y mesoterapia. Seguimiento exclusivo por la Dra. María Gabriela Moreira.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        dmSans.variable,
        dmSerifDisplay.variable
      )}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
