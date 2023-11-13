/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'localhost',
      'media.discordapp.net',
      'files.edgestore.dev',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    disableStaticImages: true,
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
