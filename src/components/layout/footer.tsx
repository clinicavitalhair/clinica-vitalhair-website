import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 flex justify-center space-x-6">
          <Link href="#" aria-label="Facebook" className="hover:opacity-75 transition-opacity">
            <Facebook size={24} />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
            <Instagram size={24} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity">
            <Linkedin size={24} />
          </Link>
        </div>
        <div className="mb-2 text-sm">
          <Link href="/privacy-policy" className="hover:underline">Política de Privacidad</Link>
          <span className="mx-2">|</span>
          <Link href="/terms-of-service" className="hover:underline">Términos de Servicio</Link>
        </div>
        <p className="text-sm">
          © {currentYear} Clínica Vital Hair. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
