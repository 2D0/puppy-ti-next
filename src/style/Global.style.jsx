import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    background-color: #f4f2fa;
    color: #111;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    opacity: 0;
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
