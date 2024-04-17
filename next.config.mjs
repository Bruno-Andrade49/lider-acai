/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "s2-receitas.glbimg.com"
            },
            {
                hostname: "lh3.googleusercontent.com"
            }
        ]
    }
};

export default nextConfig;
