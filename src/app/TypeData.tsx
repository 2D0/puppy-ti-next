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
  firstText: string;
  text: string;
  lastText: string;
  bigSize: boolean;
  color: string;
  font: boolean;
  url: string;
  accent: {
    text: string;
    color: string;
  };
};

export type TypeImageData = {
  name: 'LOGO' | 'BACK' | 'SHARE' | 'LINK' | 'FACEBOOK' | 'KAKAO' | 'TWITTER' | 'FIREWORK' | 'WALKING';
};
