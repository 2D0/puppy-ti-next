import React from 'react';
import Image from 'next/image';

//스타일
import { BackImgSlashTop, BackImgSlashBottom } from '@/components/atoms/BackgroundSlash/BackgroundSlash.style';

//이미지
import Slash from '@/assets/img/background/back-slash.svg?url';

const BackgroundSlash = () => {
  return (
    <>
      <BackImgSlashTop src={Slash} alt={''} fill={true} />
      <BackImgSlashBottom src={Slash} alt={''} />
    </>
  );
};
export default BackgroundSlash;
