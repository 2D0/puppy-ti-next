import TextDefault from '../components/atoms/TextDefault/TextDefault';

export type TypeHeaderData = {
  pathName: string;
  scroll: boolean;
  percent: number;
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
  axiosData: {
    url: string;
    data: Record<string, any>;
  };
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
