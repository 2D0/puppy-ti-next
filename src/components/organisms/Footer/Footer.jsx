'use client';
import React from 'react';

//스타일
import { FooterWrap, FooterInfo, FooterInfoList, FooterInfoLink, FooterCopy } from '@/components/organisms/Footer/Footer.style';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterInfo>
        <FooterInfoList>
          <FooterInfoLink href={'/team_member'}>팀원 소개</FooterInfoLink>
        </FooterInfoList>
        <FooterInfoList>
          <FooterInfoLink href={'/inquiry'}>광고 및 후원 문의</FooterInfoLink>
        </FooterInfoList>
        <FooterInfoList>
          <FooterInfoLink href={'/source_license'}>라이센스</FooterInfoLink>
        </FooterInfoList>
      </FooterInfo>
      <FooterCopy>ⓒ 2023. MAKETREE All rights reserved.</FooterCopy>
    </FooterWrap>
  );
};
export default Footer;
