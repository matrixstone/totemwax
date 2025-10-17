"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export const ProductCards = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dentalWaxImages = [
    { src: "/img/dental_wax_disc_1.JPG", alt: "Blue Dental Wax Disc", label: "Blue" },
    { src: "/img/dental_wax_disc_2.JPG", alt: "White Dental Wax Disc", label: "White" },
    { src: "/img/dental_wax_disc_3.JPG", alt: "Ceramic Dental Wax Disc", label: "Ceramic" },
    { src: "/img/dental_wax_disc_4.JPG", alt: "Brown Dental Wax Disc", label: "Brown" },
    { src: "/img/dental_wax_disc_5.JPG", alt: "Gray Dental Wax Disc", label: "Gray" },
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

  return (
    <div className="space-y-16 max-w-6xl mx-auto">
      {/* Dental Wax Discs Row */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content - Left Side */}
        <div className="space-y-6">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Dental Wax Discs
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Independently developed and produced by Qingdao Totem Candle Industry Co., Ltd. using internationally advanced formula and imported raw materials. Our machinable wax discs offer top-class quality at competitive prices.
            </p>
            
            {/* Key Features */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Available Colors</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Pure white (translucent), blue, ceramic white, brown, and gray options
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Technical Specifications</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <div>• Hardness: 55-60 (Shore &quot;D&quot; Scale)</div>
                  <div>• Softening Point: 102°C</div>
                  <div>• Drop Melting Point: 112°C</div>
                  <div>• Density: 0.89-0.93</div>
                  <div>• Gray: 0.01%</div>
                  <div>• Toughness: Very Good</div>
                  <div>• Cutability: Excellent Machinability</div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Size Options</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  OD: 98mm, 98.5mm, 100mm, 112mm | Thickness: 10-30mm | With step or no step options available
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
                <div className="w-72 h-72 relative mb-4">
                  <Image
                    src={dentalWaxImages[currentImageIndex].src}
                    alt={dentalWaxImages[currentImageIndex].alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-xl text-gray-600 text-center font-medium">
                  {dentalWaxImages[currentImageIndex].label} Wax Disc
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
              Additional Wax Products
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Household candles, craft candles, industrial machinable wax, solid lubricants, and specialized textile wax rings for various applications.
            </p>
          </div>
          <Link
            href="/company"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-md"
          >
            Learn more
          </Link>
        </div>
        
        {/* Product Images - Right Side */}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-4 p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded-2xl">
            {/* Candle Images */}
            <div className="bg-white rounded-lg p-3 shadow-md">
              <div className="w-12 h-16 bg-orange-200 rounded-t-lg mb-2"></div>
              <p className="text-xs text-gray-600 text-center font-medium">Candle</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-md">
              <div className="w-8 h-10 bg-yellow-200 rounded-t-lg mb-2"></div>
              <p className="text-xs text-gray-600 text-center font-medium">Tealight</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-md">
              <div className="w-12 h-8 bg-gray-200 rounded mb-2"></div>
              <p className="text-xs text-gray-600 text-center font-medium">Wax Ring</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-md">
              <div className="w-10 h-10 bg-blue-200 rounded mb-2"></div>
              <p className="text-xs text-gray-600 text-center font-medium">Lubricant</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-md">
              <div className="w-8 h-12 bg-green-200 rounded-t-lg mb-2"></div>
              <p className="text-xs text-gray-600 text-center font-medium">Craft</p>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-md">
              <div className="w-10 h-8 bg-purple-200 rounded mb-2"></div>
              <p className="text-xs text-gray-600 text-center font-medium">Industrial</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};