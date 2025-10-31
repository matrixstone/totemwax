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
    'products.learnMore': 'Check All Products',
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
    
    // Footer
    'footer.copyright': 'Copyright © 2010 Qingdao Totem Candle Industry Co, Ltd. All Rights Reserved',
    
    // Company Page
    'company.title': 'Qingdao Totem Candle Industry Co., Ltd.',
    'company.subtitle': 'A distinguished manufacturer specializing in premium wax products, headquartered in the picturesque coastal city of Qingdao, Shandong, China.',
    'company.about.pretitle': 'About Us',
    'company.about.title': 'Excellence in Wax Manufacturing',
    'company.about.description': 'Strategically located just 78 kilometers from Qingdao Port, our state-of-the-art facility spans 3,000 square meters and is equipped with advanced production capabilities. Supported by a team of skilled technicians, dedicated production staff, and an exceptional management team, we uphold stringent quality control standards to ensure timely deliveries and competitive pricing, consistently delivering unparalleled service to our valued clients.',
    'company.products.pretitle': 'Our Products',
    'company.products.title': 'Our Core Offerings',
    'company.products.description': 'As the leading manufacturer of dental wax discs in China, we take pride in producing high-quality dental wax discs available in five distinct colors—blue, white, brown, gray, and porcelain white—and a range of sizes tailored to international standards.',
    'company.products.dental.title': 'Dental Wax Discs',
    'company.products.dental.description': 'Our flagship product - high-quality dental wax discs available in five distinct colors:',
    'company.products.dental.colors': 'Blue, White, Brown, Gray, Porcelain white',
    'company.products.dental.sizes': 'Available in a range of sizes tailored to international standards.',
    'company.products.additional.title': 'Additional Products',
    'company.products.additional.description': 'Our extensive portfolio includes:',
    'company.products.additional.list1': 'White candles, household candles, pillar candles',
    'company.products.additional.list2': 'Tealight candles and floating candles',
    'company.products.additional.list3': 'Artisanal craft candles',
    'company.products.additional.list4': 'Citronella oil candles and mosquito-repellent fragrance candles',
    'company.products.additional.list5': 'Industrial-grade machinable wax for specialized lathe applications',
    'company.products.additional.list6': 'Solid lubricants, including stick wax for cutting aluminum and non-ferrous metals',
    'company.products.additional.list7': 'Wax discs for dentistry CAD/CAM systems',
    'company.products.additional.list8': 'Textile wax rings',
    'company.global.pretitle': 'Global Presence',
    'company.global.title': 'Global Reach and Trusted Partnerships',
    'company.global.description': 'For years, Qingdao Totem Candle Industry has proudly served clients worldwide, fostering enduring business relationships with domestic and international enterprises. Our commitment to excellence has earned us consistent praise and trust from customers across the globe.',
    'company.cta.title': 'Discover Our Quality and Craftsmanship',
    'company.cta.description': 'Visit our website for more information about our products and services.',
    'company.cta.button': 'Contact Us',
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
    'products.learnMore': '了解全部产品',
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
    
    // Footer
    'footer.copyright': '版权所有 © 2010 青岛同泰蜡业有限公司 保留所有权利',
    
    // Company Page
    'company.title': '青岛同泰蜡业有限公司',
    'company.subtitle': '青岛同泰蜡业有限公司是一家专业从事优质蜡制品生产的知名企业，总部位于中国山东省风景秀丽的沿海城市青岛。',
    'company.about.pretitle': '关于我们',
    'company.about.title': '卓越的蜡制品制造',
    'company.about.description': '我们的工厂距离青岛港仅78公里，拥有占地3000平方米的现代化生产车间，配备先进的生产设备。我们汇聚了一支由技术精湛的专业人员、熟练的生产工人和卓越的管理团队组成的精英队伍，秉承严格的质量控制体系，确保准时交货和具有竞争力的价格，为客户提供卓越的服务体验。',
    'company.products.pretitle': '我们的产品',
    'company.products.title': '核心产品',
    'company.products.description': '作为中国牙科蜡盘领域的领先制造商，我们专注于生产高品质的牙科蜡盘，提供蓝色、白色、棕色、灰色和瓷白色五种颜色，以及符合国际标准的多种规格尺寸。',
    'company.products.dental.title': '牙科蜡盘',
    'company.products.dental.description': '我们的旗舰产品 - 高品质牙科蜡盘，提供五种颜色：',
    'company.products.dental.colors': '蓝色、白色、棕色、灰色、瓷白色',
    'company.products.dental.sizes': '提供符合国际标准的多种规格尺寸。',
    'company.products.additional.title': '其他产品',
    'company.products.additional.description': '我们还提供多样化的蜡制品系列，包括：',
    'company.products.additional.list1': '白色蜡烛、家居蜡烛、柱状蜡烛',
    'company.products.additional.list2': '茶蜡和漂浮蜡烛',
    'company.products.additional.list3': '手工工艺蜡烛',
    'company.products.additional.list4': '香茅油蜡烛和驱蚊香氛蜡烛',
    'company.products.additional.list5': '工业专用车床用可加工蜡',
    'company.products.additional.list6': '固体润滑剂，包括用于切割铝材和有色金属的棒状蜡',
    'company.products.additional.list7': '牙科CAD/CAM系统用蜡盘',
    'company.products.additional.list8': '纺织蜡环',
    'company.global.pretitle': '全球影响力',
    'company.global.title': '全球影响与信赖合作',
    'company.global.description': '多年来，青岛同泰蜡业有限公司的产品远销全球，与国内外企业建立了稳固的长期合作关系，赢得了客户的高度评价和信赖。',
    'company.cta.title': '体验卓越品质与精湛工艺',
    'company.cta.description': '访问我们的网站，了解更多关于我们产品与服务的信息。',
    'company.cta.button': '联系我们',
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
