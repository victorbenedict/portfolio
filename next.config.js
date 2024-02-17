// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   reactStrictMode: true,
//   basePath: "/github-pages",
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "avatars.githubusercontent.com",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    serverActions: true,
  },
};

module.exports = config;
