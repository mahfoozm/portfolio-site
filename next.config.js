const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/your-github-repo-name/" : "",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const pwaConfig = {
  pwa: {
    dest: "public",
  },
};

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    domains: ["mohammadmahfooz.engineer", "raw.githubusercontent.com"],
  },
};

module.exports = withPlugins([[withPWA, pwaConfig]], nextConfig);
