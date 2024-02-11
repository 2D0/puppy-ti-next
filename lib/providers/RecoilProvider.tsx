'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

//컴포넌트
import LayoutTemplate from '@template/LayoutTemplate/LayoutTemplate';

export const RecoilProvider = ({ children }) => {
  return (
    <RecoilRoot>
      <LayoutTemplate children={children} />
    </RecoilRoot>
  );
};

export default RecoilProvider;
