// PK Note — Zero-Dependency Local NVIDIA NIM CORS Proxy
// Enables direct browser access to NVIDIA AI without external Cloudflare Workers
const http = require('http');
const https = require('https');

const PORT = process.env.PORT || 4000;
const HOST = '127.0.0.1';

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

  // Health check endpoint
  if (req.url === '/' || req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, service: 'pk-note-nvidia-proxy', port: PORT }));
    return;
  }

  // Normalize path to /v1/...
  let targetPath = req.url;
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
    if (upstreamRes.headers['cache-control']) outHeaders['Cache-Control'] = upstreamRes.headers['cache-control'];

    res.writeHead(upstreamRes.statusCode || 200, outHeaders);
    upstreamRes.pipe(res);
  });

  proxyReq.on('error', (err) => {
    res.writeHead(502, {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({ error: { message: 'NVIDIA proxy error: ' + err.message } }));
  });

  req.pipe(proxyReq);
});

server.listen(PORT, HOST, () => {
  console.log(`[PK Note] NVIDIA NIM Local Proxy running on http://${HOST}:${PORT}/v1`);
});
