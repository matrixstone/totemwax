"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.company': 'Company',
    'nav.contact': 'Contact Us',
    
    // Hero Section
    'hero.title': 'Qingdao Totem Wax',
    'hero.description': 'Premier manufacturer specializing in high-quality dental wax discs. Located in the picturesque coastal city of Qingdao, Shandong, China, our advanced production facility is dedicated to crafting superior wax products for a wide range of applications.',
    
    // Products Section
    'products.title': 'Top Selling Products',
    'products.description': 'Discover our premium wax products designed for dental professionals and industrial applications worldwide.',
    'products.dental.title': 'Dental Wax Discs',
    'products.dental.description': 'Independently developed and produced by Qingdao Totem Candle Industry Co., Ltd. using internationally advanced formula and imported raw materials. Our machinable wax discs offer top-class quality at competitive prices.',
    'products.dental.colors': 'Available Colors',
    'products.dental.colors.desc': 'Pure white (translucent), blue, ceramic white, brown, and gray options',
    'products.dental.specs': 'Technical Specifications',
    'products.dental.specs.hardness': 'Hardness: 55-60 (Shore "D" Scale)',
    'products.dental.specs.softening': 'Softening Point: 102°C',
    'products.dental.specs.melting': 'Drop Melting Point: 112°C',
    'products.dental.specs.density': 'Density: 0.89-0.93',
    'products.dental.specs.gray': 'Gray: 0.01%',
    'products.dental.specs.toughness': 'Toughness: Very Good',
    'products.dental.specs.cutability': 'Cutability: Excellent Machinability',
    'products.dental.sizes': 'Size Options',
    'products.dental.sizes.desc': 'OD: 98mm, 98.5mm, 100mm, 112mm | Thickness: 10-30mm | With step or no step options available',
    'products.additional.title': 'Additional Wax Products',
    'products.additional.description': 'Household candles, craft candles, industrial machinable wax, solid lubricants, and specialized textile wax rings for various applications.',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.description': 'Ready to discuss your wax product needs? Get in touch with our team for quotes, custom orders, and technical support.',
    'contact.address.title': 'Company Address',
    'contact.address.location': 'Location',
    'contact.address.location.desc': 'Jiaonan Liwuguan, Qingdao, Shandong, China',
    'contact.address.phone': 'Phone',
    'contact.address.email': 'Email',
    'contact.additional.title': 'Additional Information',
    'contact.additional.fax': 'Fax',
    'contact.additional.zip': 'ZIP Code',
    'contact.additional.website': 'Website',
    'contact.cta.title': 'Ready to Get Started?',
    'contact.cta.description': 'Contact us today for quotes, custom orders, or technical support. Our team is ready to help with your wax product needs.',
    'contact.cta.email': 'Send Email',
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.products': '产品',
    'nav.company': '公司',
    'nav.contact': '联系我们',
    
    // Hero Section
    'hero.title': '青岛图腾蜡业',
    'hero.description': '专业制造高品质牙科蜡片的领先制造商。位于风景如画的中国山东青岛沿海城市，我们的先进生产设施致力于为各种应用制作优质的蜡制品。',
    
    // Products Section
    'products.title': '热销产品',
    'products.description': '发现我们为全球牙科专业人士和工业应用设计的优质蜡制品。',
    'products.dental.title': '牙科蜡片',
    'products.dental.description': '由青岛图腾蜡业有限公司独立开发和生产，采用国际先进配方和进口原材料。我们的可加工蜡片以具有竞争力的价格提供顶级质量。',
    'products.dental.colors': '可选颜色',
    'products.dental.colors.desc': '纯白色（半透明）、蓝色、陶瓷白、棕色和灰色选项',
    'products.dental.specs': '技术规格',
    'products.dental.specs.hardness': '硬度：55-60（肖氏"D"刻度）',
    'products.dental.specs.softening': '软化点：102°C',
    'products.dental.specs.melting': '滴熔点：112°C',
    'products.dental.specs.density': '密度：0.89-0.93',
    'products.dental.specs.gray': '灰色：0.01%',
    'products.dental.specs.toughness': '韧性：非常好',
    'products.dental.specs.cutability': '切削性：优异的机械加工性',
    'products.dental.sizes': '尺寸选项',
    'products.dental.sizes.desc': '外径：98mm、98.5mm、100mm、112mm | 厚度：10-30mm | 可选择有台阶或无台阶',
    'products.additional.title': '其他蜡制品',
    'products.additional.description': '家用蜡烛、工艺蜡烛、工业可加工蜡、固体润滑剂以及各种应用的专业纺织蜡环。',
    
    // Contact Section
    'contact.title': '联系我们',
    'contact.description': '准备讨论您的蜡制品需求？联系我们的团队获取报价、定制订单和技术支持。',
    'contact.address.title': '公司地址',
    'contact.address.location': '位置',
    'contact.address.location.desc': '中国山东省青岛市胶南里务关',
    'contact.address.phone': '电话',
    'contact.address.email': '邮箱',
    'contact.additional.title': '其他信息',
    'contact.additional.fax': '传真',
    'contact.additional.zip': '邮政编码',
    'contact.additional.website': '网站',
    'contact.cta.title': '准备开始了吗？',
    'contact.cta.description': '今天就联系我们获取报价、定制订单或技术支持。我们的团队随时准备帮助您解决蜡制品需求。',
    'contact.cta.email': '发送邮件',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when changed
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
