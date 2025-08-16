import { FoodPromartLogo } from '../assets/svg/index.js';
import LanguageSwitch from './LanguageSwitch.jsx';
import { useI18n } from '../hooks/useI18n.js';

export default function Header() {
  const { t } = useI18n();
  return (
    <header className="flex items-center mb-6">
      <img src={FoodPromartLogo} alt="Food Promart" className="h-10" />
      <div className="flex-1 text-center px-4">
        <h1 className="font-semibold">
          {t('header.title')}
        </h1>
        <a
          href="mailto:support@foodpromarts.com"
          className="text-sm text-primary underline"
        >
          {t('header.subtitle')}
        </a>
      </div>
      <div className="w-px h-10 bg-gray-200" />
      <div className="pl-4">
        <LanguageSwitch />
      </div>
    </header>
  );
}
