"use client";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProductPage() {
  const { t } = useLanguage();
  
  return (
    <Container>
      <div className="py-16">
        {/* Product Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Machinable Wax Discs for Dental CAD/CAM Systems
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Independently developed and produced by Qingdao Totem Candle Industry Co., Ltd. using internationally advanced formula and imported raw materials.
          </p>
        </div>

        {/* Product Overview */}
        <SectionTitle
          preTitle="Premium Quality"
          title="Top Class Quality at Competitive Prices"
        >
          Our machinable wax discs are specifically designed for dental CAD/CAM systems, offering excellent machinability and precision for crown and bridge work, tooth models, casting, and carving applications.
        </SectionTitle>

        {/* Product Specifications */}
        <div className="mb-16">
          <SectionTitle
            preTitle="Technical Specifications"
            title="Wax Disc Characteristics"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Physical Properties */}
            {/* <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Physical Properties
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Colour</span>
                  <span className="text-gray-600 dark:text-gray-400">Pure white (translucent), blue, ceramic white</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Hardness</span>
                  <span className="text-gray-600 dark:text-gray-400">55-60 (Shore "D" Scale)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Softening Point</span>
                  <span className="text-gray-600 dark:text-gray-400">102°C</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Drop Melting Point</span>
                  <span className="text-gray-600 dark:text-gray-400">112°C</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Density</span>
                  <span className="text-gray-600 dark:text-gray-400">0.89-0.93</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Gray</span>
                  <span className="text-gray-600 dark:text-gray-400">0.01%</span>
                </div>
              </div>
            </div> */}

            {/* Performance Characteristics */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Performance Characteristics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Toughness</span>
                  <span className="text-gray-600 dark:text-gray-400">Very Good</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Cutability</span>
                  <span className="text-gray-600 dark:text-gray-400">Excellent Machinability</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Shrinkage Rate</span>
                  <span className="text-gray-600 dark:text-gray-400">5%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Applications</span>
                  <span className="text-gray-600 dark:text-gray-400">{t('products.dental.applications.desc')}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Size Options</span>
                  <span className="text-gray-600 dark:text-gray-400">OD 98mm, 98.5mm, 100mm, 112mm, 150mm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Thickness</span>
                  <span className="text-gray-600 dark:text-gray-400">10-30mm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Step Options</span>
                  <span className="text-gray-600 dark:text-gray-400">With step or no step</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-700 dark:text-gray-300">Custom Sizes</span>
                  <span className="text-gray-600 dark:text-gray-400">Available on request</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <SectionTitle
          preTitle="Applications"
          title="Dental CAD/CAM System Applications"
        >
          Our machinable wax discs are specifically designed for precision work in dental applications, providing excellent results for:
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Crown & Bridge</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Precision milling for crown and bridge work</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Tooth Models</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Detailed tooth model creation and prototyping</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Casting</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">High-precision casting applications</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Carving</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Fine detail carving and machining</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-indigo-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to Order?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Contact us for custom sizes and bulk orders. We offer competitive pricing and reliable delivery worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-block px-8 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                Request Quote
              </a>
              <a
                href="/company"
                className="inline-block px-8 py-3 text-indigo-600 bg-white border border-indigo-600 rounded-md hover:bg-indigo-50 transition-colors duration-200"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
