/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
  i18n: {
    locales: ["tr", "en"], // Supported languages
    defaultLocale: "tr", // Default language
  },
};

export default nextConfig;
