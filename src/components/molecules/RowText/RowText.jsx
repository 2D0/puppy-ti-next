'use client';
import React from 'react';

//스타일
import { RowTextWrap, RowTextList, FooterInfoList, FooterInfoLink, FooterCopy } from '@/components/molecules/RowText/RowText.style';
import { ShareButtonAtom } from '@/components/molecules/Share/Share.style';
import SvgComponent from '@/assets/img/Icons/SvgComponent';

const RowText = dataArray => {
  return (
    <RowTextWrap>
      {/*{data.map(item => {*/}
      {/*  return (*/}
      {/*    <RowTextList>*/}
      {/*      <TextDefault data={item} />*/}
      {/*    </RowTextList>*/}
      {/*  );*/}
      {/*})}*/}
      {/*{dataArray.map((item, idx) => {*/}
      {/*  return item;*/}
      {/*})}*/}
      {dataArray}
    </RowTextWrap>
  );
};
export default RowText;
