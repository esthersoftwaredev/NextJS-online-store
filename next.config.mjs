/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["raw.githubusercontent.com"],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
