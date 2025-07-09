import { envs } from "../config/index.config.js";

export const categories = [
  {
    name: "Smartphones",
    description: "Dispositivos móviles inteligentes con funciones avanzadas.",
    image: "https://m.media-amazon.com/images/I/61qJX973fRL.jpg",
  },
  {
    name: "Laptops",
    description:
      "Ordenadores portátiles para trabajo, estudio y entretenimiento.",
    image:
      "https://sigmatiendas.com/cdn/shop/articles/laptops_variadas_portada_blog.webp?v=1728322812&width=2048",
  },
  {
    name: "Accesorios",
    description:
      "Complementos tecnológicos como fundas, cables, soportes, etc.",
    image:
      "https://lh3.googleusercontent.com/proxy/quh90dR0c-Sfpt2aKwYFYjVGRWUfhVWoUCcu8fK4JkVlHWcIULaratYk8PUfWa1h-GuGW1Vsf_CooSTGFvY7UC9jY8wKcSrqi6U8irfTX6R65DQ78mVvwgq4OBJRJRkA2nOPmFkr8o5dTIHwQyXYAXQ",
  },
  {
    name: "Componentes",
    description:
      "Partes internas como tarjetas gráficas, procesadores y memoria RAM.",
    image:
      "https://www.intel.la/content/dam/www/central-libraries/us/en/images/2023-01/s9-u05-03-overhead-pc-components-original-rwd.jpg.rendition.intel.web.480.270.jpg",
  },
  {
    name: "Audio",
    description:
      "Audífonos, parlantes, micrófonos y equipos relacionados al sonido.",
    image: "https://cuotafacilrafa.com/wp-content/uploads/2020/12/12.jpg",
  },
  {
    name: "Gaming",
    description: "Consolas, controles y accesorios para videojuegos.",
    image:
      "https://www.newegg.com/insider/wp-content/uploads/2022/01/Blue-Accesories.jpg",
  },
  {
    name: "Monitores",
    description:
      "Pantallas para ordenadores de diferentes tamaños y resoluciones.",
    image:
      "https://image.benq.com/is/image/benqco/monitor-all-series-kv-m?$ResponsivePreset$&fmt=png-alpha",
  },
  {
    name: "Redes",
    description: "Equipos como routers, repetidores y adaptadores de red.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsR0SzwHQcU-e25uBRiYh3pbMiME424m2ZTQ&s",
  },
];

