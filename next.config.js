/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    transpilePackages: ['three', '@react-three/drei', 'troika-three-text']
}

module.exports = nextConfig
