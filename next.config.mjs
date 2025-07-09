/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "unsplash.com"],
  },
};

// module.exports = {
//     webpack: (config) => {
//       config.resolve.modules.push(path.join(__dirname, 'emails'));
//       return config;
//     },
//   };

export default nextConfig;
