import React from 'react';

//스타일
import * as A from './BackButton.style.jsx';
import backButtonText from '@/components/atoms/ButtonText/ButtonText';

//이미지
// import {Back} from '@/assets/img/icons/index.js';

const BackButton = ({backButtonImg}) => {
    return (
        <A.BackButtonAtom>
            {/*<A.BackButtonImg src={Back} alt="메인으로 가기"/>*/}
            <A.BackButtonImg>{backButtonImg}</A.BackButtonImg>
            <backButtonText />
        </A.BackButtonAtom>
    );
};
export default BackButton;