const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = {
    target: 'http://127.0.0.1:8983',
    // secure: false,
    changeOrigin: true
}

module.exports = function(app) {
  app.use(
    '/solr/fyp_documents/select',
    createProxyMiddleware(proxy)
  );
};