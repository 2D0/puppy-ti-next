'use client';
import React from 'react';

//스타일
import { FooterWrap, FooterInfo, FooterInfoLink, FooterCopy } from '@/components/organisms/Footer/Footer.style';
import { TextList } from '@/style/Common.style';

const textList = [
  {
    url: '/team_member',
    text: '팀원 소개',
  },
  {
    url: '/inquiry',
    text: '광고 및 후원 문의',
  },
  {
    url: '/source_license',
    text: '라이센스',
  },
];

const Footer = () => {
  return (
    <FooterWrap>
      <FooterInfo>
        {textList.map(item => {
          return (
            <TextList key={item.text} color={item.color}>
              <FooterInfoLink href={item.url}>{item.text}</FooterInfoLink>
            </TextList>
          );
        })}
      </FooterInfo>
      <FooterCopy>ⓒ 2023. MAKETREE All rights reserved.</FooterCopy>
    </FooterWrap>
  );
};
export default Footer;
