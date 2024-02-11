import React from 'react';
import {
  White,
  Black,
  LightGray,
  Gray,
  Purple,
  WhitePurple,
  LightPurple,
  DarkPurple,
  Pink,
} from '@styles/Common.style';
import { NextFont } from 'next/dist/compiled/@next/font';

type textContent = string | number;
type url = `${'/'}${string}`;
type input = 'text' | 'button' | 'submit';
type color =
  | White
  | Black
  | LightGray
  | Gray
  | Purple
  | WhitePurple
  | LightPurple
  | DarkPurple
  | Pink
  | `${'#'}${string}`;

export interface TypeDefault {
  textData: string | number;
  url: string;
  color:
    | White
    | Black
    | LightGray
    | Gray
    | Purple
    | WhitePurple
    | LightPurple
    | DarkPurple
    | Pink
    | `${'#'}${string}`;
  name: string;
  able: boolean;
  inputEvent: React.ChangeEvent<HTMLInputElement>;
  buttonEvent: React.MouseEvent<HTMLButtonElement>;
  event: () => void;
}

export interface TypeHeaderData {
  pathName: textContent;
  percent: number;
  color: color;
  scroll: boolean;
  logo: string;
}

export interface TypeInputData {
  type: React.InputHTMLAttributes.type;
  name: textContent;
  value?: textContent;
  placeholder?: textContent;
  event?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export interface TypeButtonData {
  type: input;
  able: boolean;
  event: () => void;
  axios?: boolean;
  method?: 'GET' | 'POST';
  url?: url;
  content: {
    text: string;
    font?: boolean;
  };
}

export interface TypeTextData {
  text: textContent;
  color?: color;
  url?: url;
  font?: boolean;
  family?: NextFont;
  bigSize?: boolean;
}

export interface TypeCustomTextData {
  color?: color;
  bigSize?: boolean;
  url?: url;
  first?: {
    text: textContent;
    color?: color;
    font?: boolean;
  };
  accent?: {
    text: textContent;
    color?: color;
    font?: boolean;
  };
  last?: {
    text: textContent;
    color?: color;
    font?: boolean;
  };
}

export interface TypeImageData {
  name:
    | 'LOGO'
    | 'BACK'
    | 'SHARE'
    | 'LINK'
    | 'FACEBOOK'
    | 'KAKAO'
    | 'TWITTER'
    | 'FIREWORK'
    | 'WALKING';
}

export interface percentBarData {
  percent: number;
  height: boolean;
  top?: {
    first: {
      text: textContent;
      color?: color;
      url?: url;
      font?: boolean;
      bigSize?: boolean;
    };
    last: {
      text: textContent;
      color?: color;
      url?: url;
      font?: boolean;
      bigSize?: boolean;
    };
  };
}
