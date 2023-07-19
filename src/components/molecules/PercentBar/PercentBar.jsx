import React from 'react';

//스타일
import * as M from './PercentBar.style.jsx';

const CheckHead = ({ percent }) => {
    return (
        <M.PercentBar percent={percent}>
            <M.PercentBarFill>
                <C.A11yHidden>{percent}%</C.A11yHidden>
            </M.PercentBarFill>
        </M.PercentBar>
    );
};

export default CheckHead;
