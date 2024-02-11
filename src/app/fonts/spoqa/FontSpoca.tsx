import localFont from 'next/font/local';

export const FontSpoca = localFont({
  src: [
    {
      path: './SpoqaHanSansNeo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SpoqaHanSansNeo-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './SpoqaHanSansNeo-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './SpoqaHanSansNeo-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './SpoqaHanSansNeo-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './SpoqaHanSansNeo-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});
export default FontSpoca;
