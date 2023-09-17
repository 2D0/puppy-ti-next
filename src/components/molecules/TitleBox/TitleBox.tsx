import React from 'react';
import { TypeTextData } from '@/app/TypeData';

//폰트
import gugiFont from '@/app/api/fonts/FontGugi';

//스타일
import { TitleWrap, TextAccent } from './TitleBox.style';

const TitleBox = ({ shape }: { shape: TypeTextData }) => {
  return (
    <TitleWrap $bigSize={shape.bigSize} className={shape.font && gugiFont.className} $color={shape.color}>
      <span>{shape.firstText}</span>
      <TextAccent $color={shape.accent.color}>{shape.accent.text}</TextAccent>
      <span>{shape.lastText}</span>
    </TitleWrap>
  );
};

export default TitleBox;
