import React from 'react';

//스타일
import { IconButtonListWrap, IconButton } from './IconButtonList.style';

//컴포넌트
import { SvgComponent } from '@atoms/index';

const IconButtonList = ({ iconData }) => {
  return (
    <IconButtonListWrap>
      {iconData.map(item => {
        return (
          <IconButton key={item?.name} href="/">
            <SvgComponent imageData={item} />
          </IconButton>
        );
      })}
    </IconButtonListWrap>
  );
};

export default IconButtonList;
