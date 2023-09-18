import React from 'react';
import { TypeImageData } from '@/app/TypeData';

//이미지
import { ReactComponent as Logo } from '@/assets/img/Logo/logo.svg';
import { ReactComponent as Facebook } from '@/assets/img/Icons/ico-facebook.svg';
import { ReactComponent as Kakao } from '@/assets/img/Icons/ico-kakao.svg';
import { ReactComponent as Twitter } from '@/assets/img/Icons/ico-twitter.svg';
import { ReactComponent as Link } from '@/assets/img/Icons/ico-link.svg';
import { ReactComponent as Back } from '@/assets/img/Icons/ico-back.svg';
import { ReactComponent as Share } from '@/assets/img/Icons/ico-share.svg';

const SvgComponent = ({ imageData }: { imageData: TypeImageData }) => {
  const isDiscernIcon = ({ imageData }) => {
    switch (imageData.name) {
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
