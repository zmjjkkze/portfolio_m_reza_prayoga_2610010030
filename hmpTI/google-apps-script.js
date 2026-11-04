/**
 * ============================================================================
 * GOOGLE APPS SCRIPT - DATABASE PENDAFTARAN BUSINESS PARTNER & PRODUK MITRA
 * HMP-TI UNISKA MAB BANJARMASIN (TERHUBUNG KE WEB 3)
 * ============================================================================
 * 
 * CARA MENGGUNAKAN:
 * 1. Buka Google Sheets baru di https://sheets.new atau https://sheets.google.com
 * 2. Beri nama spreadsheet, misal: "Database Business Partner & Produk HMP-TI"
 * 3. Klik menu: Ekstensi (Extensions) > Apps Script
 * 4. Hapus semua teks bawaan, lalu SALIN & TEMPEL seluruh isi kode di file ini
 * 5. Klik icon Simpan (Ctrl + S)
 * 6. Klik tombol biru "Terapkan" (Deploy) di pojok kanan atas > "Penerapan baru" (New deployment)
 * 7. Pilih tipe: "Aplikasi web" (Web app)
 *    - Deskripsi: Database Partner Web 3 HMP-TI
 *    - Jalankan sebagai (Execute as): Saya (Me)
 *    - Siapa yang memiliki akses (Who has access): Siapa saja (Anyone) -> WAJIB!
 * 8. Klik "Terapkan" (Deploy) & Berikan izin akses (Authorize Access) akun Google Anda
 * 9. Salin "URL Aplikasi Web" (Web App URL) yang dihasilkan
 * 10. Tempelkan URL tersebut ke variabel GOOGLE_SHEET_URL di file:
 *     - form-produk.html (Web 3)
 *     - partner.html / bergabung.html
 * ============================================================================
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Inisialisasi Header otomatis 14 kolom jika sheet masih kosong
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Tanggal & Waktu (WIB)",
        "Nama Perusahaan / Brand",
        "Nama Pemilik / PIC",
        "Nomor WhatsApp",
        "Email",
        "Media Sosial / Marketplace",
        "Alamat Usaha",
        "Nama Produk",
        "Jenis Produk",
        "Harga Produk",
        "Foto Produk",
        "Daftar Menu / Katalog",
        "Masa Kedaluwarsa",
        "Sertifikasi Halal / Izin Edar"
      ];
      sheet.appendRow(headers);
      
      // Styling Header (Biru Navy HMP-TI, Teks Putih Tebal, Freeze Baris 1)
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#0F172A");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      headerRange.setHorizontalAlignment("center");
      headerRange.setVerticalAlignment("middle");
      headerRange.setFontFamily("Arial");
      sheet.setRowHeight(1, 38);
      sheet.setFrozenRows(1);
    }
    
    // Parse data JSON / Form Post
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else if (e.parameter) {
      data = e.parameter;
    }
    
    // Timestamp WIB
    const now = new Date();
    const timestamp = Utilities.formatDate(now, "Asia/Jakarta", "dd/MM/yyyy HH:mm:ss") + " WIB";
    
    // Susun baris data terpadu (Mitra + Produk)
    const rowData = [
      timestamp,
      data.brand || data.companyBrand || "-",
      data.owner || data.ownerName || "-",
      data.wa || data.whatsappNumber || "-",
      data.email || data.partnerEmail || "-",
      data.social || data.socialMedia || "-",
      data.address || data.businessAddress || "-",
      data.prodName || data.name || "-",
      data.prodType || data.type || "-",
      data.prodPrice || data.price || "-",
      data.prodPhoto || data.photoFile || "-",
      data.prodCatalog || data.catalogDisplay || "-",
      data.prodExpiry || data.expiry || "-",
      data.prodCert || data.certDisplay || "-"
    ];
    
    sheet.appendRow(rowData);
    
    // Styling baris data baru
    const lastRow = sheet.getLastRow();
    const rowRange = sheet.getRange(lastRow, 1, 1, rowData.length);
    rowRange.setFontFamily("Arial");
    rowRange.setVerticalAlignment("middle");
    sheet.setRowHeight(lastRow, 30);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: "success", 
        message: "Data pendaftaran kemitraan & produk berhasil tersimpan di Google Sheets!",
        row: lastRow 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: "error", 
        message: err.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "active", 
      message: "Database Google Sheets Pendaftaran Partner & Produk HMP-TI Aktif!" 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

