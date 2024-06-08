/** @type {import('next').NextConfig} */

// How to set the Referrer Policy to no-referrer for all routes in a Next.js
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*', // from all paths in our app
                headers: [
                    {key: 'referrer-policy', value: 'no-referrer'}
                ]
            }
        ]
    } 
}

module.exports = nextConfig