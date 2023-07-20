import React from 'react';

//스타일
import * as M from '@/components/molecules/PageShare/PageShare';

//이미지
import { Share, SnsFaceBook, SnsKakao, SnsLink, SnsTwitter } from '@/assets/img/icons/index.js';

const ShareCont = () => {
    return (
        <M.CommonShare>
            <M.CommonShareTit>
                <M.CommonShareIcon src={Share} alt="공유하기"></M.CommonShareIcon>
                <M.CommonShareTxt>공유하기</M.CommonShareTxt>
            </M.CommonShareTit>
            <M.CommonSns>
                <M.CommonSnsIcon>
                    <M.CommonSnsLink to="/">
                        <M.CommonSnsIconImg src={SnsFaceBook} alt="페이스북" />
                    </M.CommonSnsLink>
                </M.CommonSnsIcon>
                <M.CommonSnsIcon>
                    <M.CommonSnsLink to="/">
                        <M.CommonSnsIconImg src={SnsKakao} alt="카카오톡" />
                    </M.CommonSnsLink>
                </M.CommonSnsIcon>
                <M.CommonSnsIcon>
                    <M.CommonSnsLink to="/">
                        <M.CommonSnsIconImg src={SnsTwitter} alt="트위터" />
                    </M.CommonSnsLink>
                </M.CommonSnsIcon>
                <M.CommonSnsIcon>
                    <M.CommonSnsLink to="/">
                        <M.CommonSnsIconImg src={SnsLink} alt="링크" />
                    </M.CommonSnsLink>
                </M.CommonSnsIcon>
            </M.CommonSns>
        </M.CommonShare>
    );
};
export default ShareCont;
