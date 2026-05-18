import type { NextConfig } from "next";

/**
 * In local dev, proxy /api/chat to the FastAPI backend on port 8000.
 * On Vercel, the same path is routed to api/index.py via vercel.json.
 */
const nextConfig: NextConfig = {
  async rewrites() {
    if (process.env.NODE_ENV === "development") {
      return [
        {
          source: "/api/chat",
          destination: "http://127.0.0.1:8000/api/chat",
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
