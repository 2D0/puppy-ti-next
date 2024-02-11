'use client';
import React from 'react';

import Toe1 from '@icons/ico-toe1.svg';
import Toe2 from '@icons/ico-toe2.svg';
import Toe3 from '@icons/ico-toe3.svg';
import Toe4 from '@icons/ico-toe4.svg';
import ToeBody from '@icons/ico-footbody.svg';
import { TitleBox } from '@molecules/index';
import { LightPurple } from '@styles/Common.style';
import {
  LoadingWrap,
  ToeComponent1,
  ToeComponent2,
  ToeComponent3,
  ToeComponent4,
  ToeComponentBody,
  ToesWrap,
} from '@styles/loading.style';
import { TypeCustomTextData } from '../../interface';

const loadingTextData: TypeCustomTextData = {
  accent: {
    text: 'LOADING',
    color: LightPurple,
    font: true,
  },
};
const LoadingA = () => {
  return (
    <>
      <LoadingWrap>
        <ToesWrap>
          <ToeComponent1>
            <Toe1 />
          </ToeComponent1>
          <ToeComponent2>
            <Toe2 />
          </ToeComponent2>
          <ToeComponent3>
            <Toe3 />
          </ToeComponent3>
          <ToeComponent4>
            <Toe4 />
          </ToeComponent4>
          <ToeComponentBody>
            <ToeBody />
          </ToeComponentBody>
        </ToesWrap>
        <TitleBox titleBoxData={loadingTextData} />
      </LoadingWrap>
    </>
  );
};
export default LoadingA;
