// PK Note — Unified Local Server & NVIDIA NIM AI CORS Proxy
// Enables direct access across Desktop PC and Mobile Phones on Wi-Fi with Zero Dependencies
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = parseInt(process.env.PORT || '4000', 10);
const HOST = '0.0.0.0';
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.wasm': 'application/wasm',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8'
};

function getLanIpAddresses() {
  const nets = os.networkInterfaces();
  const ips = [];
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      if (net.family === 'IPv4' && !net.internal && !net.address.startsWith('169.254.')) {
        ips.push({ iface: name, ip: net.address });
      }
    }
  }
  return ips;
}

function serveStaticFile(req, res, pathname) {
  let relativePath = decodeURIComponent(pathname);
  if (relativePath === '/' || relativePath === '') {
    relativePath = '/index.html';
  }

  const safePath = path.normalize(path.join(ROOT_DIR, relativePath));
  if (!safePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // If file not found, try fallback to index.html for SPA routes
      const indexPath = path.join(ROOT_DIR, 'index.html');
      fs.readFile(indexPath, (readErr, indexData) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('File Not Found');
          return;
        }
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(indexData);
      });
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Content-Length': stats.size
    };

    if (ext === '.wasm' || ext === '.js' || ext === '.css' || ext === '.png' || ext === '.svg') {
      headers['Cache-Control'] = 'public, max-age=3600';
    }

    res.writeHead(200, headers);
    fs.createReadStream(safePath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  // CORS Headers for browser access
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

  // Handle preflight OPTIONS
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // Health check endpoint
  if (pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      ok: true,
      service: 'pk-note-server',
      port: PORT,
      lanIps: getLanIpAddresses()
    }));
    return;
  }

  // NVIDIA AI Proxy endpoint (/v1/...)
  if (pathname.startsWith('/v1/') || pathname === '/v1') {
    let targetPath = pathname + parsedUrl.search;
    if (!targetPath.startsWith('/v1')) {
      targetPath = '/v1' + (targetPath.startsWith('/') ? targetPath : '/' + targetPath);
    }

    const upstreamHeaders = {
      'Content-Type': req.headers['content-type'] || 'application/json'
    };
    if (req.headers['authorization']) {
      upstreamHeaders['authorization'] = req.headers['authorization'];
    }

    const options = {
      hostname: 'integrate.api.nvidia.com',
      port: 443,
      path: targetPath,
      method: req.method,
      headers: upstreamHeaders
    };

    const proxyReq = https.request(options, (upstreamRes) => {
      const outHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
        'Content-Type': upstreamRes.headers['content-type'] || 'application/json'
      };
      if (upstreamRes.headers['cache-control']) {
        outHeaders['Cache-Control'] = upstreamRes.headers['cache-control'];
      }

      res.writeHead(upstreamRes.statusCode || 200, outHeaders);
      upstreamRes.pipe(res);
    });

    proxyReq.on('error', (proxyErr) => {
      res.writeHead(502, {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({ error: { message: 'NVIDIA proxy error: ' + proxyErr.message } }));
    });

    req.pipe(proxyReq);
    return;
  }

  // Serve static application files for Desktop & Mobile Phone
  serveStaticFile(req, res, pathname);
});

server.listen(PORT, HOST, () => {
  const lanIps = getLanIpAddresses();
  console.log('======================================================================');
  console.log('  PK Note Unified Server & NVIDIA AI Proxy is Live!');
  console.log('======================================================================');
  console.log(`  Desktop PC:       http://localhost:${PORT}`);
  lanIps.forEach(net => {
    console.log(`  Mobile Phone:     http://${net.ip}:${PORT}  (${net.iface} Wi-Fi)`);
  });
  console.log('----------------------------------------------------------------------');
  console.log(`  NVIDIA Endpoint:  http://localhost:${PORT}/v1`);
  if (lanIps.length > 0) {
    console.log(`  NVIDIA on Phone:  http://${lanIps[0].ip}:${PORT}/v1`);
  }
  console.log('======================================================================');
  console.log('  Open the Mobile Phone URL on your phone\'s browser (Safari/Chrome).');
  console.log('  You can tap "Add to Home Screen" on your phone to install PK Note!');
  console.log('======================================================================');
});
