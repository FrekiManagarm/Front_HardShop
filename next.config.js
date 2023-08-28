/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" }
                ]
            }
        ]
    },
    env: {
        API_URL: process.env.API_URL
    },
    swcMinify: true,
    images: {
        domains: ['i.imgur.com']
    },
    i18n: {
        defaultLocale: "fr",
        locales: ["fr", "en"],
        localeDetection: true,
    },
}

module.exports = nextConfig
