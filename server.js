const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.json': 'application/manifest+json; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // CORS & PWA headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Service-Worker-Allowed', '/');

  let safePath = req.url === '/' ? 'index.html' : req.url.slice(1);
  safePath = decodeURIComponent(safePath.split('?')[0]);
  const filePath = path.join(__dirname, safePath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Halaman Tidak Ditemukan');
  }
});

server.listen(PORT, () => {
  console.log('====================================================');
  console.log('  STUDIO LAPORAN DIGITAL - PWA LOCAL SERVER AKTIF  ');
  console.log('====================================================');
  console.log(`  Alamat: http://localhost:${PORT}`);
  console.log('  Status: PWA siap dipasang / di-install di Chrome!');
  console.log('  (Tutup jendela hitam ini jika selesai bermain)');
  console.log('====================================================');
});
