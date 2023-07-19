import React from 'react';

//스타일
import * as A from 'NextButton.style.jsx';

const NextButton = ({startActive, passName}) => {
    return (
        <A.NextButton startActive={startActive} onClick={passName} type="submit">
            시작하기
        </A.NextButton>
    );
};
export default NextButton;
