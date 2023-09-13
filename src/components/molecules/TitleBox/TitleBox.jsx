import React from 'react';

//폰트
import gugiFont from '@/app/api/fonts/GugiFont';

//스타일
import { TitleWrap } from './TitleBox.style.jsx';

//컴포넌트
import { TextAccent } from '@/components/atoms';

const TitleBox = ({ shape, firstText, accentText, lastText }) => {
  return (
    <TitleWrap shape={shape} className={gugiFont.className}>
      <span>{firstText}</span>
      <TextAccent shape={shape} data={accentText} />
      <span>{lastText}</span>
    </TitleWrap>
  );
};

export default TitleBox;
