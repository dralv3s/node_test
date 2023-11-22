const crypto = require('crypto');
const https = require('https');

function doRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => data += chunk);
      response.on('end', () => resolve(data));
    }).on('error', (e) => reject(e));
  });
}

function getHash(input) {
  return crypto.createHash('sha256').update(input).digest('hex');
}

function getNewHash(b, c) {
  return crypto.createHash('sha256').update(b + c).digest('hex');
}

module.exports = { doRequest, getHash, getNewHash };
