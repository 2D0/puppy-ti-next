import React from 'react';
import {TypeCustomTextData, TypeTextData} from 'interface';

//폰트
import gugiFont from '@app/api/fonts/FontGugi';

//스타일
import { TitleWrap, TextAccent } from './TitleBox.style';

const TitleBox = ({ titleBoxShape }: { titleBoxShape: TypeCustomTextData }) => {
  return (
    <TitleWrap $bigSize={titleBoxShape.bigSize} $color={titleBoxShape.color}>
      {titleBoxShape.first && <span className={titleBoxShape.first.font && gugiFont.className}>{titleBoxShape.first.text}</span>}
      {titleBoxShape.accent && (
        <TextAccent className={titleBoxShape.accent.font && gugiFont.className} $color={titleBoxShape.accent.color}>
          {titleBoxShape.accent.text}
        </TextAccent>
      )}
      {titleBoxShape?.last && <span className={titleBoxShape.last.font && gugiFont.className}>{titleBoxShape.last.text}</span>}
    </TitleWrap>
  );
};

export default TitleBox;
