
export const profile = {
  name: 'Nikita Aidina Hidayat',
  firstName: 'Nikita',
  lastName: 'Aidina Hidayat',
  role: 'Student Developer',
  university: 'Universitas Pamulang',
  semester: '3',

  email: 'nikihdyt12L@gmail.com',
  github: 'https://github.com/moqi201',
  instagram: 'https://www.instagram.com/nikitahdyt/',
  kumparan: 'https://kumparan.com/nikita-aidina-hdyt',

  intro:
    'A student developer exploring web and mobile development, building digital experiences, and continuously learning through real-world projects.',

  about:
    "I'm Nikita Aidina Hidayat, a third-semester student at Universitas Pamulang. I have an interest in web and mobile application development, UI/UX, and technology. Through academic and personal projects, I enjoy exploring different technologies, solving problems, and turning ideas into useful digital experiences.",
}

export const navigation = [
  { id: 'home', number: '01', label: 'Home' },
  { id: 'about', number: '02', label: 'About' },
  { id: 'skills', number: '03', label: 'Skills' },
  { id: 'projects', number: '04', label: 'Projects' },
  { id: 'writing', number: '05', label: 'Writing' },
]

export const primarySkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Tailwind CSS',
  'Dart',
  'Flutter',
]

export const technologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'Tailwind CSS',
  'Dart',
  'Flutter',
  'PHP',
  'Laravel',
  'MySQL',
  'REST API',
  'C++',
  'GSAP',
  'Chart.js',
  'SQLite',
]

export const skillGroups = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Building responsive websites and web applications with a focus on clean layouts, functionality, and user experience.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS',
      'PHP',
      'Laravel',
      'Express.js',
      'MySQL',
    ],
  },
  {
    number: '02',
    title: 'Mobile Development',
    description:
      'Exploring mobile application development using Flutter and Dart, including application interfaces and API integration.',
    technologies: [
      'Flutter',
      'Dart',
      'REST API',
      'SQLite',
      'Geolocator',
    ],
  },
  {
    number: '03',
    title: 'Research & Digital',
    description:
      'Exploring academic research, scientific writing, data analysis, and the application of technology in real-world problems.',
    technologies: [
      'K-Means',
      'Data Analysis',
      'Research',
      'Technical Writing',
    ],
  },
]

export const projects = [
  {
    number: '01',
    title: 'Lensa Daerah',
    category: 'Healthcare Data Platform',
    type: 'Web',
    description:
      'A digital platform for exploring and monitoring healthcare facility data across West Java. Integrated with Open Data Jawa Barat to provide accessible healthcare information.',

    image: '/images/project-01.png',

    tags: [
      'Laravel',
      'PHP',
      'Tailwind CSS',
      'GSAP',
      'Chart.js',
    ],

    github: 'https://github.com/moqi201/Lensa-Daerah',
    demo: 'https://lensa-daerah-six.vercel.app',

    featured: true,
  },

  {
    number: '02',
    title: 'ATTENDDA',
    category: 'Attendance Management App',
    type: 'Mobile',
    description:
      'A mobile attendance application featuring authentication, location-based check-in and check-out, attendance history, statistics, and user profiles.',

    image: '/images/project-02.png',

    tags: [
      'Flutter',
      'Dart',
      'REST API',
      'Geolocator',
      'SharedPreferences',
    ],

    github: null,
    demo: null,
    featured: false,
  },

  {
    number: '03',
    title: 'Glowrilla',
    category: 'Salon Booking Application',
    type: 'Mobile',
    description:
      'A mobile application for salon services, allowing users to explore services, manage bookings, and view booking history.',

    image: '/images/project-03.jpg',

    tags: [
      'Flutter',
      'Dart',
      'REST API',
    ],

    github: null,
    demo: null,
    featured: false,
  },

  {
  number: '04',
  title: 'Toko HP Management',
  category: 'Inventory & Sales Application',
  type: 'Mobile',

  description:
    'A mobile inventory management application featuring product management, stock monitoring, search, shopping cart, and checkout functionality.',

  video: '/videos/toko-hp-demo.webm',

  tags: [
    'Flutter',
    'Dart',
    'SQLite',
    'CRUD',
  ],

  github: null,
  demo: null,
  featured: false,
},

  {
    number: '05',
    title: 'Student Data Management',
    category: 'Student Management Website',
    type: 'Web',
    description:
      'A web-based student information management system with student data management, CRUD operations, and database integration.',

    image: '/images/project-05.png',

    tags: [
      'Node.js',
      'Express.js',
      'EJS',
      'MySQL',
    ],

    github: null,
    demo: null,
    featured: false,
  },
]


