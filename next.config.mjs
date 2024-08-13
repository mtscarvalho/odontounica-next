/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["storage.odontounica.com.br"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.odontounica.com.br",
        port: "",
        pathname: "/**",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "odontounica.com.br",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
