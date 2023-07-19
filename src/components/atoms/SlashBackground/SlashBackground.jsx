import React from 'react';

//스타일
import * as A from 'SlashBackground.style.jsx';

//이미지
import {Slash} from '@/assets/img/background/index.js';

const SlashBackground = () => {
    return (
        <>
            <A.SlashBackgroundAtom src={Slash}/>
        </>
    );
};
export default SlashBackground;
