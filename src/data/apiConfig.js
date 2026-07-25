/**
 * ═══════════════════════════════════════════════════════════════
 *  KONFIGURASI API — Google Sheets LANGSUNG (Tanpa SheetDB)
 * ═══════════════════════════════════════════════════════════════
 *
 *  CARA SETUP:
 *
 *  1. Buka Google Spreadsheet Anda di browser.
 *  2. Klik  File → Share → Publish to web → Klik "Publish".
 *  3. Copy Spreadsheet ID dari URL browser Anda:
 *     https://docs.google.com/spreadsheets/d/[INI_SPREADSHEET_ID]/edit
 *  4. Paste ID tersebut di variabel SPREADSHEET_ID di bawah.
 *
 *  CATATAN PENTING:
 *  - Cukup 1 TAB SHEET bernama "Potensi Paten".
 *  - Pisahkan kategori data menggunakan kolom "Section":
 *    - Fasilitas Umum
 *    - Direktori UMKM
 *    - Kebudayaan dan Kesenian
 *
 * ═══════════════════════════════════════════════════════════════
 */

// ┌───────────────────────────────────────────────────────────┐
// │  SPREADSHEET ID ANDA                                      │
// └───────────────────────────────────────────────────────────┘
const SPREADSHEET_ID = '1E7SBfDyWBZ6RXDo7rESduNuWayhB2NFKHGSoEN8qkSM';

// ┌───────────────────────────────────────────────────────────┐
// │  HANYA 1 TAB SHEET: "Potensi Paten"                       │
// └───────────────────────────────────────────────────────────┘
const SHEET_POTENSI = 'Potensi Paten';

/**
 * Membangun URL Google Sheets gviz/tq untuk mengambil data
 * langsung dari Google tanpa perantara SheetDB.
 */
function buildGoogleSheetsUrl(sheetName) {
  return `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}&_=${Date.now()}`;
}

// Cek apakah Spreadsheet ID sudah dikonfigurasi
const isConfigured = SPREADSHEET_ID !== 'PASTE_SPREADSHEET_ID_DISINI';

export const API_CONFIG = {
  /**
   * Single URL untuk data Potensi Paten (Fasilitas + UMKM + Kebudayaan).
   */
  potensi: isConfigured ? buildGoogleSheetsUrl(SHEET_POTENSI) : null,
};