export const products = [
  {
    name: "Samsung Galaxy S21",
    description: "Smartphone con pantalla AMOLED y cámara triple de 64MP.",
    price: 699.99,
    stock: 30,
    brand: "Samsung",
    model: "Galaxy S21",
    color: "Phantom Gray",
    photo:
      "https://i.blogs.es/39f1a3/samsung-galaxy-s21-y-s21-plus-5/1366_2000.jpg",
    launchDate: "2021-01-29",
    guarantee: 12,
    specification: {
      pantalla: '6.2" AMOLED',
      camara: "64MP triple",
      procesador: "Exynos 2100",
      almacenamiento: "128GB",
      bateria: "4000 mAh",
    },
    dimensions: "151.7 x 71.2 x 7.9 mm",
    category: "Smartphones",
    scoreAverage: 4.5,
  },
  {
    name: "iPhone 13",
    description:
      "Smartphone Apple con chip A15 Bionic y sistema de doble cámara.",
    price: 799.0,
    stock: 20,
    brand: "Apple",
    model: "iPhone 13",
    color: "Midnight",
    photo:
      "https://think-ecuador.com/wp-content/uploads/2021/10/0160300772-10-600x600.jpeg",
    launchDate: "2021-09-24",
    guarantee: 12,
    specification: {
      pantalla: '6.1" OLED',
      camara: "12MP dual",
      procesador: "A15 Bionic",
      almacenamiento: "128GB",
      bateria: "3227 mAh",
    },
    dimensions: "146.7 x 71.5 x 7.65 mm",
    category: "Smartphones",
    scoreAverage: 3.2,
  },
  {
    name: "MacBook Air M1",
    description: "Laptop ultradelgada con chip M1 y batería de larga duración.",
    price: 999.99,
    stock: 10,
    brand: "Apple",
    model: "Air M1",
    color: "Plata",
    photo:
      "https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg",
    launchDate: "2020-11-17",
    guarantee: 12,
    specification: {
      procesador: "Apple M1",
      ram: "8 GB",
      almacenamiento: "256 GB SSD",
      pantalla: '13.3" Retina',
    },
    dimensions: "30.41 x 21.24 x 1.61 cm",
    category: "Laptops",
    scoreAverage: 2.5,
  },
  {
    name: "Lenovo IdeaPad 3",
    description: "Laptop para uso diario con AMD Ryzen 5 y pantalla Full HD.",
    price: 499.99,
    stock: 15,
    brand: "Lenovo",
    model: "IdeaPad 3",
    color: "Gris",
    photo:
      "https://easylaptopec.com/wp-content/uploads/2023/09/d2d66a9af16be4a1dca6a5f9ea26c426.png",
    launchDate: "2022-11-01",
    guarantee: 12,
    specification: {
      procesador: "AMD Ryzen 5",
      ram: "8 GB",
      almacenamiento: "256 GB SSD",
      pantalla: '15.6" Full HD',
    },
    dimensions: "36 x 24 x 2 cm",
    category: "Laptops",
    scoreAverage: 3.8,
  },
  {
    name: "Mouse Logitech MX Master 3",
    description: "Mouse inalámbrico ergonómico con botones programables.",
    price: 99.99,
    stock: 50,
    brand: "Logitech",
    model: "MX Master 3",
    color: "Negro",
    photo:
      "https://nomadaware.com.ec/wp-content/uploads/2022/11/mx-master-3s-mouse-top-side-view-graphite.png",
    launchDate: "2020-09-01",
    guarantee: 24,
    specification: {
      dpi: "4000",
      conexion: "Bluetooth + USB",
      bateria: "Recargable",
    },
    dimensions: "12.5 x 8.4 x 5.1 cm",
    category: "Accesorios",
    scoreAverage: 4.2,
  },
  {
    name: "Teclado Mecánico Redragon",
    description: "Teclado con retroiluminación RGB y switches blue.",
    price: 59.99,
    stock: 40,
    brand: "Redragon",
    model: "K552",
    color: "Negro",
    photo:
      "https://www.computron.com.ec/wp-content/uploads/2023/06/K550-1-SP-1.jpg",
    launchDate: "2021-05-10",
    guarantee: 12,
    specification: {
      tipo: "Mecánico",
      iluminación: "RGB",
      conectividad: "USB",
    },
    dimensions: "35.4 x 12.3 x 3.7 cm",
    category: "Accesorios",
    scoreAverage: 3.5,
  },
  {
    name: "Tarjeta Gráfica NVIDIA RTX 3060",
    description: "GPU de alto rendimiento para gaming y edición.",
    price: 379.99,
    stock: 12,
    brand: "NVIDIA",
    model: "RTX 3060",
    color: "Negro",
    photo: "https://m.media-amazon.com/images/I/71MkAl85kqL._AC_SL1200_.jpg",
    launchDate: "2021-02-25",
    guarantee: 24,
    specification: {
      memoria: "12 GB GDDR6",
      puertos: "HDMI, DisplayPort",
      refrigeración: "Dual Fan",
    },
    dimensions: "24.2 x 11.2 x 3.9 cm",
    category: "Componentes",
    scoreAverage: 4.7,
  },
  {
    name: "SSD Kingston NV1 1TB",
    description:
      "Unidad de estado sólido NVMe PCIe para almacenamiento rápido.",
    price: 89.99,
    stock: 25,
    brand: "Kingston",
    model: "NV1",
    color: "Azul",
    photo:
      "https://http2.mlstatic.com/D_NQ_NP_631253-MEC51230902505_082022-O.webp",
    launchDate: "2022-01-10",
    guarantee: 36,
    specification: {
      tipo: "NVMe PCIe Gen 3.0",
      lectura: "2100 MB/s",
      escritura: "1700 MB/s",
    },
    dimensions: "80 x 22 x 2.1 mm",
    category: "Componentes",
    scoreAverage: 4.1,
  },
  {
    name: "Auriculares Sony WH-1000XM4",
    description: "Auriculares inalámbricos con cancelación de ruido.",
    price: 299.99,
    stock: 18,
    brand: "Sony",
    model: "WH-1000XM4",
    color: "Negro",
    photo: "https://i.blogs.es/7af9e0/sony-wh-1000xm4-analisis/1366_2000.jpg",
    launchDate: "2020-08-06",
    guarantee: 24,
    specification: {
      bateria: "30 horas",
      conectividad: "Bluetooth 5.0",
      características: "Noise Cancelling",
    },
    dimensions: "18 x 17 x 8 cm",
    category: "Audio",
    scoreAverage: 2.3,
  },
  {
    name: "Parlante JBL Flip 5",
    description: "Altavoz portátil resistente al agua con sonido potente.",
    price: 119.99,
    stock: 30,
    brand: "JBL",
    model: "Flip 5",
    color: "Azul",
    photo:
      "https://ditronics.ec/wp-content/uploads/2021/03/PARLANTE-PORTATIL-FLIP-5-6.jpg",
    launchDate: "2019-08-01",
    guarantee: 12,
    specification: {
      resistencia: "IPX7",
      bateria: "12 horas",
      conexion: "Bluetooth",
    },
    dimensions: "18.1 x 6.9 x 7.4 cm",
    category: "Audio",
    scoreAverage: 4.2,
  },
  {
    name: "Consola PlayStation 5",
    description: "Consola de nueva generación con gráficos de alta fidelidad.",
    price: 499.99,
    stock: 8,
    brand: "Sony",
    model: "PS5",
    color: "Blanco",
    photo:
      "https://www.aki.com.ec/wp-content/uploads/2024/12/711719573432-1.jpg",
    launchDate: "2020-11-12",
    guarantee: 24,
    specification: {
      almacenamiento: "825 GB SSD",
      resolución: "4K",
      fps: "120",
    },
    dimensions: "39 x 10.4 x 26 cm",
    category: "Gaming",
    scoreAverage: 4.8,
  },
  {
    name: "Control Xbox Series X",
    description:
      "Control inalámbrico para Xbox con mejor ergonomía y respuesta.",
    price: 59.99,
    stock: 20,
    brand: "Microsoft",
    model: "Xbox Series X Controller",
    color: "Negro",
    photo: "https://www.viu.mx/img/1024/1024/resize/X/B/XBOX00051_x1.jpg",
    launchDate: "2020-11-10",
    guarantee: 12,
    specification: {
      conexion: "Bluetooth / USB-C",
      compatible: "Xbox / PC / Android",
      tipo: "Inalámbrico",
    },
    dimensions: "15 x 10.5 x 6 cm",
    category: "Gaming",
    scoreAverage: 4.5,
  },
  {
    name: 'Monitor LG UltraGear 27"',
    description:
      "Monitor gamer con tasa de refresco de 144Hz y 1ms de respuesta.",
    price: 279.99,
    stock: 10,
    brand: "LG",
    model: "UltraGear 27GN750",
    color: "Negro",
    photo: "https://www.lg.com/ec/images/monitores/md07578233/gallery/d1.jpg",
    launchDate: "2020-03-01",
    guarantee: 24,
    specification: {
      resolución: "Full HD",
      frecuencia: "144Hz",
      respuesta: "1ms",
    },
    dimensions: "61.4 x 36.6 x 4.2 cm",
    category: "Monitores",
    scoreAverage: 4.7,
  },
  {
    name: 'Monitor Dell 24"',
    description: "Monitor IPS de 24 pulgadas con resolución Full HD.",
    price: 189.99,
    stock: 12,
    brand: "Dell",
    model: "P2419H",
    color: "Negro",
    photo: "https://shop.nikotron.us/images/grafics/24LCD.jpg",
    launchDate: "2019-07-01",
    guarantee: 36,
    specification: {
      resolución: "1920x1080",
      tipo: "IPS",
      puertos: "HDMI, VGA, DisplayPort",
    },
    dimensions: "53.8 x 18.0 x 41.2 cm",
    category: "Monitores",
    scoreAverage: 4.2,
  },
  {
    name: "Router TP-Link Archer AX10",
    description:
      "Router Wi-Fi 6 de doble banda con alta velocidad y cobertura.",
    price: 79.99,
    stock: 18,
    brand: "TP-Link",
    model: "Archer AX10",
    color: "Negro",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Tn5CqP5e6yP4tVgoTgHNPfIQIVUxLD9kpA&s",
    launchDate: "2020-08-01",
    guarantee: 24,
    specification: {
      wifi: "802.11ax (Wi-Fi 6)",
      velocidad: "1200 Mbps",
      puertos: "4 LAN + 1 WAN",
    },
    dimensions: "26 x 13.5 x 3.9 cm",
    category: "Redes",
    scoreAverage: 4.5,
  },
  {
    name: "Adaptador USB WiFi TP-Link",
    description:
      "Adaptador inalámbrico Nano para conexiones estables en laptops.",
    price: 14.99,
    stock: 50,
    brand: "TP-Link",
    model: "TL-WN725N",
    color: "Negro",
    photo:
      "https://tecnogame.ec/wp-content/uploads/2021/06/Adap.-Wifi-Usb-Tplink-WN725N-1.jpg",
    launchDate: "2018-09-01",
    guarantee: 12,
    specification: {
      tipo: "Nano USB",
      velocidad: "150 Mbps",
      compatible: "Windows / Linux",
    },
    dimensions: "1.9 x 1.5 x 0.7 cm",
    category: "Redes",
    scoreAverage: 0.0,
  },
];

