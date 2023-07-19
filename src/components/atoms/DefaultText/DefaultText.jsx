import React from 'react';

//스타일
import * as A from 'DefaultText.style.jsx';

const DefaultText = ({text}) => {
    return (
        <A.DefaultTextAtom>
            {text}
        </A.DefaultTextAtom>
    );
};
export default DefaultText;
