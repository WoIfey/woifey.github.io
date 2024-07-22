/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wolfey.s-ul.eu'
            },
        ]
    }
};

export default nextConfig;
