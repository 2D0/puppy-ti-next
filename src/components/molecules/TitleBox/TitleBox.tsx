import React from 'react';
import { TypeTitleBoxData, TypeTextData } from 'interface';

//폰트
import gugiFont from '@app/api/fonts/FontGugi';

//스타일
import { TitleWrap } from './TitleBox.style';

//컴포넌트
import { TextDefault } from '@atoms/index';

const TitleBox = ({ titleBoxData }: { titleBoxData: TypeTitleBoxData }) => {
  return (
    <TitleWrap>
      {titleBoxData.first && (
        <TextDefault textDefaultData={titleBoxData.first} />
      )}
      {titleBoxData.accent && (
        <TextDefault textDefaultData={titleBoxData.accent} />
      )}
      {titleBoxData?.last && (
        <TextDefault textDefaultData={titleBoxData.last} />
      )}
    </TitleWrap>
  );
};

export default TitleBox;
