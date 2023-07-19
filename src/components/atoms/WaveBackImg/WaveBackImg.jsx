import React from 'react';

//스타일
import * as A from 'WaveBackImg.style.jsx';

//이미지
import {Wave} from '@/assets/img/background/index.js';

const WaveBackImg = () => {
    return (
        <>
            <A.WaveBackImgAtom src={Wave}/>
        </>
    );
};
export default WaveBackImg;
