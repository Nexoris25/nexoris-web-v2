/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: () => `${Date.now()}`,
  
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all paths
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
