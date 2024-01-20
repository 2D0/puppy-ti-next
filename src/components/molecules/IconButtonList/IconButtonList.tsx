import React from 'react';

//스타일
import {
  IconButtonListWrap,
  IconButton,
} from '@/components/molecules/IconButtonList/IconButtonList.style';

//컴포넌트
import { SvgComponent } from '@atoms/index';
import { ReactSVG } from 'react-svg';

const IconButtonList = ({ iconData }: { iconData: any }) => {
  return (
    <IconButtonListWrap>
      {iconData.map(item => {
        return (
          <IconButton key={item?.img} href="/">
            <item.img />
          </IconButton>
        );
      })}
    </IconButtonListWrap>
  );
};

export default IconButtonList;
