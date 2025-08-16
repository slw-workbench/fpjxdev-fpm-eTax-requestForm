import { useState } from 'react';
import { useI18n } from '../hooks/useI18n.js';
import { FlagTH, FlagEN, ChevronDown } from '../assets/svg/index.js';

export default function LanguageSwitch() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const currentFlag = lang === 'th' ? FlagTH : FlagEN;

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center gap-1"
        onClick={() => setOpen((o) => !o)}
      >
        <img src={currentFlag} alt={lang} className="w-5 h-5" />
        <img src={ChevronDown} alt="toggle" className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-md">
          <button
            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-left"
            onClick={() => {
              setLang('th');
              setOpen(false);
            }}
          >
            <img src={FlagTH} alt="TH" className="w-5 h-5" /> TH
          </button>
          <button
            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-left"
            onClick={() => {
              setLang('en');
              setOpen(false);
            }}
          >
            <img src={FlagEN} alt="EN" className="w-5 h-5" /> EN
          </button>
        </div>
      )}
    </div>
  );
}
