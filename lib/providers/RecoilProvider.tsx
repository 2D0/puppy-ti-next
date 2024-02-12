'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

//컴포넌트
import LayoutTemplate from '@template/LayoutTemplate/LayoutTemplate';
import ClientLayout from '@/clientLayout';

export const RecoilProvider = ({ children }) => {
  return (
    <>
      <ClientLayout children={children} />
    </>
  );
};

export default RecoilProvider;
