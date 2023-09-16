'use client';
import React from 'react';

//스타일
import { RowText, TextList, White } from '@/style/Common.style';
import { FooterWrap, FooterInfo, FooterInfoLink, FooterCopy } from '@/components/organisms/Footer/Footer.style';

//컴포넌트
import { TextDefault } from '@/components/atoms';

const textList = [
  {
    url: '/team_member',
    text: '팀원 소개',
    color: White,
  },
  {
    url: '/inquiry',
    text: '광고 및 후원 문의',
    color: White,
  },
  {
    url: '/source_license',
    text: '라이센스',
    color: White,
  },
];

const Footer = () => {
  return (
    <FooterWrap>
      <FooterInfo>
        <RowText>
          {textList.map((item, index) => {
            return (
              <TextList key={index} color={item.color}>
                <TextDefault shape={item} />
              </TextList>
            );
          })}
        </RowText>
      </FooterInfo>
      <FooterCopy>ⓒ 2023. MAKETREE All rights reserved.</FooterCopy>
    </FooterWrap>
  );
};
export default Footer;
