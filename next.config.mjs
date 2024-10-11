/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    webpack: (config) => {
      config.resolve.modules.push(path.join(__dirname, 'emails'));
      return config;
    },
  };

export default nextConfig;
