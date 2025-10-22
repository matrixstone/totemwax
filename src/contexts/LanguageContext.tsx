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
    'products.dental.specs.hardness': 'Hardness: Shore "D" Scale: 55-60',
    'products.dental.specs.softening': 'Softening Point: 102°C',
    'products.dental.specs.melting': 'Drop Melting Point: 112°C',
    'products.dental.specs.density': 'Density: 0.89-0.93',
    'products.dental.specs.gray': 'Gray: 0.01%',
    'products.dental.specs.toughness': 'Toughness: Very Good',
    'products.dental.specs.cutability': 'Cutability: Excellent Machinability',
    'products.dental.specs.shrinkage': 'Shrinkage Rate: 5%',
    'products.dental.applications': 'Applications',
    'products.dental.applications.desc': 'Dental CAD/CAM system specialized carving wax discs, wax pattern molds for crowns and bridges, lost wax casting, and carving cutting wax.',
    'products.dental.sizes': 'Size Options',
    'products.dental.sizes.desc': 'OD: 98mm, 98.5mm, 100mm, 112mm, 150mm | Thickness: 10-30mm | With step or no step options available',
    'products.additional.title': 'PMMA Resin Disc for Dental CAD/CAM Systems',
    'products.additional.description': 'High-quality PMMA resin discs designed for dental CAD/CAM systems, offering excellent machinability and precision for crown and bridge work.',
    'products.additional.specs': 'Resin Disc Specifications',
    'products.additional.specs.composition': 'Composition: 100% PMMA',
    'products.additional.specs.colors': 'Colors: Transparent, VITA full color range, pink; dual-color',
    'products.additional.specs.hardness': 'Hardness: Shore "D" Scale: 75-85',
    'products.additional.specs.density': 'Density: 1.19',
    'products.additional.specs.tensile': 'Tensile Strength: >75 MPa',
    'products.additional.specs.flexural': 'Flexural Strength: >125 MPa',
    'products.additional.specs.modulus': 'Elastic Modulus: 3300 MPa',
    'products.additional.specs.toughness': 'Toughness: Good',
    'products.additional.specs.machinability': 'Machinability: Excellent',
    'products.additional.specs.ash': 'Ash Content: <0.29%',
    'products.additional.specs.shrinkage': 'Shrinkage Rate: <0.5%',
    'products.additional.specs.sizes': 'Specifications: Diameter 98mm, 98.5mm, thickness 10-25mm; with step; Diameter 98mm, 98.5mm, thickness 10-25mm; without step; Custom specifications available upon request',
    'products.additional.applications': 'Applications',
    'products.additional.applications.desc': 'Dental CAD/CAM system specialized resin discs, crown and bridge molds, base plate restorations, temporary crowns, diagnostic wax patterns',
    
    // Image Labels
    'images.dental.blue': 'Blue Wax Disc',
    'images.dental.blue_white_gray': 'Blue, White and Gray Wax Disc',
    'images.dental.gray': 'Gray Wax Disc',
    'images.resin.transparent': 'Transparent Resin Disc',
    'images.resin.vita_colors': 'VITA Colors Resin Disc',
    'images.resin.pink': 'Pink Color Resin Disc',
    
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
    'hero.title': '青岛同泰蜡业',
    'hero.description': '专业生产蜡制品的传统制造企业，公司成立20余年，产品销往全世界30个国家，长期得到客户的良好评价。公司的产品包括牙科CAD/CAM系统专用雕刻蜡盘蜡块、首饰雕刻蜡、普通照明蜡烛、各种工艺蜡烛、机械加工及精密铸造用可切削高硬度复合石蜡材料、铝材及有色金属切割专用润滑切削剂-固体切削蜡(棒蜡)、蜡疗外用石蜡等多领域专业产品。',
    
    // Products Section
    'products.title': '热销产品',
    'products.description': ' ',
    'products.dental.title': '牙科CAD/CAM系统专用高硬度雕刻蜡盘蜡块',
    'products.dental.description': '青岛同泰蜡业有限公司采用先进配方和进口原材料自主研发生产的牙科CAD/CAM系统专用高硬度雕刻蜡盘,及齿科专业高硬度雕刻蜡块，品质一流，较进口产品可大幅降低成本。',
    'products.dental.colors': '可选颜色',
    'products.dental.colors.desc': '蓝色，白色和灰色',
    'products.dental.specs': '技术规格',
    'products.dental.specs.hardness': '硬度：邵氏D:55-60度',
    'products.dental.specs.softening': '软化点：102°C',
    'products.dental.specs.melting': '滴熔点：112°C',
    'products.dental.specs.density': '密度：0.89-0.93',
    'products.dental.specs.gray': '灰分：0.01%',
    'products.dental.specs.toughness': '韧性：好',
    'products.dental.specs.cutability': '切削性：优异的机械加工性',
    'products.dental.specs.shrinkage': '收缩率：5%',
    'products.dental.applications': '应用',
    'products.dental.applications.desc': '齿科CAD/CAM系统专用雕刻蜡盘、蜡型模齿冠桥、失蜡铸造、雕刻切削用蜡。',
    'products.dental.sizes': '尺寸选项',
    'products.dental.sizes.desc': '外径：98mm、98.5mm、100mm、112mm、150mm | 厚度：10-30mm | 可选择有台阶或无台阶',
    'products.additional.title': '牙科CAD/CAM系统专用PMMA树脂盘',
    'products.additional.description': '专为牙科CAD/CAM系统设计的高品质PMMA树脂盘，提供优异的机械加工性和精度，适用于齿冠和桥体制作。',
    'products.additional.specs': '树脂盘特性指标',
    'products.additional.specs.composition': '成分：100%PMMA',
    'products.additional.specs.colors': '颜色：透明，VITA全色系，粉红色；双色',
    'products.additional.specs.hardness': '硬度：邵氏D75-85度',
    'products.additional.specs.density': '密度：1.19',
    'products.additional.specs.tensile': '抗张强度：>75Mpa',
    'products.additional.specs.flexural': '弯曲强度：>125Mpa',
    'products.additional.specs.modulus': '弹性模量：3300Mpa',
    'products.additional.specs.toughness': '韧性：好',
    'products.additional.specs.machinability': '可切削性：极佳',
    'products.additional.specs.ash': '灰分：<0.29%',
    'products.additional.specs.shrinkage': '收缩率：<0.5%',
    'products.additional.specs.sizes': '规格：直径98、98.5mm，厚度10-25mm；带台阶；直径98、98.5mm，厚度10-25mm；不带台阶；可依客户需要订制规格',
    'products.additional.applications': '应用',
    'products.additional.applications.desc': '齿科CAD/CAM系统专用树脂盘、型模齿冠桥、基托修复体、临时冠、诊断用蜡型',
    
    // Image Labels
    'images.dental.blue': '蓝色蜡盘',
    'images.dental.blue_white_gray': '蓝色、白色和灰色蜡盘',
    'images.dental.gray': '灰色蜡盘',
    'images.resin.transparent': '透明树脂盘',
    'images.resin.vita_colors': 'VITA色系树脂盘',
    'images.resin.pink': '粉色树脂盘',
    
    // Contact Section
    'contact.title': '联系我们',
    'contact.description': '准备讨论您的蜡制品需求？联系我们的团队获取报价、定制订单和技术支持。',
    'contact.address.title': '公司地址',
    'contact.address.location': '位置',
    'contact.address.location.desc': '中国山东省青岛市黄岛区大村镇理务关村',
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
