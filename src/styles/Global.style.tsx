import { createGlobalStyle } from 'styled-components';
import gugiRegular from '@fonts/Gugi/Gugi-Regular.ttf';
import spoqaRegularTtf from '@fonts/Spoqa/SpoqaHanSansNeo-Regular.ttf';
import spoqaRegularOtf from '@fonts/Spoqa/SpoqaHanSansNeo-Regular.otf';
import spoqaMediumTtf from '@fonts/Spoqa/SpoqaHanSansNeo-Medium.ttf';
import spoqaMediumOtf from '@fonts/Spoqa/SpoqaHanSansNeo-Medium.otf';
import spoqaBoldOtf from '@fonts/Spoqa/SpoqaHanSansNeo-Bold.ttf';
import spoqaBoldTtf from '@fonts/Spoqa/SpoqaHanSansNeo-Bold.otf';

const GlobalStyle = createGlobalStyle`
  // **************** 폰트 ****************
  //구기 (Gugi)
  @font-face {
    font-family: 'gugi';
    font-weight: 400;
    src: local('gugi'), local('gugi');
    src: url(${gugiRegular}) format('truetype');
  }
  
  //스포카한산스 (SpoqaHanSansNeo)
  @font-face {
    font-family: 'SpoqaHan';
    font-weight: 400;
    src: local('spoqaRegularTtf'), local('spoqaRegularOtf');
    src: url(${spoqaRegularTtf}) format('truetype'),
    url(${spoqaRegularOtf}) format('opentype');
  }
  @font-face {
    font-family: 'SpoqaHan';
    font-weight: 500;
    src: local('spoqaMediumTtf'), local('spoqaMediumOtf');
    src: url(${spoqaMediumTtf}) format('truetype'),
    url(${spoqaMediumOtf}) format('opentype');
  }
  @font-face {
    font-family: 'SpoqaHan';
    font-weight: 700;
    src: local('spoqaBoldOtf'), local('spoqaBoldTtf');
    src: url(${spoqaBoldOtf}) format('truetype'),
    url(${spoqaBoldTtf}) format('opentype');
  }
  
  // **************** reset ****************
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 1rem; //16px
    font-weight: 400;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #f4f2fa;
    color: #111;
    -ms-overflow-style: none;
    scrollbar-width: none;
    box-shadow: 0 0 15px rgb(0 0 0 / 15%);
  }
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb ,
  ::-webkit-scrollbar-track {
    opacity: 0;
    width: 0;
    height: 0;
    background-color: transparent;
  }

  input:focus, select:focus, textarea:focus {
    outline: 0;
  }

  label {
    display: block;
  }

  textarea {
    resize: none;
  }

  button {
    border: 0;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
    -webkit-appearance: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
  }

  i {
    font-style: normal;
  }

  ul {
    list-style: none;
  }

  fieldset {
    border: 0;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section,
  table, tbody, td {
    display: block;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button, input, optgroup, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`;

export default GlobalStyle;
