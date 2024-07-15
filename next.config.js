/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        RAPID_KEY: process.env.RAPID_KEY,
        RAPID_HOST: process.env.RAPID_HOST,
    }
}

module.exports = nextConfig
