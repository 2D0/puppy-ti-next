import styled, { css } from 'styled-components';
import {
    BgWhite,
    CommonShadow
} from '@/style/Common.style.jsx';


// ********************* 퍼센트 바 ********************
export const PercentBarFill = styled.div`
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 1s ease;
    ${BgLightPurple}
`;
export const PercentBar = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    ${BgWhite}

    ${({ percent }) => percent !== 100 && CommonShadow}
    
    ${PercentBarFill} {
        width: ${({ percent }) => percent}%;
    }
`;