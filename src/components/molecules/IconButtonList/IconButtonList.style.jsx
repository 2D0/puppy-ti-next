import React from 'react';

//스타일
import { IconButtonListWrap, IconButton } from '@/components/molecules/IconButtonList/IconButtonList';

//컴포넌트
import SvgComponent from '@/assets/img/Icons/SvgComponent';

const IconButtonList = ({ imageData }) => {
  return (
    <IconButtonListWrap>
      {imageData.map(item => {
        return (
          <IconButton key={item.name} href="/">
            <SvgComponent data={item} />
          </IconButton>
        );
      })}
    </IconButtonListWrap>
  );
};

export default IconButtonList;
