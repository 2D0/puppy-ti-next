import React from 'react';

//스타일
import { BackgroundWrap, BackgroundContent, WaveImage } from '@/components/atoms/WaveBackground/WaveBackground.style';

//이미지
import Wave from '@/assets/img/Background/back-wave.svg?url';

const WaveBackground = () => {
  return (
    <BackgroundWrap>
      <BackgroundContent />
      <WaveImage src={Wave} alt={'물결 배경'} fill={true} />
    </BackgroundWrap>
  );
};
export default WaveBackground;
