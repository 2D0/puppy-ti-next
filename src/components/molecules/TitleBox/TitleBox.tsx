import React from 'react';
import { TypeCustomTextData, TypeTextData } from 'interface';

//폰트
import gugiFont from '@app/api/fonts/FontGugi';

//스타일
import { TitleWrap, TextAccent } from './TitleBox.style';

const TitleBox = ({ titleBoxData }: { titleBoxData: TypeCustomTextData }) => {
  return (
    <TitleWrap $bigSize={titleBoxData.bigSize} $color={titleBoxData.color}>
      {titleBoxData.first && (
        <span className={titleBoxData.first.font && gugiFont.className}>
          {titleBoxData.first.text}
        </span>
      )}
      {titleBoxData.accent && (
        <TextAccent
          className={titleBoxData.accent.font && gugiFont.className}
          $color={titleBoxData.accent.color}
        >
          {titleBoxData.accent.text}
        </TextAccent>
      )}
      {titleBoxData?.last && (
        <span className={titleBoxData.last.font && gugiFont.className}>
          {titleBoxData.last.text}
        </span>
      )}
    </TitleWrap>
  );
};

export default TitleBox;
