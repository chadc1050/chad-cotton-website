/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    // FIXME: Ignores ts issues when building, should work to remove this
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '',
        pathname: '/*',
      },
    ],
  }
}
