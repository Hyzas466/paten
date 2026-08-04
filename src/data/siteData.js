/**
 * Data konten website Padukuhan Paten.
 *
 * Struktur ini dirancang agar mudah di-replace dengan fetch() dari API eksternal.
 * Cukup ganti isi variabel atau ubah menjadi async fetch tanpa mengubah komponen.
 *
 * Contoh migrasi ke API:
 *   const res = await fetch('/api/site-config');
 *   export const siteConfig = await res.json();
 */

export const siteConfig = {
  /* ─── Info Padukuhan ─── */
  padukuhan: {
    name: 'Paten',
    desa: 'Tuksono',
    kecamatan: 'Sentolo',
    kabupaten: 'Kulon Progo',
    provinsi: 'Daerah Istimewa Yogyakarta',
  },

  /* ─── Hero Section ─── */
  hero: {
    title: 'Selamat Datang di Padukuhan Paten',
    subtitle:
      'Portal informasi resmi Padukuhan Paten, Kelurahan Tuksono, Kecamatan Sentolo, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta. Temukan potensi padukuhan, produk UMKM unggulan, dan informasi layanan masyarakat.',
    ctaText: 'Jelajahi Potensi',
    backgroundImage: '/images/gapura paten.png',
  },

  /* ─── Statistik Demografi ─── */
  stats: [
    {
      id: 'kk',
      label: 'Jumlah KK',
      value: 200,
      description: 'Kepala Keluarga terdaftar',
      icon: 'home',
    },
    {
      id: 'male',
      label: 'Laki-laki',
      value: 450,
      description: 'Penduduk laki-laki',
      icon: 'male',
    },
    {
      id: 'female',
      label: 'Perempuan',
      value: 430,
      description: 'Penduduk perempuan',
      icon: 'female',
    },
  ],

  /* ─── Fasilitas Umum (fallback — data utama dari Spreadsheet) ─── */
  fasilitas: [],

  /* ─── Kebudayaan & Kesenian (fallback — data utama dari Spreadsheet) ─── */
  kebudayaan: [],

  /* ─── Direktori UMKM ─── */
  umkm: [
    {
      id: 1,
      name: 'Keripik Singkong Bu Darmi',
      description:
        'Keripik singkong renyah dengan bumbu rempah khas Kulon Progo yang gurih dan nikmat. Tersedia berbagai varian rasa.',
      detailDescription:
        'Keripik Singkong Bu Darmi diproduksi di Padukuhan Paten, Kelurahan Tuksono. Keripik ini dibuat dari singkong pilihan yang diiris tipis dan digoreng hingga renyah sempurna. Tersedia dalam varian rasa original, pedas, dan balado. Untuk ukuran besar dibanderol dengan harga Rp 25.000 per bungkus sedangkan ukuran mini seharga Rp 15.000 per bungkus. Produk ini biasa dipasarkan di Pasar Sentolo dan sekitarnya. Selain itu, usaha ini sudah menyediakan layanan pesan antar dengan ketentuan minimal pemesanan sebanyak 5 bungkus untuk jarak 20 kilometer.',
      image: null, // Ganti: '/images/umkm/keripik-singkong.jpg'
      qris: true,
      whatsapp: '6281234567890',
      category: 'Makanan',
      lokasi: null, // Ganti dengan Google Maps URL
    },
    {
      id: 2,
      name: 'Batik Tulis Paten',
      description:
        'Batik tulis tradisional dengan motif khas Kulon Progo, dibuat secara handmade oleh pengrajin lokal Padukuhan Paten.',
      detailDescription:
        'Batik Tulis Paten merupakan kerajinan batik tulis yang diproduksi oleh pengrajin lokal di Padukuhan Paten, Kelurahan Tuksono. Motif yang digunakan merupakan motif khas Kulon Progo yang diwariskan secara turun-temurun. Setiap lembar batik dikerjakan secara handmade dengan proses pewarnaan alami. Harga mulai dari Rp 150.000 hingga Rp 500.000 tergantung tingkat kerumitan motif dan ukuran kain. Batik ini cocok untuk bahan pakaian formal maupun casual.',
      image: null,
      qris: true,
      whatsapp: '6281234567891',
      category: 'Kerajinan',
      lokasi: null,
    },
    {
      id: 3,
      name: 'Madu Hutan Sentolo',
      description:
        'Madu murni dari lebah hutan lokal, kaya manfaat untuk kesehatan dan dikemas secara higienis.',
      detailDescription:
        'Madu Hutan Sentolo dipanen langsung dari sarang lebah hutan di kawasan Sentolo, Kulon Progo. Madu ini 100% murni tanpa campuran gula atau bahan pengawet. Kaya akan antioksidan dan nutrisi alami yang baik untuk meningkatkan daya tahan tubuh. Tersedia dalam kemasan botol 250ml (Rp 75.000) dan 500ml (Rp 135.000). Proses pengemasan dilakukan secara higienis untuk menjaga kualitas dan keaslian madu.',
      image: null,
      qris: false,
      whatsapp: '6281234567892',
      category: 'Pertanian',
      lokasi: null,
    },
    {
      id: 4,
      name: 'Anyaman Bambu Pak Suparjo',
      description:
        'Produk anyaman bambu berkualitas untuk kebutuhan rumah tangga dan dekorasi interior.',
      detailDescription:
        'Anyaman Bambu Pak Suparjo diproduksi di Padukuhan Paten oleh Pak Suparjo yang telah berpengalaman lebih dari 20 tahun dalam kerajinan anyaman bambu. Produk yang dihasilkan meliputi besek, tampah, keranjang, dan berbagai peralatan rumah tangga lainnya. Selain itu juga tersedia produk dekorasi interior seperti lampu hias dan hiasan dinding. Harga bervariasi mulai dari Rp 15.000 hingga Rp 200.000 tergantung jenis dan ukuran produk.',
      image: null,
      qris: true,
      whatsapp: '6281234567893',
      category: 'Kerajinan',
      lokasi: null,
    },
    {
      id: 5,
      name: 'Kopi Robusta Paten',
      description:
        'Kopi robusta pilihan dari kebun lokal, dipanggang sempurna untuk cita rasa premium.',
      detailDescription:
        'Kopi Robusta Paten berasal dari kebun kopi lokal di sekitar Padukuhan Paten dan diolah secara tradisional. Biji kopi dipilih secara manual dan dipanggang (roasting) dengan suhu yang tepat untuk menghasilkan cita rasa yang kuat dan aroma yang khas. Tersedia dalam bentuk biji utuh maupun bubuk halus. Kemasan 200gr dibanderol Rp 35.000 dan kemasan 500gr seharga Rp 75.000. Cocok untuk pecinta kopi yang menginginkan rasa autentik kopi Kulon Progo.',
      image: null,
      qris: true,
      whatsapp: '6281234567894',
      category: 'Minuman',
      lokasi: null,
    },
    {
      id: 6,
      name: 'Gula Kelapa Organik',
      description:
        'Gula kelapa organik tanpa bahan pengawet, cocok untuk gaya hidup sehat dan masakan tradisional.',
      detailDescription:
        'Gula Kelapa Organik diproduksi dari nira kelapa segar yang diolah secara tradisional tanpa tambahan bahan kimia atau pengawet. Proses pembuatan dilakukan setiap hari untuk menjamin kesegaran dan kualitas produk. Gula kelapa ini memiliki indeks glikemik rendah sehingga lebih aman untuk penderita diabetes. Tersedia dalam kemasan 500gr (Rp 25.000) dan 1kg (Rp 45.000). Produk ini telah dipasarkan ke berbagai pasar di Kulon Progo dan sekitarnya.',
      image: null,
      qris: false,
      whatsapp: '6281234567895',
      category: 'Pertanian',
      lokasi: null,
    },
  ],

  /* ─── Perangkat / Pimpinan ─── */
  leadership: [
    {
      name: '—', // Ganti dengan nama asli
      position: 'Kepala Dusun',
      phone: '6281234567800',
    },
  ],

  /* ─── Kontak ─── */
  contact: {
    address:
      'Padukuhan Paten, Kelurahan Tuksono, Kec. Sentolo, Kab. Kulon Progo, Daerah Istimewa Yogyakarta',
    phone: '081234567800', // Ganti dengan nomor asli
    email: 'padukuhanpaten@gmail.com', // Ganti dengan email asli
  },

  /* ─── Peta ─── */
  map: {
    wilayah: {
      title: 'Peta Wilayah',
      description: 'Peta lokasi dan batas wilayah Padukuhan Paten',
      embedUrl: null,
      image: '/Peta Paten (Wilayah).jpeg',
    },
    administrasi: {
      title: 'Peta Administrasi',
      description: 'Peta administrasi wilayah',
      image: '/images/peta administrasi paten.png',
    },
  },

  /* ─── Tentang Kami ─── */
  about: {
    title: 'Profil Padukuhan',
    subtitle: 'Sejarah, Visi & Misi Padukuhan Paten',
    sejarah: 'Padukuhan Paten merupakan salah satu wilayah yang kaya akan budaya gotong royong dan potensi alam di Kelurahan Tuksono, Kecamatan Sentolo. Didirikan dengan semangat kebersamaan, padukuhan ini terus berkembang menjadi sentra ekonomi kreatif dan UMKM di Kulon Progo.',
    visi: 'Bersama masyarakat kita wujudkan Desa Tuksono yang bersih, jujur, amanah demi tercapainya masyarakat yang religius, adil, makmur dan berkepribadian yang luhur.',
    misi: [
      'Memperkokoh persatuan dan kerukunan antar warga Desa Tuksono tanpa memandang agama, status sosial, golongan dan mengusahakan peningkatan kesejahteraan kegiatan keagamaan.',
      'Memberdayakan semua elemen masyarakat dalam proses pembangunan mulai perencanaan, pelaksanaan, dan pengawasan sebagai upaya mewujudkan pembangunan yang berkualitas, transparan dan dapat dipertanggungjawabkan.',
      'Memaksimalkan kinerja perangkat desa sesuai tugas pokok dan fungsi demi tercapainya pelayanan terhadap masyarakat yang prima.',
      'Melestarikan adat tradisi, seni, dan budaya yang sudah ada di masyarakat untuk mewujudkan jati diri Tuksono sebagai Desa Budaya.',
      'Membina, mengembangkan, dan selalu koordinasi untuk memfungsikan LPMD, PKK, Karang Taruna, FKPM, dan lembaga kemasyarakatan lainnya demi tercapainya suasana yang aman, tentram, damai, dan nyaman di kalangan masyarakat.',
      'Membina dan memfungsikan generasi muda melalui karang taruna sebagai tulang punggung desa yang memiliki budi pekerti yang luhur dan mandiri dalam menyikapi Tuksono sebagai kawasan industri sehingga warga Tuksono bisa menjadi pelaku bukan hanya jadi penonton.',
      'Mencermati ulang bantuan bagi masyarakat kurang mampu, kaum difabel dan lansia agar tidak salah sasaran.',
    ],
    image: '/images/gapura paten.png',
  },
};
