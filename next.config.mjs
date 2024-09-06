/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : ["image.tmdb.org"]
    }
};

const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  reactStrictMode: true,
  // diğer Next.js konfigürasyonlarınız
};
 

export default nextConfig;
