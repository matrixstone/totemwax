"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ProductCards = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentResinImageIndex, setCurrentResinImageIndex] = useState(0);
  
  const dentalWaxImages = [
    { src: "/img/dental_wax_disc_1.JPG", alt: "Blue Dental Wax Disc", labelKey: "images.dental.blue" },
    { src: "/img/dental_wax_disc_2.JPG", alt: "Blue Dental Wax Disc", labelKey: "images.dental.blue" },
    { src: "/img/dental_wax_disc_3.JPG", alt: "Blue, White and Gray Dental Wax Disc", labelKey: "images.dental.blue_white_gray" },
    { src: "/img/dental_wax_disc_4.JPG", alt: "Blue, White and Gray Dental Wax Disc", labelKey: "images.dental.blue_white_gray" },
    { src: "/img/dental_wax_disc_5.JPG", alt: "Blue, White and Gray Dental Wax Disc", labelKey: "images.dental.blue_white_gray" },
    { src: "/img/dental_wax_disc_6.JPG", alt: "Gray Dental Wax Disc", labelKey: "images.dental.gray" },
  ];

  const resinImages = [
    { src: "/img/resin_1.jpg", alt: "PMMA Resin Disc 1", labelKey: "images.resin.transparent" },
    { src: "/img/resin_2.jpg", alt: "PMMA Resin Disc 2", labelKey: "images.resin.vita_colors" },
    { src: "/img/resin_3.jpg", alt: "PMMA Resin Disc 3", labelKey: "images.resin.pink" },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === dentalWaxImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [dentalWaxImages.length]);

  // Auto-play functionality for resin images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentResinImageIndex((prevIndex) =>
        prevIndex === resinImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [resinImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? dentalWaxImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === dentalWaxImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousResin = () => {
    setCurrentResinImageIndex((prevIndex) =>
      prevIndex === 0 ? resinImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextResin = () => {
    setCurrentResinImageIndex((prevIndex) =>
      prevIndex === resinImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="space-y-16 max-w-6xl mx-auto">
      {/* Dental Wax Discs Row */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content - Left Side */}
        <div className="space-y-6">
          <div>
                <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('products.dental.title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {t('products.dental.description')}
                </p>
            
            {/* Key Features */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('products.dental.colors')}</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('products.dental.colors.desc')}
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('products.dental.specs')}</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <div>• {t('products.dental.specs.hardness')}</div>
                  <div>• {t('products.dental.specs.softening')}</div>
                  <div>• {t('products.dental.specs.melting')}</div>
                  <div>• {t('products.dental.specs.density')}</div>
                  <div>• {t('products.dental.specs.gray')}</div>
                  <div>• {t('products.dental.specs.toughness')}</div>
                  <div>• {t('products.dental.specs.cutability')}</div>
                  <div>• {t('products.dental.specs.shrinkage')}</div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('products.dental.applications')}</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('products.dental.applications.desc')}
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('products.dental.sizes')}</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('products.dental.sizes.desc')}
                </p>
              </div>
              
              {/* <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Applications</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Milling of dental CAD/CAM systems, crown and bridge work, tooth model creation, casting, and precision carving
                </p>
              </div> */}
            </div>
          </div>
          {/* <Link
            href="/product"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-md"
          >
            View Full Specifications
          </Link> */}
        </div>
        
        {/* Product Images - Right Side */}
        <div className="flex justify-center">
          <div className="relative p-8 from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800 rounded-2xl">
            {/* Carousel Container */}
            <div className="relative w-96 h-96 flex items-center justify-center">
              {/* Main Image */}
              <div className="bg-white rounded-lg p-6">
                <div className="w-80 h-80 relative mb-4">
                  <Image
                    src={dentalWaxImages[currentImageIndex].src}
                    alt={dentalWaxImages[currentImageIndex].alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-xl text-gray-600 text-center font-medium">
                  {t(dentalWaxImages[currentImageIndex].labelKey)}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
                aria-label="Previous image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
                aria-label="Next image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {dentalWaxImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? 'bg-indigo-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Wax Products Row */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content - Left Side */}
        <div className="space-y-6">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('products.additional.title')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {t('products.additional.description')}
            </p>

            {/* Technical Specifications */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('products.additional.specs')}</h4>
                <div className="grid grid-cols-1 gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <div>• {t('products.additional.specs.composition')}</div>
                  <div>• {t('products.additional.specs.colors')}</div>
                  <div>• {t('products.additional.specs.hardness')}</div>
                  <div>• {t('products.additional.specs.density')}</div>
                  <div>• {t('products.additional.specs.tensile')}</div>
                  <div>• {t('products.additional.specs.flexural')}</div>
                  <div>• {t('products.additional.specs.modulus')}</div>
                  <div>• {t('products.additional.specs.toughness')}</div>
                  <div>• {t('products.additional.specs.machinability')}</div>
                  <div>• {t('products.additional.specs.ash')}</div>
                  <div>• {t('products.additional.specs.shrinkage')}</div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('products.dental.sizes')}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {t('products.additional.specs.sizes')}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{t('products.additional.applications')}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {t('products.additional.applications.desc')}
                </p>
              </div>
            </div>
          </div>
          <Link
            href="/product"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-md"
          >
            {t('products.learnMore')}
          </Link>
        </div>

        {/* Product Images - Right Side */}
        <div className="flex justify-center">
          <div className="relative p-8 from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800 rounded-2xl">
            {/* Carousel Container */}
            <div className="relative w-96 h-96 flex items-center justify-center">
              {/* Main Image */}
              <div className="bg-white rounded-lg p-6">
                <div className="w-80 h-80 relative mb-4">
                  <Image
                    src={resinImages[currentResinImageIndex].src}
                    alt={resinImages[currentResinImageIndex].alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-xl text-gray-600 text-center font-medium">
                  {t(resinImages[currentResinImageIndex].labelKey)}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPreviousResin}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
                aria-label="Previous resin image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNextResin}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
                aria-label="Next resin image"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {resinImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentResinImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentResinImageIndex
                      ? 'bg-indigo-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to resin image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};