export const services = [
  {
    name: "Instalación de redes Wi-Fi",
    image:
      "https://www.pandaredes.com/wp-content/uploads/2023/02/electrician-explaining-how-to-use-wi-fi-router-2021-08-28-23-05-39-utc-scaled.jpg",
    description:
      "Configuración e instalación de redes inalámbricas seguras y optimizadas.",
    estimatedPrice: 120.0,
  },
  {
    name: "Reparación de laptops",
    image:
      "https://fundacioncarlosslim.org/wp-content/uploads/2021/09/tecnico-reparacion-laptops-1.jpg",
    description:
      "Diagnóstico y reparación de hardware y software en laptops de todas las marcas.",
    estimatedPrice: 80.0,
  },
  {
    name: "Mantenimiento preventivo PC",
    image:
      "https://www.prensalibre.com/wp-content/uploads/2022/03/Mantenimiento-computadoras-01.jpg?quality=52",
    description:
      "Limpieza interna y revisión completa para mejorar el rendimiento de tu PC.",
    estimatedPrice: 60.0,
  },
  {
    name: "Actualización de software",
    image:
      "https://i0.wp.com/aratecnia.es/wp-content/uploads/2021/09/que-son-las-actualizaciones-de-software-y-su-importancia-para-los-equipos.jpg?fit=870%2C465&ssl=1",
    description:
      "Instalación y configuración de las últimas versiones de software y sistemas operativos.",
    estimatedPrice: 40.0,
  },
  {
    name: "Recuperación de datos",
    image: "https://www.age2.es/wp-content/uploads/2022/09/backup.jpg",
    description:
      "Recuperación profesional de archivos eliminados o inaccesibles en discos duros y SSD.",
    estimatedPrice: 150.0,
  },
];

