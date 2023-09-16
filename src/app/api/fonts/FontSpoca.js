import localFont from 'next/font/local';

const FontSpoca = localFont({
  src: [
    {
      path: './../../../app/fonts/Spoqa/SpoqaHanSansNeo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../../app/fonts/Spoqa/SpoqaHanSansNeo-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../../app/fonts/Spoqa/SpoqaHanSansNeo-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../../../app/fonts/Spoqa/SpoqaHanSansNeo-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../../../app/fonts/Spoqa/SpoqaHanSansNeo-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './../../../app/fonts/Spoqa/SpoqaHanSansNeo-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});
export default FontSpoca;
