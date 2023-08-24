/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'epic-projects.nyc3.digitaloceanspaces.com',
            
            },
            {
              protocol: 'https',
              hostname: 'www.instagram.com'
            }
            ,
            {
              protocol: 'https',
              hostname: 'prasinous.com'
            } ,
            {
              protocol: 'https',
              hostname: 'images.pexels.com'
            }
          ],
        },
      }

module.exports = nextConfig
