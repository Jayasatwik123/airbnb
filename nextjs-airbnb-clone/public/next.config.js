/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dgs317u1r",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME_CUSTOM: "aka8dwbx",
    NEXT_PUBLIC_MAPBOX_TOKEN: "pk.eyJ1IjoiamF5YXNhdHdpay0xMjM0IiwiYSI6ImNsb3lkdWdreTAybHUycGxleXlkb3FzcGMifQ.b5rEQsEnukgbUXzSx-6k2g",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
