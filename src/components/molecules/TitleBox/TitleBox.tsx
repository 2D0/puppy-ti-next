import React from 'react';
import { TypeTextData } from '@/./../interface';

//폰트
import gugiFont from '@/app/api/fonts/FontGugi';

//스타일
import { TitleWrap, TextAccent } from './TitleBox.style';

const TitleBox = ({ shape }: { shape: TypeTextData }) => {
  return (
    <TitleWrap $bigSize={shape.bigSize} $color={shape.color}>
      {shape?.first && <span className={shape.first?.font && gugiFont.className}>{shape.first.text}</span>}
      {shape?.accent && (
        <TextAccent className={shape.accent?.font && gugiFont.className} $color={shape.accent?.color}>
          {shape.accent?.text}
        </TextAccent>
      )}
      {shape?.last && <span className={shape.last?.font && gugiFont.className}>{shape.last.text}</span>}
    </TitleWrap>
  );
};

export default TitleBox;
