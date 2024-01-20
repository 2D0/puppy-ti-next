type textContent = string | number;
type TypeUrl = string | `${'/'}${string}`;
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
  url: TypeUrl;
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
  colorChange: color;
  logo: string;
  scroll: boolean;
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
  url?: TypeUrl;
  content: {
    text: string;
    font?: boolean;
  };
}
export interface TypeLink {
  url?: TypeDefault.url | TypeUrl;
  target?: TypeDefault.target;
}
export interface TypeText extends TypeLink {
  text?: TypeDefault.textData;
  color?: TypeDefault.color;
  size?:
    | SizeDefaultSmallRem
    | SizeDefaultRem
    | SizeRegularRem
    | SizeMiddleRem
    | TypeUnit;
  weight?: TypeDefault.weight;
  family?: string;
  background?: TypeDefault.color;
}

export interface TypeTextData {
  text: textContent;
  color?: color;
  url?: TypeUrl;
  font?: boolean;
  bigSize?: boolean;
}

export interface TypeTitleBoxData {
  first?: TypeText;
  accent?: TypeText;
  last?: TypeText;
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
  height?: boolean;
  top?: {
    first: {
      text: textContent;
      color?: color;
      url?: TypeUrl;
      font?: boolean;
      bigSize?: boolean;
    };
    last: {
      text: textContent;
      color?: color;
      url?: TypeUrl;
      font?: boolean;
      bigSize?: boolean;
    };
  };
}
