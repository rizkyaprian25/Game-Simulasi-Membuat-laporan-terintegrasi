@echo off
title Studio Laporan Digital - PWA Launcher
echo ========================================================
echo    STUDIO LAPORAN DIGITAL: PWA LOCAL SERVER LAUNCHER
echo ========================================================
echo Membuka aplikasi di http://localhost:8080 ...
echo Browser akan otomatis terbuka.
echo Di browser, klik tombol 'Pasang Aplikasi' atau ikon install di bilah alamat!
echo --------------------------------------------------------

start http://localhost:8080
node server.js
pause
