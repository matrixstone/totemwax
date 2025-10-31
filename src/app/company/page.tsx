"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProductCards } from "@/components/ProductCards";

export default function CompanyPage() {
  const { t } = useLanguage();
  
  return (
    <Container>
      <div className="py-16">
        {/* Company Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('company.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            {t('company.subtitle')}
          </p>
        </div>

        {/* Company Overview */}
        <SectionTitle
          preTitle={t('company.about.pretitle')}
          title={t('company.about.title')}
        >
          {t('company.about.description')}
        </SectionTitle>

        {/* Core Offerings */}
        <SectionTitle
          // preTitle="Our Products"
          title={t('products.title')}
        >
          {t('products.description')}
        </SectionTitle>
        <ProductCards />

        {/* Additional Products */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('company.products.additional.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('company.products.additional.description')}
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>{t('company.products.additional.list1')}</li>
              <li>{t('company.products.additional.list2')}</li>
              <li>{t('company.products.additional.list3')}</li>
              <li>{t('company.products.additional.list4')}</li>
              <li>{t('company.products.additional.list5')}</li>
              <li>{t('company.products.additional.list6')}</li>
              <li>{t('company.products.additional.list7')}</li>
              <li>{t('company.products.additional.list8')}</li>
            </ul>
          </div>
        </div>

        {/* Global Reach */}
        <SectionTitle
          preTitle={t('company.global.pretitle')}
          title={t('company.global.title')}
        >
          {t('company.global.description')}
        </SectionTitle>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-indigo-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('company.cta.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('company.cta.description')}
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              {t('company.cta.button')}
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
