# UmrahBISA

Website landing page untuk **UmrahBISA** (*Semua BISA Umrah*), brand travel umrah dari **PT. Alzam Mandiri Wisata**. Dibuat sebagai Final Project dengan HTML, CSS, dan Bootstrap 5, serta responsive untuk desktop, tablet, dan mobile.

## Halaman

| Halaman | File | Isi |
|---|---|---|
| Beranda | `index.html` | Hero, About, 3 kartu paket umrah, FAQ, dan Contact |
| About Us | `pages/about.html` | Layanan, legalitas (PPIU dan PIHK), kantor pusat, dan peta |
| Paket Umrah | `pages/paket-umrah.html` | Brosur paket aktif, grup WhatsApp promo, dan kontak CS |
| Daftar Agen | `pages/daftar-agen.html` | Daftar 33 agen dengan pencarian dan tombol WhatsApp |

## Fitur

- Desain konsisten di semua halaman (warna, tipografi, dan komponen kartu yang sama)
- Navbar sticky dengan menu hamburger di mobile
- Pencarian agen secara langsung (JavaScript, tanpa library tambahan)
- Tombol WhatsApp dengan pesan otomatis di setiap paket dan agen
- FAQ memakai accordion Bootstrap
- Google Maps tertanam di halaman About

## Teknologi

- HTML5
- CSS3 (custom properties, flexbox, grid)
- [Bootstrap 5.3](https://getbootstrap.com/) lewat CDN
- JavaScript (vanilla)
- Font [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) dari Google Fonts

## Struktur Folder

```
FinalProject/
├── index.html
├── README.md
├── css/
│   └── main.css
├── pages/
│   ├── about.html
│   ├── daftar-agen.html
│   └── paket-umrah.html
└── assets/
    └── img/
        ├── LogoUmrahBisa.png
        └── hero-image.jpg
```

## Cara Menjalankan

1. Clone repository ini:
   ```bash
   git clone https://github.com/<username>/<nama-repository>.git
   cd <nama-repository>
   ```
2. Buka `index.html` langsung di browser, atau jalankan dengan server lokal. Contohnya ekstensi **Live Server** di VS Code, atau:
   ```bash
   python3 -m http.server 8000
   ```
   lalu buka `http://localhost:8000`.

Koneksi internet diperlukan karena Bootstrap, font, dan sebagian gambar dimuat dari CDN atau situs lain.

## Catatan Pengembangan

Beberapa bagian masih berupa placeholder dan perlu diganti sebelum website dipublikasikan:

- [ ] Nomor WhatsApp `62XXXXXXXXXX` di `index.html` (tombol navbar, paket, dan contact)
- [ ] Harga, fasilitas, dan nama paket di 3 kartu `index.html` masih contoh
- [ ] Email, alamat, dan jam operasional di bagian Contact `index.html`
- [ ] Gambar dokumen legalitas di `about.html` dan brosur di `paket-umrah.html` masih diambil dari `umrahbisa.com`. Unduh ke `assets/img/` lalu ganti `src`-nya
- [ ] Foto bagian About di `index.html`
- [ ] Menu navbar `index.html` disesuaikan dengan halaman di folder `pages/`

## Menambah Agen Baru

Buka `pages/daftar-agen.html`, lalu salin satu blok `<div class="col-md-6 col-lg-4 agent-item" ...>` dan ubah isinya. Isi atribut `data-search` dengan huruf kecil agar pencarian tetap berfungsi, dan sesuaikan nomor urut serta jumlah agen di teks "Menampilkan ... agen".

## Sumber Konten

Konten teks dan data (daftar agen, legalitas, alamat kantor) diambil dari website resmi [umrahbisa.com](https://umrahbisa.com) dan seluruh hak atas konten tersebut dimiliki oleh PT. Alzam Mandiri Wisata.

## Lisensi

Project ini dibuat untuk keperluan Final Project. Seluruh merek, logo, dan konten milik PT. Alzam Mandiri Wisata (UmrahBISA).
