/** @type {import('next').NextConfig} */
const nextConfig = {
 generateBuildId: () => `${Date.now()}`,
};

export default nextConfig;
