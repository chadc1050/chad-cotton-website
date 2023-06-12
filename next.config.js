/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    // FIXME: Ignores ts issues when building, should work to remove this
    ignoreBuildErrors: true,
  }
}
