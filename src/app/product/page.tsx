"use client";
import { useState } from "react";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";
import Image from "next/image";

export default function ProductPage() {
  const { t, language } = useLanguage();
  const [selectedProductId, setSelectedProductId] = useState<string | null>(products[0]?.id || null);
  
  const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];
  
  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);
  
  return (
    <Container>
      <div className="py-16">
        {/* Product Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'en' ? 'Our Products' : '我们的产品'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            {language === 'en' 
              ? 'Explore our wide range of high-quality wax products and candles' 
              : '探索我们广泛的高品质蜡制品和蜡烛产品'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Left Sidebar - Navigation */}
          <div className="w-80 flex-shrink-0 hidden lg:block">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {language === 'en' ? 'Product Categories' : '产品类别'}
                </h2>
                
                <div className="space-y-6">
                  {Object.entries(groupedProducts).map(([category, categoryProducts]) => {
                    // Get the translated category from the first product in this category
                    const translatedCategory = categoryProducts[0].categoryZh;
                    
                    return (
                      <div key={category}>
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                          {language === 'en' ? category : translatedCategory}
                        </h3>
                      <div className="space-y-2">
                        {categoryProducts.map((product) => (
                          <button
                            key={product.id}
                            onClick={() => setSelectedProductId(product.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                              selectedProductId === product.id
                                ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-l-4 border-indigo-600 dark:border-indigo-400'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }`}
                          >
                            <span className="font-medium block truncate">
                              {language === 'en' ? product.name : product.nameZh}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="flex-1 min-w-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">

              {/* Product Information */}
              <div className="p-8">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 dark:bg-indigo-900/50 dark:text-indigo-300 rounded-full uppercase tracking-wide">
                    {language === 'en' ? selectedProduct.category : selectedProduct.categoryZh}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {language === 'en' ? selectedProduct.name : selectedProduct.nameZh}
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {language === 'en' ? selectedProduct.description : selectedProduct.descriptionZh}
                </p>

                              {/* Product Images */}
              {selectedProduct.images && selectedProduct.images.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    {language === 'en' ? 'Product Images' : '产品图片'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {selectedProduct.images.map((image, index) => (
                      <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={image}
                          alt={`${language === 'en' ? selectedProduct.name : selectedProduct.nameZh} - ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

                {/* Product Specifications */}
                {selectedProduct.specifications && selectedProduct.specifications.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                      {language === 'en' ? 'Product Specifications' : '产品规格'}
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedProduct.specifications.map((spec, index) => (
                          <div key={index} className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                            <span className="font-medium text-gray-700 dark:text-gray-300">
                              {language === 'en' ? spec.label : (spec.labelZh || spec.label)}:
                            </span>
                            <span className="text-gray-900 dark:text-white text-right">
                              {language === 'en' ? spec.value : (spec.valueZh || spec.value)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Additional Information - Only for Dental Wax Disc */}
                {selectedProduct.id === 'wax-disc' && (
                  <div className="mt-12">
                    <SectionTitle
                      preTitle={language === 'en' ? 'Premium Quality' : '优质品质'}
                      title={language === 'en' ? 'Top Class Quality at Competitive Prices' : '顶级品质，价格有竞争力'}
                    >
                      {language === 'en'
                        ? 'Our machinable wax discs are specifically designed for dental CAD/CAM systems, offering excellent machinability and precision for crown and bridge work, tooth models, casting, and carving applications.'
                        : '我们的可加工蜡盘专为齿科CAD/CAM系统设计，为冠桥工作、牙齿模型、铸造和雕刻应用提供出色的可加工性和精密度。'}
                    </SectionTitle>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-indigo-50 dark:bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {language === 'en' ? 'Ready to Order?' : '准备订购？'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {language === 'en'
                ? 'Contact us for custom sizes and bulk orders. We offer competitive pricing and reliable delivery worldwide.'
                : '联系我们获取定制尺寸和批量订单。我们在全球范围内提供具有竞争力的价格和可靠的交付。'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-block px-8 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                {language === 'en' ? 'Request Quote' : '请求报价'}
              </a>
              <a
                href="/company"
                className="inline-block px-8 py-3 text-indigo-600 bg-white border border-indigo-600 rounded-md hover:bg-indigo-50 transition-colors duration-200 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-900/20"
              >
                {language === 'en' ? 'Learn More About Us' : '了解更多关于我们'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
