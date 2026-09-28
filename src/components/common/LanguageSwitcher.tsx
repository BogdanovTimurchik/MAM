import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { LanguageCode } from '../../i18n/types';

interface LanguageSwitcherProps {
  variant?: 'header' | 'footer' | 'compact';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'header',
  className = ''
}) => {
  const { language, setLanguage, languages, currentLanguageOption } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (code: LanguageCode) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button */}
      <button
        id="language-switcher-trigger"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`flex items-center gap-2 rounded-xl transition-all font-medium text-xs ${
          variant === 'header'
            ? 'px-3 py-2 bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200'
            : variant === 'compact'
            ? 'px-2.5 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
            : 'px-3 py-2 bg-white/10 hover:bg-white/20 text-slate-200 border border-white/20'
        }`}
      >
        <span className="text-base leading-none select-none">{currentLanguageOption.flag}</span>
        <span className="font-semibold">{currentLanguageOption.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-500 ${
            isOpen ? 'rotate-180 text-emerald-600' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 mt-1.5 w-44 rounded-2xl bg-white border border-slate-200 shadow-xl py-1.5 z-50 text-xs animate-in fade-in slide-in-from-top-1 duration-150"
        >
          <div className="px-3 py-1.5 border-b border-slate-100 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-emerald-600" />
            <span>Выберите язык</span>
          </div>

          <div className="py-1">
            {languages.map((item) => {
              const isSelected = item.code === language;
              return (
                <button
                  key={item.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(item.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-left transition-colors ${
                    isSelected
                      ? 'bg-emerald-50 text-emerald-900 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none select-none">{item.flag}</span>
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-900 leading-snug">{item.label}</span>
                      <span className="text-[10px] text-slate-400 font-normal leading-tight">{item.nativeName}</span>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
