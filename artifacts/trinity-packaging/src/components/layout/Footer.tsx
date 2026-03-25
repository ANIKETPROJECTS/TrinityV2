import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { NAVIGATION_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent pt-20 pb-10 text-white border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/logo.png"
                alt="Trinity Packaging Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <span className="flex flex-col leading-none">
                <span className="font-['Barlow'] font-extrabold text-2xl uppercase tracking-tight text-white">
                  TRINITY
                </span>
                <span className="font-['Barlow'] font-normal text-[11px] uppercase tracking-[0.35em] text-white/80">
                  PACKAGING
                </span>
              </span>
            </div>
            <p className="text-white/70 font-sans leading-relaxed mb-6">
              Quality Packaging. Reliable Partnership. Manufacturers of Premium Corrugated Boxes & Duplex Cartons.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-semibold mb-6 border-b border-white/10 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.slice(1, 6).map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xl font-semibold mb-6 border-b border-white/10 pb-2 inline-block">
              Get In Touch
            </h4>
            <ul className="space-y-4 font-sans text-white/80">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span>M.No. 776, Near Gulve College, Vilholi, Nashik – 422 010, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <div className="flex flex-col">
                  <span>Chetan Salunke: +91 7972805720</span>
                  <span>Suresh Salunke: +91 9604095132 / 8805366525</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <a href="mailto:chetanent.666@gmail.com" className="hover:text-primary transition-colors">
                  chetanent.666@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© 2026 Trinity Packaging. All Rights Reserved.</p>
          <p>Designed for Quality & Durability.</p>
        </div>
      </div>
    </footer>
  );
}
