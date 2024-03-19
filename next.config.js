/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    dangerouslyAllowSVG:true,
    domains: [
      "lh3.googleusercontent.com", 
    "vercel.com",
    "placehold.co",
    "images.unsplash.com", 
    "res.cloudinary.com", 
    "picsum.photos",
    "api.dicebear.com",
  "avatars.githubusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/TechWithTy/DataDrivenCyberOni",
        permanent: true,
      },
      {
        source: "/support",
        destination: "https://form.jotform.com/233444925421050",
        permanent: true,
      },
      {
        source: "/schedule",
        destination: "https://calendly.com/cyberoni/quick-zoom-meeting",
        permanent: true,
      },
      {
        source: "/apply/full-stack",
        destination: "https://form.jotform.com/233470488980164",
        permanent: true,
      },
      {
        source: "/hire-a-dev",
        destination: "https://form.jotform.com/233471176876163",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "https://g.page/r/CfS7tYPMVQ8ZEAI/review",
        permanent: true,
      },
      {
        source: "/google-business",
        destination: "https://maps.app.goo.gl/44BHLXSPYw6mNotMA",
        permanent: true,
      },
    ];
  },
  experimental: {
    serverActions: {
      
    },

  }
};

module.exports = nextConfig;
