/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images: {
        loader: "custom",
        loaderFile: './ImageLoader.js',
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '**',
            },
        ],
    },
    // This helps with static/dynamic hybrid setup
    experimental: {
        serverActions: {
            bodySizeLimit: '2mb'
        }
    }
};

export default nextConfig;