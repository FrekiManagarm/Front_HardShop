/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL
    },
    swcMinify: true,
    i18n: {
        defaultLocale: "fr",
        locales: ["fr", "en"],
        localeDetection: true,
    },
}

module.exports = nextConfig
