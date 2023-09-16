import React from 'react';

//스타일
import { ShareTit } from '@/components/molecules/Share/Share.style';
import { ColumnComponent } from '@/style/Common.style';

//컴포넌트
import { TextDefault } from '@/components/atoms';
import SvgComponent from '@/assets/img/Icons/SvgComponent';
import IconButtonList from '@/components/molecules/IconButtonList/IconButtonList.style';

const Share = () => {
  const shareImgData = {
    name: 'SHARE',
    fill: false,
  };
  const snsImgData = [{ name: 'FACEBOOK' }, { name: 'KAKAO' }, { name: 'TWITTER' }, { name: 'LINK' }];
  const titleData = {
    text: '공유하기',
  };
  return (
    <ColumnComponent>
      <ShareTit>
        <SvgComponent data={shareImgData} />
        <TextDefault shape={titleData} />
      </ShareTit>
      <IconButtonList imageData={snsImgData} />
    </ColumnComponent>
  );
};

export default Share;
