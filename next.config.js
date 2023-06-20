/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/favorite-tracks',
                destination: '/favorite-tracks/short-term',
                permanent: true
            }, 
            {
                source: '/favorite-artists',
                destination: 'favorite-artists/short-term',
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
