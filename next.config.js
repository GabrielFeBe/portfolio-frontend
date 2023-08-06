/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'localhost',
      'media.discordapp.net',
      'portfolio-backend-production-bb6c.up.railway.app',
    ],
  },
  async redirects() {
    return [
      {
        source: '/login',
        has: [
          {
            type: 'cookie',
            key: 'token',
          },
        ],
        permanent: false,
        destination: '/adding',
      },
    ]
  },
}

module.exports = nextConfig
