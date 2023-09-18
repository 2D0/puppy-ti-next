import React from 'react';

//스타일
import { ShareTit } from '@/components/molecules/Share/Share.style';
import { ColumnComponent } from '@/style/Common.style';

//컴포넌트
import { TextDefault, SvgComponent } from '@/components/atoms';
import { IconButtonList } from '@/components/molecules/index';

const Share = () => {
  const shareImgData = {
    name: 'SHARE',
  };
  const snsImgData = [{ name: 'FACEBOOK' }, { name: 'KAKAO' }, { name: 'TWITTER' }, { name: 'LINK' }];
  const titleData = {
    text: '공유하기',
  };
  return (
    <ColumnComponent>
      <ShareTit>
        <SvgComponent imageData={shareImgData} />
        <TextDefault shape={titleData} />
      </ShareTit>
      <IconButtonList iconData={snsImgData} />
    </ColumnComponent>
  );
};

export default Share;
