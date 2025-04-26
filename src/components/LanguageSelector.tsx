import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative group">
      <button 
        className="flex items-center gap-2 bg-white p-2 rounded-full shadow-md hover:bg-neutral-50 transition-colors"
        aria-label="Select language"
      >
        <Globe size={20} className="text-primary-600" />
      </button>
      <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="py-1">
          <button
            className={`block px-4 py-2 text-sm text-left w-full hover:bg-primary-50 ${
              i18n.language === 'en' ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-700'
            }`}
            onClick={() => changeLanguage('en')}
          >
            English
          </button>
          <button
            className={`block px-4 py-2 text-sm text-left w-full hover:bg-primary-50 ${
              i18n.language === 'es' ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-700'
            }`}
            onClick={() => changeLanguage('es')}
          >
            Español
          </button>
          <button
            className={`block px-4 py-2 text-sm text-left w-full hover:bg-primary-50 ${
              i18n.language === 'vi' ? 'bg-primary-50 text-primary-700 font-medium' : 'text-neutral-700'
            }`}
            onClick={() => changeLanguage('vi')}
          >
            Tiếng Việt
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;