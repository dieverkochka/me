const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: '/me', // Замените на имя вашего репозитория
  assetPrefix: isProd ? '/me/' : '',
};
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: '/me', // Замените на имя вашего репозитория
  assetPrefix: isProd ? '/me/' : '',
};
