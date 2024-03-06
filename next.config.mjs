/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "s2-receitas.glbimg.com"
            }
        ]
    }
};

export default nextConfig;
