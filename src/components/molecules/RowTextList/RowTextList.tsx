'use client';
import React from 'react';
import { TypeTextData } from 'interface';

//스타일
import { RowTextWrap, TextList } from './RowTextList.style';

//컴포넌트
import { TextDefault } from '@atoms/index';

const RowTextList = ({ textListData }: { textListData: TypeTextData[] }) => {
  return (
    <RowTextWrap>
      {textListData.map((item, index) => {
        return (
          <TextList key={index} $textListData={item}>
            <TextDefault textDefaultData={item} />
          </TextList>
        );
      })}
    </RowTextWrap>
  );
};
export default RowTextList;
