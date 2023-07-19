import styled from 'styled-components';

export const SlashBackgroundAtom = styled.img`
    width: 83%;
    position: absolute;
    z-index: 2;
`;
export const BackImgLinesTop = styled(SlashBackgroundAtom)`
    top: -10%;
    right: -20%;
`;
export const BackImgLinesBottom = styled(SlashBackgroundAtom)`
    bottom: -10%;
    left: -20%;
`;