import React from 'react';

//스타일
import * as A from 'Logo.style.jsx';

const Logo = ({logoColor}) => {
    return (
        <A.LogoAtom>
            <A.LogoImg src={logoColor} />
        </A.LogoAtom>
    );
};
export default Logo;
