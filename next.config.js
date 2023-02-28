/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      "images.pexels.com",
      "images.freeimages.com",
      "media.istockphoto.com",
      "thumbs.dreamstime.com"
    ]
  },
  env: {
    NEXT_PUBLIC_API_URL: "http://localhost:7080",
  },
};

module.exports = nextConfig;
