module.exports = {
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
  async redirects() {
    return [
      {
        source: "/instagram",
        destination: "https://www.instagram.com/mxhammadm/",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/mohammadmahfooz/",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/mahfoozm",
        permanent: false,
      },
    ];
  },
};

module.exports = withPlugins([[withPWA, pwaConfig]], nextConfig);