export const researchPublications = [
  {
    number: '01',

    title:
      'Analisis Kemampuan Masyarakat dalam Mendeteksi Link Phishing dengan Metode SPSS Regresi Linear',

    category: 'Cybersecurity & Digital Literacy',

    journal: 'JATI - Jurnal Mahasiswa Teknik Informatika',

    volume: 'Vol. 10 No. 1 (2026)',

    date: '28 January 2026',

    description:
      'A quantitative study analyzing the relationship between public knowledge of phishing and the ability to detect phishing links using simple linear regression and SPSS.',

    tags: [
      'Cybersecurity',
      'SPSS',
      'Linear Regression',
      'Digital Literacy',
    ],

    url: 'https://ejournal.itn.ac.id/jati/article/view/16942',

    doi: 'https://doi.org/10.36040/jati.v10i1.16942',
  },

  {
    number: '02',

    title:
      'Clustering Tingkat Burnout Mahasiswa Berdasarkan Pola Screen Time dan Kualitas Tidur Menggunakan K-Means',

    category: 'Data Science & Academic Research',

    journal: 'JATI - Jurnal Mahasiswa Teknik Informatika',

    volume: 'Vol. 10 No. 5 (2026)',

    date: '2 October 2026',

    description:
      'Research exploring student academic burnout based on screen time patterns and sleep quality using the K-Means clustering algorithm.',

    tags: [
      'K-Means',
      'Data Analysis',
      'Clustering',
      'Academic Research',
    ],

    url: 'https://ejournal.itn.ac.id/jati/article/view/19378',

    doi: 'https://doi.org/10.36040/jati.v10i5.19378',
  },
]


export const articles = [
  {
    number: '01',
    title:
      'Panggung RAKSA Karang Taruna RW 06 Jatipulo: Dari Warga,oleh Pemuda, untuk Semua',

    category: 'Community & Culture',
    date: '11 September 2026',

    description:
      'A story about youth participation, local culture, community collaboration, and environmental education through the RAKSA event in Jatipulo.',

    url: 'https://kumparan.com/nikita-aidina-hdyt/panggung-raksa-karang-taruna-rw-06-jatipulo-dari-warga-oleh-pemuda-untuk-semua-28A3qOSKvKQ',
  },

  {
    number: '02',
    title:
      'Dekat di Layar, Asing di Rumah: Paradoks Pertemanan Generasi Digital',

    category: 'Digital Society',
    date: '9 July 2026',

    description:
      'An opinion exploring how digital connectivity can coexist with declining face-to-face social interaction and meaningful relationships.',

    url: 'https://kumparan.com/nikita-aidina-hdyt/dekat-di-layar-asing-di-rumah-paradoks-pertemanan-generasi-digital-27kkSz20mv1',
  },

  {
    number: '03',
    title:
      'Menolak Terkurung Kubikel: Otak Juga Butuh Segarnya Ruang Terbuka',

    category: 'Lifestyle & Wellbeing',
    date: '6 July 2026',

    description:
      'A reflection on mental fatigue, screen-heavy routines, and the importance of reconnecting with outdoor environments.',

    url: 'https://kumparan.com/nikita-aidina-hdyt/menolak-terkurung-kubikel-otak-juga-butuh-segarnya-ruang-terbuka-27jcrTk4GBN',
  },

  {
    number: '04',
    title:
      'Empati di Era Digital: Siapa yang Mau Mendengarkan?',

    category: 'Opinion & Mental Health',
    date: '29 May 2026',

    description:
      'An opinion about emotional validation, empathy, and why listening can sometimes matter more than immediately offering solutions.',

    url: 'https://kumparan.com/nikita-aidina-hdyt/empati-di-era-digital-siapa-yang-mau-mendengarkan-27UVYzdf8rJ',
  },
]
