import styled from 'styled-components';
import {
  Center,
  FontWhite,
  CommonBox,
  CommonShadow
} from '@/style/Common.style.jsx';

export const NextButton = styled.button`
  ${Center}
  ${FontWhite}
  ${CommonBox}
  ${CommonShadow}
  
  ${
    ({inputName}) => {
      return(
        inputName !== '' && BgPurple
      )
    }
  }
`;