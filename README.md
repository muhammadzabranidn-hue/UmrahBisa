# UmrahBISA

Website company profile untuk **UmrahBISA** (*Semua BISA Umrah*), brand travel umrah dari **PT. Alzam Mandiri Wisata**. Dibuat sebagai Final Project dengan HTML, CSS, dan Bootstrap 5. Tampilannya responsive untuk desktop, tablet, dan mobile.

## Halaman

| Halaman | File | CSS khusus | JS khusus | Isi |
|---|---|---|---|---|
| Beranda | `index.html` | `css/main.css` | - | Hero, About, 3 kartu paket umrah, FAQ, dan Contact |
| About Us | `pages/about.html` | `css/about.css` | - | Layanan, legalitas (PPIU dan PIHK), kantor pusat, dan peta |
| Galeri | `pages/galeri.html` | `css/galeri.css` | `js/galeri.js` | 20 foto kegiatan dengan filter kategori dan lightbox |
| Paket Umrah | `pages/paket-umrah.html` | `css/paket-umrah.css` | - | Brosur paket aktif, grup WhatsApp promo, dan kontak CS |
| Daftar Agen | `pages/daftar-agen.html` | `css/daftar-agen.css` | `js/app.js` | 33 agen dengan pencarian dan tombol WhatsApp |

## Fitur

- Desain konsisten di semua halaman (warna, tipografi, dan komponen kartu yang sama)
- Navbar sticky dengan menu hamburger di mobile
- Galeri dengan filter kategori dan lightbox (navigasi tombol dan panah keyboard)
- Pencarian agen secara langsung (JavaScript, tanpa library tambahan)
- Tombol WhatsApp dengan pesan otomatis
- FAQ memakai accordion Bootstrap
- Google Maps tertanam di halaman About

## Teknologi

- HTML5
- CSS3 (custom properties, flexbox, grid, multi-column)
- [Bootstrap 5.3](https://getbootstrap.com/) lewat CDN
- JavaScript (vanilla)
- Font [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) dari Google Fonts

## Struktur Folder

```
FinalProject/
├── index.html
├── README.md
├── .gitignore
├── css/
│   ├── base.css            # style bersama, dimuat di semua halaman
│   ├── main.css            # khusus beranda
│   ├── about.css           # khusus halaman About
│   ├── galeri.css          # khusus halaman Galeri
│   ├── paket-umrah.css     # khusus halaman Paket Umrah
│   └── daftar-agen.css     # khusus halaman Daftar Agen
├── js/
│   ├── app.js              # pencarian agen (Daftar Agen)
│   └── galeri.js           # filter dan lightbox (Galeri)
├── pages/
│   ├── about.html
│   ├── daftar-agen.html
│   ├── galeri.html
│   └── paket-umrah.html
└── assets/
    ├── img/
    │   ├── LogoUmrahBisa.png
    │   └── hero-image.jpg
    └── bootstrap/          # salinan lokal Bootstrap (css/ dan js/)
```

> **Catatan:** Saat ini seluruh halaman memuat Bootstrap dari CDN, sehingga folder `assets/bootstrap/` belum dipakai. Hapus folder itu kalau tidak diperlukan, atau ubah link di HTML supaya memakai file lokal (misalnya `assets/bootstrap/css/bootstrap.min.css`).

## Struktur CSS

CSS dipisah per halaman supaya mudah dibaca dan dirawat. Setiap halaman memuat dua file: `base.css` lebih dulu, lalu CSS miliknya sendiri.

```html
<link rel="stylesheet" href="../css/base.css">
<link rel="stylesheet" href="../css/about.css">
```

| File | Isi |
|---|---|
| `base.css` | Variabel warna (`:root`), font, navbar, tombol, komponen umum, page header halaman dalam, contact box, dan footer |
| `main.css` | Hero, About, kartu paket, dan FAQ khusus beranda |
| `about.css` | Gambar header, kartu layanan, legalitas, kantor pusat, dan peta |
| `galeri.css` | Filter kategori, grid foto, dan lightbox |
| `paket-umrah.css` | Brosur paket dan kotak informasi |
| `daftar-agen.css` | Kolom pencarian dan kartu agen |

Aturan pembagiannya: kalau sebuah style dipakai di dua halaman atau lebih, letakkan di `base.css`. Kalau hanya dipakai satu halaman, letakkan di CSS halaman itu. Warna utama ada di `:root` pada `base.css`, jadi cukup diubah di satu tempat.

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

- [ ] Nomor WhatsApp `62XXXXXXXXXX` di `index.html` (navbar, kartu paket, dan contact)
- [ ] Harga, fasilitas, dan nama paket di kartu `index.html` masih contoh
- [ ] Email, alamat, dan jam operasional di bagian Contact `index.html`
- [ ] Foto galeri, dokumen legalitas di `about.html`, dan brosur di `paket-umrah.html` masih diambil dari `umrahbisa.com`. Unduh ke `assets/img/` lalu ganti `src`-nya
- [ ] Foto bagian About di `index.html`
- [ ] Menu "Galeri" belum ada di navbar halaman selain `galeri.html`

## Menambah Agen Baru

Buka `pages/daftar-agen.html`, lalu salin satu blok `<div class="col-md-6 col-lg-4 agent-item" ...>` dan ubah isinya. Isi atribut `data-search` dengan huruf kecil agar pencarian tetap berfungsi, dan sesuaikan nomor urut serta jumlah agen di teks "Menampilkan ... agen".

## Menambah Foto Galeri

Buka `pages/galeri.html`, lalu salin satu blok `<figure class="galeri-item" ...>` dan ubah:

- `data-category` dengan salah satu nilai `keberangkatan`, `ziarah`, `pelatihan`, atau `plus`
- `data-full` dan `src` dengan alamat foto
- `data-caption`, `alt`, dan teks `<figcaption>` dengan keterangan foto

## Sumber Konten

Konten teks dan data (daftar agen, legalitas, alamat kantor, foto galeri) diambil dari website resmi [umrahbisa.com](https://umrahbisa.com). Seluruh hak atas konten tersebut dimiliki oleh PT. Alzam Mandiri Wisata.

## Lisensi

Project ini dibuat untuk keperluan Final Project. Seluruh merek, logo, dan konten milik PT. Alzam Mandiri Wisata (UmrahBISA).
