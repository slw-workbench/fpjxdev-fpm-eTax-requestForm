import { createContext, useContext, useEffect, useState } from 'react';
import en from '../locales/en.js';
import th from '../locales/th.js';

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'th');

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const dict = lang === 'th' ? th : en;

  const t = (path) => path.split('.').reduce((o, k) => (o ? o[k] : ''), dict);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
