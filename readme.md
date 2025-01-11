# API Server Test PT Rimba Ananta Vikasa

API server sederhana yang mengimplementasikan fitur CRUD (Create, Read, Update, Delete) untuk entitas **User** menggunakan Node.js, Express, dan PostgreSQL. API ini juga dilengkapi dengan validasi input, logging, serta pengujian menggunakan Jest.

## Deskripsi Proyek

Proyek ini adalah bagian dari evaluasi kemampuan Fullstack untuk posisi di PT Rimba Ananta Vikasa. API ini mencakup operasi dasar seperti:

- **Create**: Menambahkan pengguna baru
- **Read**: Mendapatkan daftar pengguna atau pengguna berdasarkan ID
- **Update**: Memperbarui data pengguna berdasarkan ID
- **Delete**: Menghapus pengguna berdasarkan ID

Fitur tambahan yang diimplementasikan:

- **Validasi input**: Pastikan data yang diterima memiliki format yang benar.
- **Logging**: Setiap request yang masuk akan dicatat dalam file log.
- **Pengujian**: Menggunakan Jest untuk menguji setiap endpoint API.

## Fitur

1. **CRUD untuk entitas User**:

   - ID (UUID)
   - Name (string)
   - Email (string, unique)
   - Age (number)

2. **Endpoint API**:

   - `GET /users`: Mendapatkan daftar semua pengguna
   - `GET /users/:id`: Mendapatkan data pengguna berdasarkan ID
   - `POST /users`: Menambahkan pengguna baru
   - `PUT /users/:id`: Memperbarui data pengguna berdasarkan ID
   - `DELETE /users/:id`: Menghapus pengguna berdasarkan ID

3. **Validasi Input**:

   - Middleware untuk validasi input yang diterima di setiap request.

4. **Logging**:

   - Setiap request akan tercatat dalam file log untuk analisis lebih lanjut.

5. **Pengujian**:
   - Unit test untuk setiap endpoint API menggunakan Jest.

## Teknologi yang Digunakan

- **Node.js**
- **Express.js**: Framework untuk membangun API
- **PostgreSQL**: Database untuk menyimpan data pengguna
- **Jest**: Untuk pengujian
- **dotenv**: Untuk pengelolaan variabel lingkungan
- **winston**: Untuk logging

## Instalasi

1. **Clone repository**:

   ```bash
   git clone git@github.com:anzalass/test-pt-rimba-ananta-vikasa.git
   ```

2. **Sesuaikan konfigurasi**:

   - Salin file `.env.example` menjadi `.env` dan sesuaikan variabel lingkungan sesuai dengan kebutuhan Anda. Pastikan Anda sudah mengatur database connection string, serta parameter lainnya seperti port aplikasi.

   ```bash
   cp .env.example .env
   ```
   
3. **Instalasi Depedensy**
   ```bash
   npm install
   ```
   
4. **Jalankan**
   ```bash
   npm start
   ```

5. **Jalankan Migrate**
   - Pastikan Sebelum menjalankan Migrate dan seed Database Postgres kalian telah terinstal uuid-ossp, jika belum silahkan isnstall terlebih dahulu 
      ```bash
   npm run migrate
   ```
      
7. **Jalankan Seed**
      ```bash
   npm run seed
   ```
###### Untuk Pengujian

    npm test
