# MyPortfolio-CICD

Repository ini berisi automation end-to-end untuk memvalidasi halaman portfolio pada environment `dev`. Test dibuat menggunakan WebdriverIO dan Mocha, dijalankan pada Google Chrome, lalu hasilnya dapat dibuat menjadi Allure Report.

## Teknologi

- Node.js 18 atau lebih baru
- WebdriverIO 9
- Mocha
- Google Chrome
- Allure Report
- GitHub Actions

Repository ini berfokus pada automation test. Aplikasi portfolio tidak dijalankan dari repository ini; test mengakses URL deployment berikut:

`https://dev.msuryana-portfolio.pages.dev/`

Fallback untuk aplikasi lokal tersedia di `test/pageobjects/page.js`, tetapi saat ini masih dikomentari dan project portfolio lokal harus dijalankan secara terpisah.

## Struktur Project

```text
.
├── .github/workflows/on-dispatch.yml  # Workflow CI/CD
├── test/
│   ├── pageobjects/
│   │   ├── page.js                    # Base URL dan navigasi halaman
│   │   └── portfolio.page.js           # Selector dan aksi halaman portfolio
│   └── specs/test.e2e.js               # Skenario E2E
├── wdio.conf.js                       # Konfigurasi WebdriverIO
└── package.json                        # Dependency dan npm scripts
```

Folder `allure-results/` dan `allure-report/` dibuat saat test atau report dijalankan. Folder tersebut tidak diperlukan untuk instalasi awal.

## Prasyarat

Pastikan hal berikut tersedia sebelum menjalankan automation:

1. Node.js dan npm. CI menggunakan Node.js 18.
2. Google Chrome yang dapat dibuka oleh WebdriverIO.
3. Koneksi internet ke URL target.
4. Selector yang dibutuhkan test masih tersedia pada website target.

## Menjalankan Automation Secara Lokal

### 1. Install dependency

Dari root repository, jalankan:

```bash
npm ci
```

Gunakan `npm install` hanya jika memang perlu memperbarui `package-lock.json`.

### 2. Jalankan seluruh test

```bash
npm run wdio
```

Script ini menjalankan semua spec pada `test/specs/**/*.js` menggunakan Chrome dalam mode headless. Status exit code akan menunjukkan apakah automation berhasil atau gagal.

### 3. Jalankan spec tertentu

```bash
npx wdio run ./wdio.conf.js --spec ./test/specs/test.e2e.js
```

### 4. Jalankan Chrome dengan tampilan browser

`npm run wdio` selalu menetapkan `HEADLESS=true`. Untuk melihat browser saat test berjalan, gunakan:

```bash
npx wdio run ./wdio.conf.js
```

Konfigurasi membaca `HEADLESS` dari environment variable. Nilai selain string `true` akan menjalankan Chrome tanpa flag headless.

## Skenario yang Diuji

Spec `test/specs/test.e2e.js` memvalidasi bahwa:

- nama, role, deskripsi, dan foto profile tampil;
- navigasi ke setiap section dapat digunakan;
- judul section berikut tampil dengan teks yang benar: `PROJECTS`, `SKILLS`, `WORK EXPERIENCES`, `CERTIFICATIONS`, `BLOGS`, `GITHUB PROJECT`, dan `CONTACT`.

Selector halaman dipusatkan di `test/pageobjects/portfolio.page.js`, sehingga perubahan ID atau `data-test` pada aplikasi target perlu disesuaikan di page object tersebut.

## Allure Report

WebdriverIO menghasilkan raw result di `allure-results/`. Untuk membuat dan membuka report HTML secara lokal, install Allure CLI terlebih dahulu:

```bash
npm install -g allure-commandline
```

Setelah test selesai, jalankan:

```bash
npm run report
```

Perintah tersebut menyalin history report sebelumnya jika tersedia, membuat report baru di `allure-report/`, lalu membukanya secara lokal. Perintah terpisah yang tersedia:

```bash
npm run clearAllure-Result
npm run clearAllure-Report
npm run report:generate
npm run report:open
npm run deploy:report
```

`npm run deploy:report` mem-publish folder `allure-report` menggunakan `gh-pages`; gunakan hanya jika memiliki akses push ke repository dan report sudah dibuat.

## CI/CD GitHub Actions

Workflow `.github/workflows/on-dispatch.yml` dapat dipicu melalui `repository_dispatch` dengan type `run-tests` atau dipanggil oleh workflow lain melalui `workflow_call`. Alurnya adalah:

1. Checkout repository dan setup Node.js 18.
2. Install dependency dengan `npm ci`.
3. Install Allure CLI dan menjalankan test dengan `npm run wdio`.
4. Generate serta upload Allure Report meskipun test gagal.
5. Publish report ke branch `gh-pages`.
6. Jika test lulus, merge `dev` ke branch `main` pada repository portfolio dan memicu deployment production.
7. Mengirim status automation ke Telegram.

Secret berikut harus tersedia pada GitHub Actions:

- `TELEGRAM_BOT_TOKEN`: token bot Telegram untuk notifikasi.
- `TELEGRAM_CHAT_ID`: tujuan notifikasi Telegram.
- `PERSONAL_TOKEN`: token untuk publish report dan mengakses repository portfolio.

## Link

- Website portfolio: [msuryana-portfolio.pages.dev](https://msuryana-portfolio.pages.dev/)
- Allure Report: [suryana-code.github.io/MyPortfolio-CICD](https://suryana-code.github.io/MyPortfolio-CICD/)
