export type LanguageCode = 'ru' | 'en' | 'kz' | 'uz';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeName: string;
  flag: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'ru',
    label: 'Русский',
    nativeName: 'Русский',
    flag: '🇷🇺'
  },
  {
    code: 'en',
    label: 'English',
    nativeName: 'English (US)',
    flag: '🇬🇧'
  },
  {
    code: 'kz',
    label: 'Қазақша',
    nativeName: 'Қазақ тілі',
    flag: '🇰🇿'
  },
  {
    code: 'uz',
    label: 'O\'zbekcha',
    nativeName: 'O\'zbek tili',
    flag: '🇺🇿'
  }
];
