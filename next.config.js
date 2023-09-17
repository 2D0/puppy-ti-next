/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, //앱 내에서 문제가 일어날 수 있는 부분에 대한 경고 알림
  swcMinify: true, //필요없는 공백 주석 삭제, 스크립트 해석할 수 없게 암호화
  Minification: true, //스크립트 파일과 웹 페이지에 대한 코드 최소화
  compiler: {
    styledComponents: true,
  },
  // images: {
  //   formats: ['image/avif', 'image/webp'],
  // },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:5000/:path*',
      },
    ];
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack', { loader: 'file-loader' }, { loader: 'svgo-loader' }, { loader: 'xml-fix-loader' }],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextConfig;
