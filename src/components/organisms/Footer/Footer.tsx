'use client';
import React from 'react';

//스타일
import { White } from '@styles/Common.style';
import { FooterWrap, FooterInfo } from './Footer.style';

//컴포넌트
import { TextDefault } from '@atoms/index';
import RowTextList from '@molecules/RowTextList/RowTextList';

const textListData = [
  {
    url: '/team-members',
    text: '팀원 소개',
    color: White,
  },
  {
    url: '/inquiry',
    text: '광고 및 후원 문의',
    color: White,
  },
  {
    url: '/open-source',
    text: '라이센스',
    color: White,
  },
];

const copyrightData = {
  text: 'ⓒ 2023. MAKETREE All rights reserved.',
  color: White,
};

const Footer = () => {
  return (
    <FooterWrap>
      <FooterInfo>
        <RowTextList textListData={textListData} />
      </FooterInfo>
      <TextDefault textDefaultData={copyrightData} />
    </FooterWrap>
  );
};
export default Footer;
