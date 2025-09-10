'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Phone,
  CheckCircle,
  List,
  Menu as MenuIcon,
  User,
  CalendarDays,
  Tag,
  Instagram,
  MapPin,
  Mail,
  MessageCircle,
} from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedTabs, type TabItem } from '@/components/ui/animated-tabs';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const navLinksData = [
    { id: 'services', href: '#services', label: 'Tratamientos', icon: <List /> },
    { id: 'meet-doctor', href: '#meet-doctor', label: 'Equipo', icon: <User /> },
    { id: 'our-approach', href: '#our-approach', label: 'Por Qué Elegirnos', icon: <CheckCircle /> },
    { id: 'pricing', href: '#pricing', label: 'Precios', icon: <Tag /> },
    { id: 'testimonials', href: '#testimonials', label: 'Testimonios', icon: <CheckCircle /> },
  ];

  const animatedTabsItems: TabItem[] = navLinksData.map(link => ({
    id: link.id,
    href: link.href,
    label: link.label,
  }));

  const contactTel = "+34663492192";
  const contactTelDisplay = "663 49 21 92";

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 24);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Iconos de Contacto - MEJORA AGREGADA */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <a
          href="https://instagram.com/clinicavitalhair"
          target="_blank"
          rel="noopener noreferrer"
          title="Síguenos en Instagram"
          className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors shadow-lg"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://maps.google.com/?q=Via+Augusta+1-3+Barcelona"
          target="_blank"
          rel="noopener noreferrer"
          title="Ver ubicación en Google Maps"
          className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
        >
          <MapPin className="w-5 h-5" />
        </a>
        <a
          href={`tel:${contactTel}`}
          title={`Llamar al ${contactTelDisplay}`}
          className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg"
        >
          <Phone className="w-5 h-5" />
        </a>
        <a
          href={`https://wa.me/34663492192`}
          target="_blank"
          rel="noopener noreferrer"
          title={`WhatsApp al ${contactTelDisplay}`}
          className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href="mailto:clinicavitalhair@gmail.com"
          title="Enviar email a clinicavitalhair@gmail.com"
          className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 w-full shadow-none transition-all duration-300 ease-in-out",
          scrolled
            ? "h-16 backdrop-blur-md bg-white/70 border-b border-primary/10"
            : "h-20 bg-white border-b border-transparent"
         )}
      >
        <div className={cn(
          "container mx-auto relative flex items-center p-4 h-full",
          "justify-center md:justify-between"
        )}>
          {/* Mobile Menu Trigger */}
          <div className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 z-20">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    "transition-all duration-300 ease-in-out text-secondary border-secondary/50 hover:bg-secondary/10",
                    scrolled ? "h-8 w-8" : "h-9 w-9"
                  )}
                >
                  <MenuIcon className={cn("transition-all duration-300 ease-in-out", scrolled ? "h-4 w-4" : "h-5 w-5")} />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] p-0 flex flex-col bg-gradient-to-b from-brand-sage-50 to-white">
                <div className="p-4 border-b border-primary/10">
                  <Link href="/" className="inline-block hover:opacity-90 hover:scale-[1.02] hover:drop-shadow-md transition-all duration-300 ease-out">
                    <Image
                      src="/image/Logo_real.JPG"
                      alt="Clínica Vital Hair"
                      width={173}
                      height={48}
                      data-ai-hint="clinic logo"
                      className="h-12 w-auto"
                    />
                  </Link>
                </div>
                <nav className="flex-grow p-4 space-y-2">
                  {navLinksData.map((link) => (
                    <SheetTrigger asChild key={`mobile-${link.id}`}>
                      <Link
                        href={link.href}
                        className="flex items-center font-serifLuxury text-lg text-[#474a43] hover:text-brand-gold transition-colors py-2 px-2 rounded-md"
                      >
                        {React.cloneElement(link.icon, { className: "mr-3 h-5 w-5" })}
                        {link.label}
                      </Link>
                    </SheetTrigger>
                  ))}
                  <SheetTrigger asChild>
                    <a
                      href={`tel:${contactTel}`}
                      className="flex items-center font-serifLuxury text-lg text-[#474a43] hover:text-brand-gold transition-colors py-2 px-2 rounded-md"
                    >
                      <Phone className="mr-3 h-5 w-5" />
                      {contactTelDisplay}
                    </a>
                  </SheetTrigger>
                </nav>
                <div className="p-4 border-t border-primary/10 mt-auto">
                  <SheetTrigger asChild>
                    <Button
                      asChild
                      className="px-6 py-3 rounded-full font-serifLuxury bg-brand-charcoal text-white hover:bg-brand-gold transition-all w-full shadow-md hover:shadow-lg"
                    >
                      <Link href="#contact">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        Reserva tu consulta gratuita
                      </Link>
                    </Button>
                  </SheetTrigger>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 hover:opacity-90 hover:scale-[1.02] hover:drop-shadow-md transition-all duration-300 ease-out">
            <Image
              src="/image/Logo_real.JPG"
              alt="Clínica Vital Hair"
              width={180}
              height={50}
              priority
              data-ai-hint="clinic logo"
              className={cn(
                "w-auto max-h-12 transition-all duration-300 ease-in-out",
                scrolled ? "h-10 md:h-12" : "h-12 md:h-12"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <AnimatedTabs
              tabs={animatedTabsItems}
              initialActiveTabId={animatedTabsItems[0]?.id}
              className={cn(scrolled ? "py-1 px-3" : "py-2 px-4")}
              baseBackgroundColor="bg-transparent"
              baseBorderColor="border-transparent"
              activeTextColor="text-primary"
              inactiveTextColor="text-[#474a43]"
              linkClassName={cn(
                "flex items-center justify-center rounded-full font-serifLuxury text-lg h-8 leading-none transition-colors duration-300 ease-in-out",
                scrolled
                  ? "px-3 hover:text-brand-gold"
                  : "px-4 hover:text-brand-gold"
              )}
            />
          </nav>

          {/* CTA Button */}
          <Button
            asChild
            className={cn(
              "px-6 py-3 rounded-full font-serifLuxury bg-brand-charcoal text-white hover:bg-brand-gold transition-all hidden md:inline-flex"
            )}
          >
            <Link href="#contact">
              <CalendarDays className="mr-2 h-4 w-4" />
              Reserva tu consulta gratuita
            </Link>
          </Button>
        </div>
      </header>
    </>
  );
}
