export interface Product {
  id: string;
  name: string;
  nameZh: string;
  category: string;
  categoryZh: string;
  description: string;
  descriptionZh: string;
  images?: string[];
  specifications?: {
    label: string;
    value: string;
    labelZh?: string;
    valueZh?: string;
  }[];
}

export const products: Product[] = [
  {
    id: 'wax-disc',
    name: 'Dental Wax Discs',
    nameZh: '牙科CAD/CAM系统专用高硬度雕刻蜡盘蜡块',
    category: 'Dental Products',
    categoryZh: '齿科产品',
    description: 'Independently developed and produced by Qingdao Totem Candle Industry Co., Ltd. using internationally advanced formula and imported raw materials. Our machinable wax discs offer top-class quality at competitive prices.',
    descriptionZh: '青岛同泰蜡业有限公司采用先进配方和进口原材料自主研发生产的牙科CAD/CAM系统专用高硬度雕刻蜡盘,及齿科专业高硬度雕刻蜡块，品质一流，较进口产品可大幅降低成本。',
    images: [
      '/img/dental_wax_disc_1.JPG',
      '/img/dental_wax_disc_2.JPG',
      '/img/dental_wax_disc_3.JPG',
      '/img/dental_wax_disc_4.JPG',
      '/img/dental_wax_disc_5.JPG',
      '/img/dental_wax_disc_6.jpg'
    ],
    specifications: [
      { 
        label: 'Colors', 
        value: 'Pure white (translucent), blue, ceramic white, brown, and gray options',
        labelZh: '颜色',
        valueZh: '纯白色（半透明）、蓝色、陶瓷白、棕色和灰色'
      },
      { 
        label: 'Hardness', 
        value: 'Shore "D" Scale: 55-60',
        labelZh: '硬度',
        valueZh: '邵氏"D"硬度: 55-60度'
      },
      { 
        label: 'Softening Point', 
        value: '102°C',
        labelZh: '软化点',
        valueZh: '102°C'
      },
      { 
        label: 'Drop Melting Point', 
        value: '112°C',
        labelZh: '滴熔点',
        valueZh: '112°C'
      },
      { 
        label: 'Density', 
        value: '0.89-0.93',
        labelZh: '密度',
        valueZh: '0.89-0.93'
      },
      { 
        label: 'Gray', 
        value: '0.01%',
        labelZh: '灰分',
        valueZh: '0.01%'
      },
      { 
        label: 'Toughness', 
        value: 'Very Good',
        labelZh: '韧性',
        valueZh: '好'
      },
      { 
        label: 'Cutability', 
        value: 'Excellent Machinability',
        labelZh: '切削性',
        valueZh: '优异的机械加工性'
      },
      { 
        label: 'Shrinkage Rate', 
        value: '5%',
        labelZh: '收缩率',
        valueZh: '5%'
      },
      { 
        label: 'Size Options', 
        value: 'OD: 98mm, 98.5mm, 100mm, 112mm, 150mm | Thickness: 10-30mm | With step or no step options available',
        labelZh: '尺寸选项',
        valueZh: '外径：98mm、98.5mm、100mm、112mm、150mm | 厚度：10-30mm | 可选择有台阶或无台阶'
      },
      { 
        label: 'Applications', 
        value: 'Dental CAD/CAM system specialized carving wax discs, wax pattern molds for crowns and bridges, lost wax casting, and carving cutting wax.',
        labelZh: '应用',
        valueZh: '齿科CAD/CAM系统专用雕刻蜡盘、蜡型模齿冠桥、失蜡铸造、雕刻切削用蜡。'
      }
    ]
  },
  {
    id: 'white-candle',
    name: 'White Candle',
    nameZh: '普通照明蜡烛',
    category: 'Candles',
    categoryZh: '蜡烛',
    description: 'Qingdao Totem Candle Industry Co.,Ltd. has many years of professional production experience and professional production technology, equipment, production of various sizes white candles, burning longer, dripless, not bend, no black smoke, burning cleaner, natural ingredients, with 100% cotton wicks.',
    descriptionZh: '青岛同泰蜡业有限公司拥有多年的专业生产经验和专业生产技术、设备，生产各种尺寸的白蜡烛，燃烧时间更长，不滴蜡，不弯曲，无黑烟，燃烧更清洁，天然成分，采用100%棉芯。',
    images: [
      '/img/white_candle_1.jpg',
      '/img/white_candle_2.jpg',
      '/img/white_candle_3.jpg'
    ],
    specifications: [
      { label: 'Product Name', value: 'White candle' },
      { label: 'Art No.', value: '8", 23g' },
      { label: 'Qty/Bag (PCS)', value: '8' },
      { label: 'Qty/Ctn( Bag )', value: '65' },
      { label: 'NW( Kgs )', value: '11.96' },
      { label: 'Qty/20FCL ( CTN )', value: '1560' }
    ]
  },
  {
    id: 'tea-light-candle',
    name: 'Tea Light Candle',
    nameZh: '茶蜡烛',
    category: 'Candles',
    categoryZh: '蜡烛',
    description: 'Tea Light Candles come in many sizes and colors, clean burning.',
    descriptionZh: '茶蜡烛有多种尺寸和颜色，燃烧清洁。',
    images: [
      '/img/tea_1.jpg',
      '/img/tea_2.jpg',
      '/img/tea_3.jpg'
    ],
    specifications: [
      { label: 'Product Name', value: 'TeaLight Candle' },
      { label: 'Art No.', value: '10×23 G / 3.8 x 1.1"2.4cm' },
      { label: 'Qty/Bag (PCS)', value: '50' },
      { label: 'Qty/Ctn ( Bag )', value: '20' }
    ]
  },
  {
    id: 'floating-candle',
    name: 'Floating Candle',
    nameZh: '浮蜡烛',
    category: 'Candles',
    categoryZh: '蜡烛',
    description: 'Spherical candle can be used as a burning needs, but also can be used as decorations placed in the room, different size.',
    descriptionZh: '球形蜡烛可用于燃烧需求，也可用作装饰放置在房间中，尺寸不同。',
    images: [
      '/img/floating_1.jpg',
      '/img/floating_2.jpg',
      '/img/floating_3.jpg'
    ],
    specifications: [
      { label: 'Product Name', value: 'Floating Candle' },
      { label: 'Art No.', value: 'Dia4.5x H2.7cm / Dia5 x H3cm' },
      { label: 'Qty/Bag (PCS)', value: '12' }
    ]
  },
  {
    id: 'pillar-candle',
    name: 'Pillar Candle',
    nameZh: '柱蜡烛',
    category: 'Candles',
    categoryZh: '蜡烛',
    description: 'Kinds of pillar candles with high quality. Many other sizes and packages are available as per buyers\' request.',
    descriptionZh: '各种高品质柱蜡烛。可根据买家要求提供其他尺寸和包装。',
    images: [
      '/img/pillar_1.jpg',
      '/img/pillar_2.jpg',
      '/img/pillar_3.jpg'
    ],
    specifications: []
  },
  {
    id: 'cup-candle',
    name: 'Cup Candle',
    nameZh: '杯蜡',
    category: 'Candles',
    categoryZh: '蜡烛',
    description: 'Infused candles with various fragrances.',
    descriptionZh: '各种香味的调味蜡烛。',
    images: [
      '/img/cup_1.jpg',
      '/img/cup_2.jpg',
      '/img/cup_3.jpg'
    ]
  },
  {
    id: 'church-candle',
    name: 'Church Candle',
    nameZh: '教堂蜡烛',
    category: 'Candles',
    categoryZh: '蜡烛',
    description: 'High-quality church candles.',
    descriptionZh: '高品质教堂蜡烛。',
    images: [
      '/img/church_1.jpg',
      '/img/church_2.jpg',
      '/img/church_3.jpg'
    ]
  },
  {
    id: 'scented-candle',
    name: 'Scented Candle',
    nameZh: '香薰蜡烛',
    category: 'Candles',
    categoryZh: '蜡烛',
    description: 'Scented candles with various fragrances.',
    descriptionZh: '各种香味的香薰蜡烛。',
    images: [
      '/img/scented_1.jpg',
      '/img/scented_2.jpg',
      '/img/scented_3.jpg',
    ]
  },
  {
    id: 'citronella-candle',
    name: 'Citronella Oil Candle',
    nameZh: '香茅油蜡烛',
    category: 'Special Candles',
    categoryZh: '特殊蜡烛',
    description: 'Citronella oil candles for mosquito repellent.',
    descriptionZh: '香茅油蜡烛用于驱蚊。',
    images: [
      '/img/oil_1.jpg',
      '/img/oil_2.jpg',
      '/img/oil_3.jpg',
      '/img/oil_4.jpg',
    ]
  },
  // {
  //   id: 'mosquito-repellent-candle',
  //   name: 'Mosquito Repellent Fragrance Candle',
  //   nameZh: '驱蚊香薰蜡烛',
  //   category: 'Special Candles',
  //   categoryZh: '特殊蜡烛',
  //   description: 'The candles are researched and developed independently by Qingdao Totem Candle Industry Co., Ltd, and have effective mosquito repelling function with the newest formula. The mosquito repellent is the extract of the natural plants and with no toxic. Over 85% of mosquitoes repelling rate.',
  //   descriptionZh: '蜡烛由青岛同泰蜡业有限公司独立研发，采用最新配方具有有效驱蚊功能。驱蚊剂是天然植物提取物，无毒。驱蚊率超过85%。',
  //   images: [],
  //   specifications: [
  //     { label: 'Product Name', value: 'Mosquito repellent fragrance candle' },
  //     { label: 'Art No.', value: '8", 23G' },
  //     { label: 'Qty/Bag (PCS)', value: '8' },
  //     { label: 'Qty/Ctn( Bag )', value: '65' },
  //     { label: 'NW ( Kgs )', value: '11.96' },
  //     { label: 'Qty/20FCL ( CTN )', value: '1560' }
  //   ]
  // },
  // {
  //   id: 'machinable-wax',
  //   name: 'Machinable Wax',
  //   nameZh: '可加工蜡',
  //   category: 'Wax Products',
  //   categoryZh: '蜡制品',
  //   description: 'The Machinable Wax is independently developed and produced by Qingdao Totem Candle Industry Co.,Ltd adopts internationally advanced formula and imported raw materials. Best quality and good price.',
  //   descriptionZh: '可加工蜡由青岛同泰蜡业有限公司独立开发和生产，采用国际先进配方和进口原材料。最佳质量，价格合理。',
  //   images: [],
  //   specifications: [
  //     { label: 'Colour', value: 'blue' },
  //     { label: 'Hardness', value: '50-60(Shore "D" Scale)' },
  //     { label: 'Softening point', value: '105°C' },
  //     { label: 'Drop Melting Point', value: '140°C' },
  //     { label: 'Density', value: '0.89-0.95' },
  //     { label: 'Gray', value: '0.032%' },
  //     { label: 'Resilience', value: 'good' }
  //   ]
  // },
  {
    id: 'textile-wax-ring',
    name: 'Textile Wax Ring',
    nameZh: '纺织蜡环',
    category: 'Wax Products',
    categoryZh: '蜡制品',
    description: 'Textile wax rings for industrial applications.',
    descriptionZh: '用于工业应用的纺织蜡环。',
    images: [
      '/img/textile_1.jpg',
      '/img/textile_2.jpg',
      '/img/textile_3.jpg',
      '/img/textile_4.jpg',
    ]
  },
  {
    id: 'solid-lubricants',
    name: 'Solid Lubricants',
    nameZh: '固体润滑剂',
    category: 'Industrial Products',
    categoryZh: '工业产品',
    description: 'Solid lubricants including stick wax for cutting aluminum and non-ferrous metals.',
    descriptionZh: '固体润滑剂，包括用于切割铝和有色金属的棒状蜡。',
    images: [
      '/img/solid.jpg',
    ]
  },
];

