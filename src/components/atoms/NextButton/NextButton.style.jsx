import styled from 'styled-components';
import {
  Center,
  FontWhite,
  BgPurple,
  BgUnable,
  CommonBox,
  CommonShadow
} from '@/style/Common.style.jsx';

export const NextButton = styled.button`
  ${Center}
  ${BgUnable}
  ${FontWhite}
  ${CommonBox}
  ${CommonShadow}
  
  ${
    ({inputName}) => {
      return(
        !inputName || BgPurple
      )
    }
  }
`;