import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LanguageCode, LanguageOption, SUPPORTED_LANGUAGES } from './types';
import { TRANSLATIONS, TranslationSchema } from './translations';
import { Course, FAQItem } from '../types';
import { getLocalizedCourses, getLocalizedFaqs } from './localizedData';

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: TranslationSchema;
  languages: LanguageOption[];
  currentLanguageOption: LanguageOption;
  localizedCourses: Course[];
  localizedFaqs: FAQItem[];
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'mam_selected_language';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (saved === 'ru' || saved === 'en' || saved === 'kz' || saved === 'uz')) {
        return saved as LanguageCode;
      }
    } catch {
      // ignore
    }
    return 'ru';
  });

  const setLanguage = (newLang: LanguageCode) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const currentLanguageOption =
    SUPPORTED_LANGUAGES.find((item) => item.code === language) || SUPPORTED_LANGUAGES[0];

  const t = TRANSLATIONS[language] || TRANSLATIONS.ru;
  const localizedCourses = getLocalizedCourses(language);
  const localizedFaqs = getLocalizedFaqs(language);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        languages: SUPPORTED_LANGUAGES,
        currentLanguageOption,
        localizedCourses,
        localizedFaqs
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
