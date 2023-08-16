import React from 'react';
import Image from 'next/image';

//스타일
import { BackImgSlashTop, BackImgSlashBottom } from '@/components/atoms/SlashBackground/SlashBackground.style';

//이미지
import Slash from '@/assets/img/background/back-slash.svg?url';

const SlashBackground = () => {
  return (
    <>
      <BackImgSlashTop src={Slash} alt={''} />
      <BackImgSlashBottom src={Slash} alt={''} />
    </>
  );
};
export default SlashBackground;
