/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn.dribbble.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "images.unsplash.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "utfs.io",
            port: "",
            pathname: "/f/**",
          },
        ],
      },
};

export default nextConfig;
