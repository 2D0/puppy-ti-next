import React from 'react';

//스타일
import * as A from 'ShareButton.style.jsx';

const ShareButton = ({shareButtonImg, shareButtonText}) => {
            return (
            <A.ShareButtonAtom>
                {/*<A.BackButtonImg src={Back} alt="메인으로 가기"/>*/}
                {shareButtonImg}
                {shareButtonText}
            </A.ShareButtonAtom>
            );
};
export default ShareButton;
