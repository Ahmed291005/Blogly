const handler = require('../../blogs.js');

module.exports = async (req, res) => {
  // Enable CORS for all methods including PUT and DELETE
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Log the request for debugging
  console.log(`Dynamic route handler: ${req.method} ${req.url}`);
  console.log('Request details:', {
    method: req.method,
    url: req.url,
    headers: req.headers
  });

  // Delegate to the shared blogs handler which now supports GET/POST/PUT/DELETE
  return handler(req, res);
};


