"use client";
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
          language === 'en'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
        }`}
      >
        EN
      </button>
      <span className="text-gray-400 dark:text-gray-500">|</span>
      <button
        onClick={() => setLanguage('zh')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
          language === 'zh'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
        }`}
      >
        中文
      </button>
    </div>
  );
};
