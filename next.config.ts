import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    env: {
        hostURL:
            'https://www.greatfrontend.com/api/projects/challenges/e-commerce',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vaqybtnqyonvlwtskzmv.supabase.co',
                port: '',
                pathname: '/storage/**',
            },
        ],
    },
};

export default nextConfig;
