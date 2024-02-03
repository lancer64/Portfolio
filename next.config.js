const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "scontent.fmex36-1.fna.fbcdn.net" },
        ],
    },
};

module.exports = nextConfig;
