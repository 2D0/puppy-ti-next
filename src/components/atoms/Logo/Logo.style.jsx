import styled from 'styled-components';
import Link from "next/link";
import {BoxCenter} from '@/style/Common.style.jsx';

export const LogoAtom = styled(Link)`
  width: auto;
  height: 60%;
  ${BoxCenter}
`;
export const LogoImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;