import React from 'react';

type  textContent = string | number;
type  url = `${'/'}${string}`;
type  input = 'text' | 'button' | 'submit';

export interface  TypeHeaderData {
  pathName: textContent;
  percent: number;
  colorChange: string;
  logo: string;
};

export interface  TypeInputData {
  type : input;
  name: textContent;
  value?: textContent;
  placeholder?: textContent;
  event?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
};

export interface  TypeButtonData {
  type : input;
  able: boolean;
  event: () => void;
  axios?: boolean;
  method?:'GET'|'POST';
  url?: url;
  content: {
    text: string;
    font?: boolean;
  };
};

export interface  TypeTextData {
  text: textContent;
  color?: string;
  url?: url;
  font?: boolean;
  bigSize?: boolean;
}
export interface  TypeCustomTextData {
  color?: string;
  bigSize?: boolean;
  url?: url;
  first?: {
    text: textContent;
    color?: string;
    font?: boolean;
  };
  accent?: {
    text: textContent;
    color?: string;
    font?: boolean;
  };
  last?: {
    text: textContent;
    color?: string;
    font?: boolean;
  };
}

export interface  TypeImageData {
  name: 'LOGO' | 'BACK' | 'SHARE' | 'LINK' | 'FACEBOOK' | 'KAKAO' | 'TWITTER' | 'FIREWORK' | 'WALKING';
};

export interface percentBarData {
  percent: number;
  height: boolean;
  top?: {
    first: {
      text: textContent;
      color?: string;
      url?: url;
      font?: boolean;
      bigSize?: boolean;
    };
    last: {
      text: textContent;
      color?: string;
      url?: url;
      font?: boolean;
      bigSize?: boolean;
    };
  };
};
