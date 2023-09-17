'use client';
import React from 'react';
import { TypeTextData } from '@/app/TypeData';

//스타일
import { RowTextWrap, TextList } from './RowTextList.style';

//컴포넌트
import { TextDefault } from '@/components/atoms';

const RowTextList = ({ textListData }: { textListData: TypeTextData }) => {
  return (
    <RowTextWrap>
      {textListData.map((item, index) => {
        return (
          <TextList key={index} $color={item.color}>
            <TextDefault shape={item} />
          </TextList>
        );
      })}
    </RowTextWrap>
  );
};
export default RowTextList;
