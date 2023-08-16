import React from 'react';

//폰트
import gugiFont from '@/api/Fonts/GugiFont';

//스타일
import { TitleWrap } from './TitleBox.style.jsx';

//컴포넌트
import { AccentText } from '@/components/atoms';

const TitleBox = ({ shape, firstText, accentText, lastText }) => {
  return (
    <TitleWrap shape={shape} className={gugiFont.className}>
      <span>{firstText}</span>
      <AccentText shape={shape} data={accentText} />
      <span>{lastText}</span>
    </TitleWrap>
  );
};

export default TitleBox;
