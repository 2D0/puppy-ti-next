import * as React from 'react';
import Image from 'next/image';

import Facebook from '@/assets/img/Icons/ico-facebook.svg?url';
import Kakao from '@/assets/img/Icons/ico-kakao.svg?url';
import Twitter from '@/assets/img/Icons/ico-twitter.svg?url';
import Link from '@/assets/img/Icons/ico-link.svg?url';

const isDiscernIcon = ({ data }) => {
  switch (data) {
    case 'LINK':
      return Link;
    case 'FACEBOOK':
      return Facebook;
    case 'KAKAO':
      return Kakao;
    case 'TWITTER':
      return Twitter;

    default:
      break;
  }
};
const SvgComponent = ({ data }) => {
  const Icon = isDiscernIcon({ data });
  return (
    <>
      <Image src={Icon} alt={'아이콘'} />
    </>
  );
};
export default SvgComponent;
