import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '192.168.4.39'],
    images:{
        remotePatterns:[
            { hostname: 'cerberus.zip' },
            { hostname: 'localhost' }
        ]
    }
};

export default nextConfig;
