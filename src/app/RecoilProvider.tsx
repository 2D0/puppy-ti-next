'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

//컴포넌트
import LayoutTemplate from '@template/LayoutTemplate/LayoutTemplate';

export default function RecoilRootProvider({ children }) {
  return (
    <RecoilRoot>
      <LayoutTemplate children={children} />
    </RecoilRoot>
  );
}
