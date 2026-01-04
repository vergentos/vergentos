import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  images: {
    qualities: [25, 50, 75, 100],
  },
  async redirects() {
    return [
      // Consultancy
      {
        source: '/web-design-services/consulting',
        destination: '/services/technical-strategy',
        permanent: true,
      },
      {
        source: '/web-design-services/consulting/',
        destination: '/services/technical-strategy',
        permanent: true,
      },
      // Sage Integration
      {
        source: '/web-development/sage-integration',
        destination: '/services/sage-50-sync',
        permanent: true,
      },
      {
        source: '/web-development/sage-integration/',
        destination: '/services/sage-50-sync',
        permanent: true,
      },
      {
        source: '/what-is-sage-ecommerce',
        destination: '/services/sage-50-sync',
        permanent: true,
      },
      {
        source: '/what-is-sage-ecommerce/',
        destination: '/services/sage-50-sync',
        permanent: true,
      },
      // Website Redesign
      {
        source: '/web-design/website-redesign',
        destination: '/services/performance-monitoring',
        permanent: true,
      },
      {
        source: '/web-design/website-redesign/',
        destination: '/services/performance-monitoring',
        permanent: true,
      },
      // Responsive Web Design / Bristol
      {
        source: '/web-design/responsive-web-design',
        destination: '/services/bespoke-consultancy',
        permanent: true,
      },
      {
        source: '/web-design/responsive-web-design/',
        destination: '/services/bespoke-consultancy',
        permanent: true,
      },
      // Database Development
      {
        source: '/web-development/database-development',
        destination: '/services/api-engineering',
        permanent: true,
      },
      {
        source: '/web-development/database-development/',
        destination: '/services/api-engineering',
        permanent: true,
      },
      // Hosting
      {
        source: '/web-design-services/hosting',
        destination: '/services/secure-uk-hosting',
        permanent: true,
      },
      {
        source: '/web-design-services/hosting/',
        destination: '/services/secure-uk-hosting',
        permanent: true,
      },
      // CMS Development
      {
        source: '/web-development/cms-development',
        destination: '/services/bespoke-cms',
        permanent: true,
      },
      {
        source: '/web-development/cms-development/',
        destination: '/services/bespoke-cms',
        permanent: true,
      },
      // Wildcard catch-alls for legacy paths
      {
        source: '/web-design/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/web-development/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/web-design-services/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
