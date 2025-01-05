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
            {
                protocol: 'https',
                hostname: '*.api.sanity.io',  // Add this for the API domain
                pathname: '**',
            }
        ],
    },
    async headers() {
        return [
            {
                // Apply these headers to all routes
                source: '/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*'
                    },
                ],
            },
        ]
    },
    // This helps with static/dynamic hybrid setup
    experimental: {
        serverActions: {
            bodySizeLimit: '2mb'
        }
    }
};

export default nextConfig;