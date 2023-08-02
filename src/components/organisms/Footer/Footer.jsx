'use client';
import React from 'react';

//스타일
import * as O from '@/components/organisms/Footer/Footer.style';

const Footer = () => {
  return (
    <O.Footer>
      <O.FooterInfo>
        <O.FooterInfoList>
          <O.FooterInfoLink href={'/team_member'}>팀원 소개</O.FooterInfoLink>
        </O.FooterInfoList>
        <O.FooterInfoList>
          <O.FooterInfoLink href={'/inquiry'}>광고 및 후원 문의</O.FooterInfoLink>
        </O.FooterInfoList>
        <O.FooterInfoList>
          <O.FooterInfoLink href={'/source_license'}>라이센스</O.FooterInfoLink>
        </O.FooterInfoList>
      </O.FooterInfo>
      <O.FooterCopy>ⓒ 2023. MAKETREE All rights reserved.</O.FooterCopy>
    </O.Footer>
  );
};
export default Footer;