export const roles = [
  {
    name: "Administrador",
    description:
      "Administrador con todos los permisos para gestionar la plataforma.",
    isValid: true,
    createdAt: new Date().toISOString(),
  },
  {
    name: "Cliente",
    description:
      "Cliente final que puede comprar productos y solicitar servicios.",
    isValid: true,
    createdAt: new Date().toISOString(),
  },
  {
    name: "Técnico",
    description: "Personal técnico encargado de mantenimiento y reparaciones.",
    isValid: true,
    createdAt: new Date().toISOString(),
  },
  {
    name: "Repartidor",
    description:
      "Encargado de realizar entregas y gestionar la logística de envíos.",
    isValid: true,
    createdAt: new Date().toISOString(),
  },
];

export const additionalValues = [
  {
    type: "Entrega rapida",
    value: 15.0,
    description: "Entrega express en menos de 24 horas.",
  },
  {
    type: "Entrega normal",
    value: 5.0,
    description: "Entrega estándar entre 3 y 5 días hábiles.",
  },
];

export const offers = [
  {
    title: "Descuento de verano global",
    description:
      "10% de descuento en todos los productos y servicios por tiempo limitado.",
    typeValue: "Porcentaje",
    value: 10.0,
    isActive: true,
  },
];

export const schedules = [
  {
    day: "Lunes",
    openingHour: "08:00:00",
    closingHour: "17:00:00",
    isWorking: true,
    CompanyId: "uuid-empresa-1234",
  },
  {
    day: "Martes",
    openingHour: "08:00:00",
    closingHour: "17:00:00",
    isWorking: true,
    CompanyId: "uuid-empresa-1234",
  },
  {
    day: "Miercoles",
    openingHour: "08:00:00",
    closingHour: "17:00:00",
    isWorking: true,
    CompanyId: "uuid-empresa-1234",
  },
  {
    day: "Jueves",
    openingHour: "08:00:00",
    closingHour: "17:00:00",
    isWorking: true,
    CompanyId: "uuid-empresa-1234",
  },
  {
    day: "Viernes",
    openingHour: "08:00:00",
    closingHour: "17:00:00",
    isWorking: true,
    CompanyId: "uuid-empresa-1234",
  },
  {
    day: "Sabado",
    openingHour: "08:00:00",
    closingHour: "17:00:00",
    isWorking: true,
    CompanyId: "uuid-empresa-1234",
  },
  {
    day: "Domingo",
    openingHour: "08:00:00",
    closingHour: "12:00:00",
    isWorking: true,
    CompanyId: "uuid-empresa-1234",
  },
];

export const users = [
  {
    fullName: "Juan Pérez",
    dni: "0123456789",
    phone: "0998765432",
    email: "juan.perez@example.com",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    password: envs.GLOBAL_PASSWORD, // Contraseña hasheada
    Role: "Administrador",
    isVerified: true,
    gender: "Masculino",
  },
  {
    fullName: "María Gómez",
    dni: "0987654321",
    phone: "0981234567",
    email: "maria.gomez@example.com",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    password: envs.GLOBAL_PASSWORD, // Contraseña hasheada
    Role: "Cliente",
    isVerified: true,
    gender: "Femenino",
  },
  {
    fullName: "Carlos Ruiz",
    dni: "1122334455",
    phone: "0999988776",
    email: "carlos.ruiz@example.com",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    password: envs.GLOBAL_PASSWORD, // Contraseña hasheada
    Role: "Técnico",
    isVerified: true,
    gender: "Masculino",
  },
  {
    fullName: "Ana Martínez",
    dni: "2233445566",
    phone: "0998877665",
    email: "ana.martinez@example.com",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    password: envs.GLOBAL_PASSWORD, // Contraseña hasheada
    Role: "Repartidor",
    isVerified: true,
    gender: "Otro",
  },
];
