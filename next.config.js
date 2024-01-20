/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, //앱 내에서 문제가 일어날 수 있는 부분에 대한 경고 알림
  swcMinify: true, //필요없는 공백 주석 삭제, 스크립트 해석할 수 없게 암호화
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:5000/:path*',
      },
    ];
  },
  // webpack(config) {
  //   // SVG 가져오기를 처리하는 기존 규칙을 가져옵니다.
  //   const fileLoaderRule = config.module.rules.find(rule =>
  //     rule.test?.test?.('.svg'),
  //   );
  //
  //   config.module.rules.push(
  //     // 기존 규칙을 다시 적용합니다. 단, ?url로 끝나는 svg 가져오기에만 해당됩니다.
  //     {
  //       ...fileLoaderRule,
  //       test: /\.svg$/i,
  //       resourceQuery: /url/, // *.svg?url
  //     },
  //     // 다른 모든 *.svg 가져오기를 React 구성 요소로 변환
  //     {
  //       test: /\.svg$/i,
  //       issuer: /\.[jt]sx?$/,
  //       resourceQuery: { not: /url/ }, // exclude if *.svg?url
  //       use: ['@svgr/webpack', { loader: 'url-loader' }],
  //     },
  //     //폰트 로더
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/,
  //       use: {
  //         loader: 'url-loader',
  //         options: {
  //           publicPath: '/_next/',
  //           name: 'fonts/[name].[ext]',
  //         },
  //       },
  //     },
  //   );
  //
  //   // *.svg를 무시하도록 파일 로더 규칙을 수정합니다. 이제 처리가 완료되었기 때문입니다.
  //   fileLoaderRule.exclude = /\.svg$/i;
  //
  //   return config;
  // },
};

module.exports = nextConfig;
