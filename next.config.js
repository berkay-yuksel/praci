/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'epic-projects.nyc3.digitaloceanspaces.com',
            
            },
          ],
        },
      }

module.exports = nextConfig
