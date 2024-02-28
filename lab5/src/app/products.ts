
export interface Product {
  img: string[];
  name: string;
  description: string;
  link: string;
  rating: number;
  category: string;
  i: number;
  likes: number;
}

export let products: Product[] = [
    //iphones
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcf/h00/83559848247326.png?format=gallery-medium'],
    name: 'Iphone 15',
    description: 'A large phone with one of the best screens',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qCbbb57VAxeQZZNARkFc4zl82rc6R3Qx6rgsdOpcNkIVCNgBtWZpGxoC0xwQAvD_BwE',
    rating: 4.7,
    category: "Iphone",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h21/h45/64083958562846.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he5/hce/64083961741342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8c/h46/64083964657694.jpg?format=gallery-medium'],
    name: 'Iphone 12',
    description: 'A large phone with one of the best screens',
    link: 'https://kaspi.kz/shop/p/apple-iphone-12-128gb-chernyi-100656960/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qCbbb57VAxeQZZNARkFc4zl82rc6R3Qx6rgsdOpcNkIVCNgBtWZpGxoC0xwQAvD_BwE',
    rating: 4.5,
    category: "Iphone",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he8/h62/64508118794270.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h02/h9b/64508121710622.jpg?format=gallery-medium'],
    name: 'Iphone 14 Pro Max',
    description: 'A large phone with one of the best screens',
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qCbbb57VAxeQZZNARkFc4zl82rc6R3Qx6rgsdOpcNkIVCNgBtWZpGxoC0xwQAvD_BwE',
    rating: 4.8,
    category: "Iphone",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h16/h64/64000133005342.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h02/hdb/64000140935198.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf9/hdc/64000138313758.jpg?format=gallery-medium'],
    name: 'Iphone 13',
    description: 'A large phone with one of the best screens',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qCbbb57VAxeQZZNARkFc4zl82rc6R3Qx6rgsdOpcNkIVCNgBtWZpGxoC0xwQAvD_BwE',
    rating: 4.8,
    category: "Iphone",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h3f/h00/64117436088350.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hff/hbe/64117438087198.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h01/hc2/64117444902942.jpg?format=gallery-medium'],
    name: 'Iphone 13 Pro Max',
    description: 'A large phone with one of the best screens',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-seryi-102298971/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qCbbb57VAxeQZZNARkFc4zl82rc6R3Qx6rgsdOpcNkIVCNgBtWZpGxoC0xwQAvD_BwE',
    rating: 4.8,
    category: "Iphone",
    i: 0,
    likes: 0
  },
    //macbooks
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf9/h31/64082981224478.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9b/hed/64082975653918.jpg?format=gallery-medium'],
    name: 'MacBook Air 13 MGN93',
    description: 'диагональ экрана: 13.3 дюйм\n' +
        'процессор: Apple M1\n' +
        'видеокарта: Apple M1\n' +
        'размер оперативной памяти: 8.0 Гб\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256.0 Гб',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-seryi-102298971/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qCbbb57VAxeQZZNARkFc4zl82rc6R3Qx6rgsdOpcNkIVCNgBtWZpGxoC0xwQAvD_BwE',
    rating: 4.8,
    category: "MacBook",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h65/h41/81547557240862.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h4a/h60/81547557306398.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h1c/hd3/81547557371934.jpg?format=gallery-medium'],
    name: 'Apple MacBook Air 15 2023 MQKW3 blue',
    description: 'диагональ экрана: 13.3 дюйм\n' +
        'процессор: Apple M1\n' +
        'видеокарта: Apple M1\n' +
        'размер оперативной памяти: 8.0 Гб\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256.0 Гб',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-seryi-102298971/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qCbbb57VAxeQZZNARkFc4zl82rc6R3Qx6rgsdOpcNkIVCNgBtWZpGxoC0xwQAvD_BwE',
    rating: 4.8,
    category: "MacBook",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/he6/hfd/64506820984862.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h90/h16/64506823475230.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hcd/h1c/64506827669534.jpg?format=gallery-medium'],
    name: 'Apple MacBook Air 13 MLY33 black',
    description: 'диагональ экрана: 13.3 дюйм\n' +
        'процессор: Apple M1\n' +
        'видеокарта: Apple M1\n' +
        'размер оперативной памяти: 8.0 Гб\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256.0 Гб',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-seryi-102298971/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qCbbb57VAxeQZZNARkFc4zl82rc6R3Qx6rgsdOpcNkIVCNgBtWZpGxoC0xwQAvD_BwE',
    rating: 4.5,
    category: "MacBook",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h88/h18/64372891975710.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h4a/h4f/64372927299614.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd3/hb3/64372936474654.jpg?format=gallery-medium'],
    name: 'Apple MacBook Pro 16 MK183 gray',
    description: 'screen diagonal: 16.2 inches\n' +
        'processor: Apple M1 Pro\n' +
        'video card: Apple M1 16-Core\n' +
        'rAM size: 16.0 GB\n' +
        'hard drive type: SSD\n' +
        'total storage capacity: 512.0 GB',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-seryi-102298971/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qCbbb57VAxeQZZNARkFc4zl82rc6R3Qx6rgsdOpcNkIVCNgBtWZpGxoC0xwQAvD_BwE',
    rating: 4.7,
    category: "MacBook",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hd3/h7b/84577188020254.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5b/h39/85167731212318.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3a/hf7/84713104048158.png?format=gallery-medium'],
    name: 'Apple MacBook Pro 14 MRX33 black',
    description: 'диагональ экрана: 13.3 дюйм\n' +
        'процессор: Apple M1\n' +
        'видеокарта: Apple M1\n' +
        'размер оперативной памяти: 8.0 Гб\n' +
        'тип жесткого диска: SSD\n' +
        'общий объем накопителей: 256.0 Гб',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-seryi-102298971/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiArfauBhApEiwAeoB7qCbbb57VAxeQZZNARkFc4zl82rc6R3Qx6rgsdOpcNkIVCNgBtWZpGxoC0xwQAvD_BwE',
    rating: 4.9,
    category: "MacBook",
    i: 0,
    likes: 0
  },
  // JBL Headphones
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h44/hbf/81467579203614.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h56/h20/81467580448798.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8a/ha4/81467877261342.jpg?format=gallery-medium'],
    name: 'Headphones Wireless over-ear headphones JBL Tune 720BT BLK',
    description: 'type: headphones\n' +
        'type: overhead\n' +
        'connection: wireless\n' +
        'type of acoustic design: closed\n' +
        'mount type: headband\n' +
        'active Noise Cancellation: No\n' +
        'microphone: Yes',
    link: 'https://kaspi.kz/shop/p/besprovodnye-polnorazmernye-naushniki-jbl-tune-720bt-blk-111085447/?c=750000000',
    rating: 4.8,
    category: "JBLHeadphones",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hbd/h20/64237178093598.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8d/h70/64237181403166.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h7f/hc7/64237186613278.jpg?format=gallery-medium'],
    name: 'Headphones JBL Tune 510BT white',
    description: 'type: headphones\n' +
        'type: overhead\n' +
        'connection: wireless\n' +
        'type of acoustic design: closed\n' +
        'mount type: headband\n' +
        'active Noise Cancellation: No\n' +
        'microphone: Yes',
    link: 'https://kaspi.kz/shop/p/besprovodnye-polnorazmernye-naushniki-jbl-tune-720bt-blk-111085447/?c=750000000',
    rating: 4.9,
    category: "JBLHeadphones",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h29/h67/81468757114910.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h96/h9d/81468759146526.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hef/h40/81468759998494.jpg?format=gallery-medium'],
    name: 'Headphones Wireless over-ear headphones JBL TOUR ONE M2 BLK',
    description: 'type: headphones\n' +
        'type: overhead\n' +
        'connection: wireless\n' +
        'type of acoustic design: closed\n' +
        'mount type: headband\n' +
        'active Noise Cancellation: No\n' +
        'microphone: Yes',
    link: 'https://kaspi.kz/shop/p/besprovodnye-polnorazmernye-naushniki-jbl-tune-720bt-blk-111085447/?c=750000000',
    rating: 4.8,
    category: "JBLHeadphones",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h7c/h9e/64190252154910.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h15/h2b/64190254579742.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc6/hc6/64190261067806.jpg?format=gallery-medium'],
    name: 'Headphones JBL Live 660NC black',
    description: 'type: headphones\n' +
        'type: overhead\n' +
        'connection: wireless\n' +
        'type of acoustic design: closed\n' +
        'mount type: headband\n' +
        'active Noise Cancellation: No\n' +
        'microphone: Yes',
    link: 'https://kaspi.kz/shop/p/besprovodnye-polnorazmernye-naushniki-jbl-tune-720bt-blk-111085447/?c=750000000',
    rating: 4.7,
    category: "JBLHeadphones",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h65/hfb/70021271388190.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc5/h6b/70021273485342.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h03/he2/70021272436766.jpg?format=gallery-medium'],
    name: 'Headphones JBL Tune 760NC beige',
    description: 'type: headphones\n' +
        'type: overhead\n' +
        'connection: wireless\n' +
        'type of acoustic design: closed\n' +
        'mount type: headband\n' +
        'active Noise Cancellation: No\n' +
        'microphone: Yes',
    link: 'https://kaspi.kz/shop/p/besprovodnye-polnorazmernye-naushniki-jbl-tune-720bt-blk-111085447/?c=750000000',
    rating: 4.8,
    category: "JBLHeadphones",
    i: 0,
    likes: 0
  },
    //Ipad
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h7e/h90/64072646492190.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h32/ha3/64072647737374.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd9/h6d/64072649244702.jpg?format=gallery-medium'],
    name: 'Tablet Apple iPad 2021 Wi-Fi 10.2 inch 4 GB/64 GB silver',
    description: 'diagonal: 10.2 inch\n' +
        'screen resolution: 2160x1620\n' +
        'screen technology: TFT IPS\n' +
        'rAM capacity: 4 GB\n' +
        'built-in memory: 64.0 GB\n' +
        'wireless interfaces: Wi-Fi, Bluetooth\n' +
        'battery capacity: 3240.0 mAh\n' +
        'color: silver',
    link: 'https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-djuim-4-gb-64-gb-serebristyi-102301731/?c=750000000',
    rating: 4.7,
    category: "Ipad",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h15/h91/64895796412446.jpg?format=gallery-medium'],
    name: 'Tablet Apple iPad Pro 2022 Wi-Fi 11 inch 8 GB/128 GB gray',
    description: 'diagonal: 10.2 inch\n' +
        'screen resolution: 2160x1620\n' +
        'screen technology: TFT IPS\n' +
        'rAM capacity: 4 GB\n' +
        'built-in memory: 64.0 GB\n' +
        'wireless interfaces: Wi-Fi, Bluetooth\n' +
        'battery capacity: 3240.0 mAh\n' +
        'color: silver',
    link: 'https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-djuim-4-gb-64-gb-serebristyi-102301731/?c=750000000',
    rating: 4.5,
    category: "Ipad",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h0e/h4c/64079754854430.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h1e/ha8/64079757836318.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hae/ha4/64079761047582.jpg?format=gallery-medium'],
    name: 'Tablet Apple iPad Pro 2021 Wi-Fi 11 inch 8 GB/256 GB gray',
    description: 'diagonal: 10.2 inch\n' +
        'screen resolution: 2160x1620\n' +
        'screen technology: TFT IPS\n' +
        'rAM capacity: 4 GB\n' +
        'built-in memory: 64.0 GB\n' +
        'wireless interfaces: Wi-Fi, Bluetooth\n' +
        'battery capacity: 3240.0 mAh\n' +
        'color: silver',
    link: 'https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-djuim-4-gb-64-gb-serebristyi-102301731/?c=750000000',
    rating: 4.5,
    category: "Ipad",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/hff/h81/64382011146270.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hee/h25/64382014128158.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h1f/h3f/64382016389150.jpg?format=gallery-medium'],
    name: 'Tablet Apple iPad Air 2022 Wi-Fi 10.9 inch 8 GB/64 GB gray',
    description: 'diagonal: 10.2 inch\n' +
        'screen resolution: 2160x1620\n' +
        'screen technology: TFT IPS\n' +
        'rAM capacity: 4 GB\n' +
        'built-in memory: 64.0 GB\n' +
        'wireless interfaces: Wi-Fi, Bluetooth\n' +
        'battery capacity: 3240.0 mAh\n' +
        'color: silver',
    link: 'https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-djuim-4-gb-64-gb-serebristyi-102301731/?c=750000000',
    rating: 4.5,
    category: "Ipad",
    i: 0,
    likes: 0
  },
  {
    img: ['https://resources.cdn-kaspi.kz/img/m/p/h1f/hd4/64068621139998.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8c/hb6/64068624023582.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hdc/hd4/64068626579486.jpg?format=gallery-medium'],
    name: 'Tablet Apple iPad mini 2021 Wi-Fi 8.3 inch 4 GB/64 GB gray',
    description: 'diagonal: 10.2 inch\n' +
        'screen resolution: 2160x1620\n' +
        'screen technology: TFT IPS\n' +
        'rAM capacity: 4 GB\n' +
        'built-in memory: 64.0 GB\n' +
        'wireless interfaces: Wi-Fi, Bluetooth\n' +
        'battery capacity: 3240.0 mAh\n' +
        'color: silver',
    link: 'https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-djuim-4-gb-64-gb-serebristyi-102301731/?c=750000000',
    rating: 4.5,
    category: "Ipad",
    i: 0,
    likes: 0
  }
];
