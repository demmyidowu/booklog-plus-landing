/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    // Add this if you're using experimental features
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig 