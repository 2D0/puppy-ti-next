import { Link } from 'react-router-dom';
import {
    FontLargeSize,
    flexItemCenter
} from '@/style/Common.style.jsx';

export const BackButtonAtom = styled(Link)`
    padding: 10px;
    gap: 0 10px;
    ${flexItemCenter}
    ${FontLargeSize}
`;
export const BackButtonImg = styled.img`
    width: 25px;
`;