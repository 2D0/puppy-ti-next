import React from 'react';

//스타일
import * as A from 'ButtonText.style.jsx';

const ButtonText = ({buttonName}) => {
    return (
        <A.ButtonTextAtom>
            {buttonName}
        </A.ButtonTextAtom>
    );
};
export default ButtonText;
