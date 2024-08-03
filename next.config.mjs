import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['ca-central-1.graphassets.com']
    }
};

export default withNextVideo(nextConfig);