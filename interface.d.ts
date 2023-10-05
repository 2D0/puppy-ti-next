declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
export type TypeHeaderData = {
  pathName: string;
  percent: number;
  colorChange: string;
  logo: string;
};

export type TypeInputData = {
  type: 'text' | 'submit';
  name: string;
  value: string;
  placeholder: string;
  event: React.ChangeEvent<HTMLInputElement>;
};

export type TypeButtonData = {
  type: 'button' | 'submit';
  url: string;
  able: boolean;
  event: React.MouseEvent<HTMLElement>;
  axios: boolean;
  content: {
    text: string;
    font: boolean;
  };
};

export type TypeTextData = {
  text: string | number;
  color: string;
  url: string;
  font: boolean;
  bigSize: boolean;
  first: {
    text: string;
    color: string;
    font: boolean;
  };
  accent: {
    text: string;
    color: string;
    font: boolean;
  };
  last: {
    text: string;
    color: string;
    font: boolean;
  };
};

export type TypeImageData = {
  name: 'LOGO' | 'BACK' | 'SHARE' | 'LINK' | 'FACEBOOK' | 'KAKAO' | 'TWITTER' | 'FIREWORK' | 'WALKING';
};

export type percentBarData = {
  percent: number;
  height: boolean;
  top: {
    first: TypeTextData;
    last: TypeTextData;
  };
};
