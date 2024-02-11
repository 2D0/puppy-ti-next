import React from 'react';
import { TypeImageData } from '@/interface';

//이미지
import Logo from '@images/logo/logo.svg';
import Facebook from '@icons/ico-facebook.svg';
import Kakao from '@icons/ico-kakao.svg';
import Twitter from '@icons/ico-twitter.svg';
import Link from '@icons/ico-link.svg';
import Back from '@icons/ico-back.svg';
import Share from '@icons/ico-share.svg';
import Firework from '@icons/check-firework.svg';
import Walking from '@icons/check-walking.svg';

const SvgComponent = ({ imageData }: { imageData: TypeImageData }) => {
  const isDiscernIcon = ({ imageData }) => {
    switch (imageData?.name) {
      case 'LOGO':
        return Logo;
      case 'BACK':
        return Back;
      case 'SHARE':
        return Share;
      case 'LINK':
        return Link;
      case 'FACEBOOK':
        return Facebook;
      case 'KAKAO':
        return Kakao;
      case 'TWITTER':
        return Twitter;
      case 'FIREWORK':
        return Firework;
      case 'WALKING':
        return Walking;
      default:
        break;
    }
  };
  const Icon = isDiscernIcon({ imageData });

  return (
    <>
      <Icon />
    </>
  );
};

export default SvgComponent;
