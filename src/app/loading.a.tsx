'use client';
import React from 'react';

import { ReactComponent as Toe1 } from '@/assets/img/Icons/ico-toe1.svg';
import { ReactComponent as Toe2 } from '@/assets/img/Icons/ico-toe2.svg';
import { ReactComponent as Toe3 } from '@/assets/img/Icons/ico-toe3.svg';
import { ReactComponent as Toe4 } from '@/assets/img/Icons/ico-toe4.svg';
import { ReactComponent as ToeBody } from '@/assets/img/Icons/ico-footbody.svg';
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
