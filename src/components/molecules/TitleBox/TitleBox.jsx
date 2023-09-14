import React from 'react';

//폰트
import gugiFont from '@/app/api/fonts/GugiFont';

//스타일
import { TitleWrap, TextAccent } from './TitleBox.style.jsx';

const TitleBox = ({ shape }) => {
  return (
    <TitleWrap size={shape.size} className={shape.font && gugiFont.className} color={shape.color}>
      <span>{shape.first}</span>
      <TextAccent color={shape.accent.color}>{shape.accent.text}</TextAccent>
      <span>{shape.last}</span>
    </TitleWrap>
  );
};

export default TitleBox;
