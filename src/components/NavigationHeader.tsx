import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Menu, 
  X, 
  CalendarCheck
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './common/LanguageSwitcher';

interface NavigationHeaderProps {
  onOpenBooking: () => void;
  hasActiveBooking?: boolean;
  onViewBookingTicket?: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  onOpenBooking,
  hasActiveBooking,
  onViewBookingTicket
}) => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#courses', label: t.nav.courses },
    { href: '#methodology', label: t.nav.methodology },
    { href: '#calculator', label: t.nav.calculator },
    { href: '#roadmap', label: t.nav.roadmap },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#faq', label: t.nav.faq },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200 text-slate-800 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={scrollToTop}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-indigo-600 p-[1.5px] shadow-md shadow-emerald-500/10 group-hover:shadow-emerald-500/30 transition-all">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 group-hover:text-emerald-500 transition-colors" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-wider text-slate-900">
                  MARYAM<span className="text-emerald-600">.ACADEMY</span>
                </span>
                <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {t.nav.missionBadge}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-mono tracking-tight">
                {t.nav.tagline}
              </p>
            </div>
          </div>

          {/* Desktop Anchor Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/60 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Language Switcher & Booking CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Active Booking Ticket Indicator (if user booked) */}
            {hasActiveBooking && onViewBookingTicket && (
              <button
                onClick={onViewBookingTicket}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors shadow-sm"
              >
                <CalendarCheck className="w-4 h-4 text-emerald-600" />
                <span>Запись активна</span>
              </button>
            )}

            {/* Language Switcher */}
            <LanguageSwitcher variant="header" />

            {/* Primary Booking Button */}
            <button
              id="header-book-trial-cta"
              onClick={onOpenBooking}
              className="flex items-center gap-2 py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">{t.nav.bookTrialBtn}</span>
              <span className="sm:hidden">{t.nav.bookTrialShort}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-slate-200 animate-fade-in space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {hasActiveBooking && onViewBookingTicket && (
              <div className="pt-2 px-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onViewBookingTicket();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold"
                >
                  <CalendarCheck className="w-4 h-4 text-emerald-600" />
                  <span>Посмотреть вашу активную запись</span>
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </header>
  );
};
